"use client";
import { PutBlobResult } from "@vercel/blob";
import { useEffect, useRef, useState } from "react";
import { changePictureAction } from "../../user-api";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function AvatarUploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const { user }: any = useUser();
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  useEffect(() => {
    if (blob && user?.sub.length > 0) {
      changePictureAction(user.sub, blob?.url);
    }
  }, [user.sub, blob]);

  console.log(blob);
  return (
    <div className=" bg-[rgba(0,0,0,0.7)] flex items-center justify-center   h-screen fixed top-0  w-screen right-0 z-50 ">
      <div className=" pt-10 z-50 bg-[#a67171] flex  ">
        <form
          className="bg-none"
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
            className=""
            name="file"
            ref={inputFileRef}
            type="file"
            required
          />
          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
  );
}
