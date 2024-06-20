import { useState, useRef } from "react";

interface UploadRecipeImageProps {
  onImagesUpload: (urls: string[]) => void;
}

export default function UploadImages({
  onImagesUpload,
}: UploadRecipeImageProps) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blobs, setBlobs] = useState<any[]>([]);
  const [load, setLoad] = useState(false);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.files) {
      throw new Error("No files selected");
    }

    const files = Array.from(event.target.files);
    setLoad(true);
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
    } finally {
      setLoad(false);
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
      />
      {load ? <div className="  text-green-500 "> uploading... </div> : null}
    </>
  );
}
