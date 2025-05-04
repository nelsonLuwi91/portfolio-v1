"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { Loader2 } from "lucide-react"

interface ImageUploaderProps {
  onUploadComplete: (url: string) => void
  folder?: string
  className?: string
  aspectRatio?: "square" | "video"
  previewUrl?: string
}

export function ImageUploader({
  onUploadComplete,
  folder = "images",
  className = "",
  aspectRatio = "square",
  previewUrl,
}: ImageUploaderProps) {
  const inputFileRef = useRef<HTMLInputElement>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [preview, setPreview] = useState<string | null>(previewUrl || null)
  const [error, setError] = useState<string | null>(null)

  const aspectRatioClass = aspectRatio === "square" ? "aspect-square" : "aspect-video"

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return
    }

    const file = event.target.files[0]
    setError(null)

    // Create a preview immediately
    const objectUrl = URL.createObjectURL(file)
    setPreview(objectUrl)

    setIsUploading(true)

    try {
      // Try to upload to the server
      const formData = new FormData()
      formData.append("file", file)
      formData.append("folder", folder)

      const response = await fetch("/api/upload-local", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`)
      }

      const data = await response.json()

      // Pass the URL back to the parent component
      onUploadComplete(data.url)
    } catch (error) {
      console.error("Upload failed:", error)
      setError("Upload to server failed. Using local preview instead.")

      // Even if server upload fails, we can still use the local preview
      // for demonstration purposes
      onUploadComplete(objectUrl)
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div
      className={`relative ${className} ${aspectRatioClass} bg-muted rounded-md overflow-hidden border border-border`}
    >
      {preview ? (
        <Image src={preview || "/placeholder.svg"} alt="Preview" fill className="object-cover" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
          <p className="text-sm">Click to upload image</p>
        </div>
      )}

      <input
        ref={inputFileRef}
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="absolute inset-0 opacity-0 cursor-pointer"
        disabled={isUploading}
      />

      {isUploading && (
        <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      )}

      {error && (
        <div className="absolute bottom-0 left-0 right-0 bg-background/80 p-2 text-xs text-amber-600">{error}</div>
      )}
    </div>
  )
}
