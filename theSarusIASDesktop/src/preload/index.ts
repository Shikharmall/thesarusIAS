import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// 🚫 Prevent drag & drop from causing navigation or reloading
window.addEventListener("dragover", (e) => e.preventDefault())
window.addEventListener("drop", (e) => e.preventDefault())
window.addEventListener("dragstart", (e) => e.preventDefault())

// Custom APIs for renderer
const api = {}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
