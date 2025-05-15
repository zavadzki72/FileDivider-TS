import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Re-export updateDownload from download-manager
export { updateDownload } from "@/lib/download-manager"

// Utility function to format bytes
export function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return "0 Bytes"

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
}

// Utility function to format date
export function formatDate(timestamp: number): string {
  const date = new Date(timestamp)
  return date.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

// Utility function to generate a unique ID
export function generateUniqueId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
