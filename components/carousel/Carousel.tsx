import Image from "next/image";

export default function Carousel({ imagesData }) {
  return (
    <div className="flex flex-col">
      <Image
        className="w-full h-72 object-cover mb-4"
        text="First slide"
        src={imagesData.thumbnail}
        width={200}
        height={200}
        alt="slide"
      />
      <div className="flex">
        <Image
          className="w-36 h-24 object-cover"
          text="First slide"
          src={imagesData.images[0]}
          width={200}
          height={200}
          alt="slide"
        />
        <Image
          className="w-36 h-24 object-cover mx-4"
          text="First slide"
          src={imagesData.images[2]}
          width={200}
          height={200}
          alt="slide"
        />
        <Image
          className="w-36 h-24 object-cover"
          text="First slide"
          src={imagesData.images[3]}
          width={200}
          height={200}
          alt="slide"
        />
      </div>
    </div>
  );
}
