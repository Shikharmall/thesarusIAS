import { useState } from "react";

const TicketDetailsScreen = ({ ticket }: { ticket: any }) => {
  const [messages, setMessages] = useState([
    { sender: "User", text: ticket.description, date: ticket.createdAt },
  ]);
  const [newMsg, setNewMsg] = useState("");

  const sendMessage = () => {
    if (newMsg.trim()) {
      setMessages([...messages, { sender: "You", text: newMsg, date: new Date().toISOString() }]);
      setNewMsg("");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-6 bg-white shadow p-6 rounded-lg">
      <h2 className="text-xl font-semibold">{ticket.title}</h2>
      <p className="text-gray-500 text-sm mb-4">
        {ticket.category} • Priority: {ticket.priority}
      </p>

      <div className="space-y-3 mb-4">
        {messages.map((msg, i) => (
          <div key={i} className={`p-3 rounded-lg ${msg.sender === "You" ? "bg-green-100 text-right" : "bg-gray-100 text-left"}`}>
            <p className="text-sm">{msg.text}</p>
            <span className="text-xs text-gray-500">{new Date(msg.date).toLocaleString()}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          placeholder="Type a reply..."
          className="flex-1 border px-3 py-2 rounded-lg"
        />
        <button
          onClick={sendMessage}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default TicketDetailsScreen;
