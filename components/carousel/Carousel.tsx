// import Image from "next/image";

// interface ImageData {
//   thumbnail: string;
//   images: string[];
// }

// interface Props {
//   imagesData: ImageData;
// }

// const CarouselItems: React.FC<Props> = ({ imagesData }) => {
//   const { thumbnail, images } = imagesData;

//   return (
//     <div className="flex flex-col">
//       <Image
//         className="w-full h-72 object-cover mb-4"
//         src={thumbnail}
//         width={200}
//         height={200}
//         alt="thumbnail"
//       />
//       <div className="flex">
//         {images.slice(0, 3).map((image, index) => (
//           <Image
//             key={index}
//             className="w-36 h-24 object-cover mx-4"
//             src={image}
//             width={200}
//             height={200}
//             alt={`slide-${index}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export { CarouselItems };
