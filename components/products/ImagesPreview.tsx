// import Image from "next/image";
// import { Swiper, SwiperSlide, Navigation, Thumbs } from "./Slider";

// export default function ProductImage({ innerProductData, thumbsSwiper }) {
//   return (
//     <div className="relative">
//       <Swiper
//         modules={[Navigation, Thumbs]}
//         thumbs={{ swiper: thumbsSwiper }}
//         navigation
//       >
//         {/* {gallery?.map((innerProductData) => ( */}
//           <SwiperSlide
//             key={`product-gallery-${innerProductData.id}`}
//             className="flex justify-center items-center"
//           >
//             <Image
//               src={innerProductData.imgUrl}
//               alt={`Product gallery ${innerProductData.id}`}
//               width={450}
//               height={450}
//             />
//           </SwiperSlide>
//           <SwiperSlide
//             key={`product-gallery-${innerProductData.id}`}
//             className="flex justify-center items-center"
//           >
//             <Image
//               src={innerProductData.imgUrl}
//               alt={`Product gallery ${innerProductData.id}`}
//               width={450}
//               height={450}
//             />
//           </SwiperSlide>
//           <SwiperSlide
//             key={`product-gallery-${innerProductData.id}`}
//             className="flex justify-center items-center"
//           >
//             <Image
//               src={innerProductData.imgUrl}
//               alt={`Product gallery ${innerProductData.id}`}
//               width={450}
//               height={450}
//             />
//           </SwiperSlide>
//         {/* ))} */}
//       </Swiper>
//     </div>
//   );
// }
