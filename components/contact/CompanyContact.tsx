import Image from "next/image";
export default function CompanyContact({ image, companyInfo }) {
  return (
    <>
      <div className="flex items-center ">
        <div className="w-12 h-12 rounded-[50%] bg-cyan-500 flex items-center justify-center mt-6 mr-4">
          <Image
            className="w-6 h-6 object-cover"
            src={image}
            alt={companyInfo}
            width={24}
            height={24}
          />
        </div>
        <p className="text-base mt-6">{companyInfo}</p>
      </div>
    </>
  );
}
