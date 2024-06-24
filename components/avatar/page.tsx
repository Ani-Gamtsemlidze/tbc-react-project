"use client";
import { PutBlobResult } from "@vercel/blob";
import { useEffect, useRef, useState } from "react";
import { changePictureAction } from "../../user-api";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

interface AvatarUploadPageProps {
  setIsUpload: React.Dispatch<React.SetStateAction<boolean>>;
}

const AvatarUploadPage: React.FC<AvatarUploadPageProps> = ({ setIsUpload }) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const { user } = useUser();
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [loading, setLoading] = useState(false);

  if (!user || !user.sub) {
    throw new Error("User or user.sub is undefined");
  }

  useEffect(() => {
    if (!user.sub) {
      throw new Error("User or user.sub is undefined");
    }
    if (blob && user?.sub.length > 0) {
      changePictureAction(user?.sub, blob?.url).then(() => {
        setIsUpload(false); // Close the upload box after successful upload
      });
    }
  }, [user.sub, blob]);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.files || event.target.files.length === 0) {
      throw new Error("No file selected");
    }
    const file = event.target.files[0];
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.BASE_URL}/api/avatar?filename=${file.name}`,
        {
          method: "POST",
          body: file,
        }
      );
      const newBlob = (await response.json()) as PutBlobResult;
      setBlob(newBlob);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* {uploadBoxOpen && ( */}
      <div className="bg-[rgba(0,0,0,0.7)] flex items-center justify-center h-screen fixed top-0 w-screen right-0 z-50">
        <div className="sm:w-[32rem] max-sm:w-[90%] mx-auto my-10 overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-lg">
          <div className="relative bg-greenColor py-6 pl-8 text-xl font-semibold uppercase tracking-wider text-white">
            Upload Image
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 right-0 m-5 h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              onClick={() => setIsUpload(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="space-y-4 px-8 py-10 relative h-[430px]">
            <h2 className="text-xl text-center">Change your Avatar</h2>
            <div className="flex h-[230px] flex-col items-center justify-center rounded-lg border-4 border-dashed px-4 py-10">
              <Image
                className="w-14 h-14 object-contain"
                src="/images/upload.svg"
                alt="upload"
                width={200}
                height={200}
              />
              {loading ? (
                <div className="absolute bottom-10 flex flex-col items-center">
                  <div className="image-loader"></div>
                </div>
              ) : (
                <div className="absolute bottom-10 flex flex-col items-center">
                  <input
                    className="hidden"
                    name="file"
                    ref={inputFileRef}
                    type="file"
                    required
                    onChange={handleFileChange}
                  />
                  <button
                    type="button"
                    className="shadow-blue-100 block rounded-full border bg-white px-8 py-2 font-normal text-blue-500 shadow hover:bg-blue-50"
                    onClick={() => inputFileRef.current?.click()}
                  >
                    Choose a File
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { AvatarUploadPage };
