import { PutBlobResult } from "@vercel/blob";
import { useEffect, useRef, useState } from "react";
import { changePictureAction } from "../../user-api";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function AvatarUploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const { user }: any = useUser();
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [uploadBoxOpen, setUploadBoxOpen] = useState(true);

  useEffect(() => {
    if (blob && user?.sub.length > 0) {
      changePictureAction(user.sub, blob?.url).then(() => {
        setUploadBoxOpen(false); // Close the upload box after successful upload
      });
    }
  }, [user.sub, blob]);

  return (
    <>
      <>
        {uploadBoxOpen && (
          <div className="bg-[rgba(0,0,0,0.7)] flex items-center justify-center h-screen fixed top-0 w-screen right-0 z-50">
            <div className="sm:w-[32rem] shadow-blue-100 mx-auto my-10 overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-lg">
              <div className="relative bg-blue-600 py-6 pl-8 text-xl font-semibold uppercase tracking-wider text-white">
                Upload Image
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 right-0 m-5 h-6 w-6 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  onClick={() => setUploadBoxOpen(false)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div className="space-y-4 px-8 py-10 relative h-[400px]">
                <div className="flex h-[230px] flex-col items-center justify-center rounded-lg border-4 border-dashed px-4 py-10">
                  <Image
                    className="w-14 h-14 object-contain"
                    src="/images/upload.svg"
                    alt="upload"
                    width={200}
                    height={200}
                  />
                  <form
                    className="absolute bottom-5 flex flex-col items-center"
                    onSubmit={async (event) => {
                      event.preventDefault();

                      if (!inputFileRef.current?.files) {
                        throw new Error("No file selected");
                      }

                      const file = inputFileRef.current.files[0];

                      const response = await fetch(
                        `${process.env.BASE_URL}/api/avatar?filename=${file.name}`,
                        {
                          method: "POST",
                          body: file,
                        }
                      );

                      const newBlob = (await response.json()) as PutBlobResult;

                      setBlob(newBlob);
                    }}
                  >
                    <input
                      className="hidden"
                      name="file"
                      ref={inputFileRef}
                      type="file"
                      required
                    />
                    <button
                      type="button"
                      className="shadow-blue-100 mb-8 block rounded-full border bg-white px-4 py-0.5 font-normal text-blue-500 shadow hover:bg-blue-50"
                      onClick={() => inputFileRef.current?.click()}
                    >
                      Browse
                    </button>
                    <button
                      type="submit"
                      className="mt-8 rounded-full bg-blue-600 px-10 py-2 font-semibold text-white"
                    >
                      Submit
                    </button>
                  </form>
                  <p className="mt-4 text-center text-xl font-medium text-gray-800">
                    Drop Files here or use the browse button
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    </>
  );
}
