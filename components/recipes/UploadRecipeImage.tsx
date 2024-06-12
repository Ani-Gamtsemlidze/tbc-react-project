"use client";
import type { PutBlobResult } from "@vercel/blob";
import { useState, useRef } from "react";

interface UploadRecipeImageProps {
  onImageUpload: (url: string) => void; // Callback function to handle image upload
}

export default function UploadRecipeImage({
  onImageUpload,
}: UploadRecipeImageProps) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.files) {
      throw new Error("No file selected");
    }

    const file = event.target.files[0];

    const response = await fetch(
      `/api/upload-recipe-image?filename=${file.name}`,
      {
        method: "POST",
        body: file,
      }
    );

    const newBlob = (await response.json()) as PutBlobResult;
    setBlob(newBlob);
    onImageUpload(newBlob.url);
  };

  return (
    <>
      <h1>Upload Your Avatar</h1>

      <input
        name="file"
        ref={inputFileRef}
        type="file"
        onChange={handleFileChange}
        required
      />

      {blob && (
        <div>
          Blob url: <a href={blob.url}>{blob.url}</a>
        </div>
      )}
    </>
  );
}
