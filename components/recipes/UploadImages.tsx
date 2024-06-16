import { useState, useRef } from "react";

interface UploadRecipeImageProps {
  onImagesUpload: (urls: string[]) => void;
}

export default function UploadImages({
  onImagesUpload,
}: UploadRecipeImageProps) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blobs, setBlobs] = useState<any[]>([]);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.files) {
      throw new Error("No files selected");
    }

    const files = Array.from(event.target.files);

    const uploadPromises: Promise<any>[] = files.map((file) =>
      uploadFile(file)
    );

    try {
      const uploadedBlobs = await Promise.all(uploadPromises);
      setBlobs(uploadedBlobs);
      const urls = uploadedBlobs.map((blob) => blob.url);
      onImagesUpload(urls);
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  const uploadFile = async (file: File): Promise<any> => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(
      `/api/upload-recipe-image?filename=${file.name}`,
      {
        method: "POST",
        headers: {
          "Content-Type": file.type,
        },
        body: file,
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to upload file ${file.name}`);
    }

    return response.json();
  };

  return (
    <>
      <h1>Upload Your Images</h1>
      <input
        name="file"
        ref={inputFileRef}
        type="file"
        onChange={handleFileChange}
        multiple
        required
      />
      {blobs.length > 0 && (
        <div>
          <h2>Uploaded Images:</h2>
          {blobs.map((blob, index) => (
            <div key={index}>
              Blob {index + 1} url: <a href={blob.url}>{blob.url}</a>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
