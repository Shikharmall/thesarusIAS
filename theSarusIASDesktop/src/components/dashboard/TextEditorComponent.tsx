import React, { useEffect, useRef, useState } from "react";

type TextEditorProps = {
  value?: string; // initial HTML value
  placeholder?: string;
  onChange?: (html: string) => void;
  className?: string;
};

const ToolbarButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean }
> = ({ children, active, ...props }) => (
  <button
    {...props}
    type="button"
    className={`px-2 py-1 rounded-md text-sm transition disabled:opacity-50 focus:outline-none ${
      active ? "bg-gray-200" : "hover:bg-gray-100"
    }`}
  >
    {children}
  </button>
);

export default function TextEditorComponent({
  value = "",
  placeholder = "Start typing...",
  onChange,
  className = "",
}: TextEditorProps) {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const [html, setHtml] = useState<string>(value);
  const [charCount, setCharCount] = useState<number>(0);
  const [selectionExists, setSelectionExists] = useState<boolean>(false);

  useEffect(() => {
    setHtml(value || "");
  }, [value]);

  useEffect(() => {
    // update char count (plain text)
    const text = editorRef.current?.innerText ?? "";
    setCharCount(text.trim().length);
    onChange?.(html);
  }, [html, onChange]);

  const exec = (command: string, value?: string) => {
    // focus editor before running command
    editorRef.current?.focus();
    // Safari/older browsers might need selection range restoral here
    document.execCommand(command, false, value);
    // update html state after small delay
    requestAnimationFrame(() => {
      setHtml(editorRef.current?.innerHTML ?? "");
    });
  };

  const handleInput = () => {
    setHtml(editorRef.current?.innerHTML ?? "");
  };

  const insertLink = () => {
    const url = prompt("Enter URL (include https://)"); // simple prompt
    if (url) exec("createLink", url);
  };

  const setHeading = (n: 1 | 2 | 3 | "p") => {
    exec("formatBlock", n === "p" ? "P" : `H${n}`);
  };

  const clearFormatting = () => {
    exec("removeFormat");
    // remove anchors and headings maybe:
    // unwrap anchors by replacing with text nodes
    const editor = editorRef.current;
    if (!editor) return;
    const anchors = Array.from(editor.querySelectorAll("a"));
    anchors.forEach((a) => {
      const text = document.createTextNode(a.textContent || "");
      a.replaceWith(text);
    });
    // replace headings to paragraph
    const headings = Array.from(editor.querySelectorAll("h1,h2,h3"));
    headings.forEach((h) => {
      const p = document.createElement("p");
      p.innerHTML = h.innerHTML;
      h.replaceWith(p);
    });
    setHtml(editor.innerHTML);
  };

  const handlePastePlain = (e: React.ClipboardEvent) => {
    // paste as plain text to avoid messy HTML
    e.preventDefault();
    const text = e.clipboardData.getData("text/plain");
    document.execCommand("insertText", false, text);
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2 bg-white p-2 rounded-t-lg border border-b-0">
        <div className="flex items-center gap-1">
          <ToolbarButton onClick={() => exec("bold")} title="Bold">
            <strong>B</strong>
          </ToolbarButton>
          <ToolbarButton onClick={() => exec("italic")} title="Italic">
            <em>I</em>
          </ToolbarButton>
          <ToolbarButton onClick={() => exec("underline")} title="Underline">
            <u>U</u>
          </ToolbarButton>
        </div>

        <div className="border-l h-6" />

        <div className="flex items-center gap-1">
          <ToolbarButton onClick={() => setHeading(1)} title="H1">
            H1
          </ToolbarButton>
          <ToolbarButton onClick={() => setHeading(2)} title="H2">
            H2
          </ToolbarButton>
          <ToolbarButton onClick={() => setHeading(3)} title="H3">
            H3
          </ToolbarButton>
          <ToolbarButton onClick={() => setHeading("p")} title="Paragraph">
            P
          </ToolbarButton>
        </div>

        <div className="border-l h-6" />

        <div className="flex items-center gap-1">
          <ToolbarButton onClick={() => exec("insertUnorderedList")} title="Bulleted list">
            • List
          </ToolbarButton>
          <ToolbarButton onClick={() => exec("insertOrderedList")} title="Numbered list">
            1. List
          </ToolbarButton>
        </div>

        <div className="border-l h-6" />

        <div className="flex items-center gap-1 ml-auto">
          <ToolbarButton onClick={insertLink} title="Insert link">
            Link
          </ToolbarButton>
          <ToolbarButton onClick={() => exec("undo")} title="Undo">
            ⎌
          </ToolbarButton>
          <ToolbarButton onClick={() => exec("redo")} title="Redo">
            ↻
          </ToolbarButton>
          <ToolbarButton onClick={clearFormatting} title="Clear formatting">
            Clear
          </ToolbarButton>
        </div>
      </div>

      {/* Editor */}
      <div
        onKeyUp={() => setSelectionExists(Boolean(window.getSelection()?.toString()))}
        onMouseUp={() => setSelectionExists(Boolean(window.getSelection()?.toString()))}
        onBlur={() => {
          // ensure state sync on blur
          setHtml(editorRef.current?.innerHTML ?? "");
        }}
        onInput={handleInput}
        onPaste={handlePastePlain}
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        className="min-h-[180px] max-h-[460px] overflow-auto border border-t-0 rounded-b-lg bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        // show placeholder visually if empty
        data-placeholder={placeholder}
        // small inline style for placeholder (Tailwind can't target data attr in plain JSX easily)
        style={{
          "--placeholder-color": "rgba(107,114,128,0.4)" as React.CSSProperties["color"],
        } as React.CSSProperties}
        dangerouslySetInnerHTML={{ __html: html || "" }}
      />

      {/* Footer: char count, preview, export */}
      <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
        <div className="flex items-center gap-3">
          <div>Chars: <span className="font-medium text-gray-700">{charCount}</span></div>
          <div className="text-gray-400">Selection: {selectionExists ? "Yes" : "No"}</div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              // download HTML
              const blob = new Blob([editorRef.current?.innerHTML || ""], { type: "text/html" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = "content.html";
              a.click();
              URL.revokeObjectURL(url);
            }}
            className="text-xs px-3 py-1 rounded-md border hover:shadow-sm"
          >
            Export HTML
          </button>

          <button
            type="button"
            onClick={() => {
              // simple clear
              if (editorRef.current) {
                editorRef.current.innerHTML = "";
                setHtml("");
              }
            }}
            className="text-xs px-3 py-1 rounded-md border hover:bg-red-50 text-red-600"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
