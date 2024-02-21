import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import Home from "../pages/Home";

function Slide() {
  const imagenes = [
    "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/06/16/16869010428768.jpg",
    "https://admin.digitalsport.com.ar/files/uploads/JULIO%20DIO%2021/FORUM%20ADIDAS%20(1).png",
    "https://media.gq.com.mx/photos/6318d280c6577c3791606b51/16:9/w_2560%2Cc_limit/ADIDAS-NMDV3.jpg",
    "https://img.buzzfeed.com/buzzfeed-static/static/2023-06/6/2/tmp/3a8b1436d7a6/tmp-name-3-469-1686019372-20_16x9.jpg",
  ];

  return (
    <div className="bg-fixed">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3200,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}>
        {imagenes.map((imagenes, index) => (
          <SwiperSlide className="text-white" key={index}>
            <h1 className="absolute inset-0 flex items-center justify-center z-30 text-[100px] font-Montserrat"></h1>

            <div className="absolute inset-0 bg-black z-20 w-full h-lvh opacity-60" />
            <img src={imagenes} className="w-full h-lvh z-10 " />
          </SwiperSlide>
        ))}
      </Swiper>
      <Home />
    </div>
  );
}

export default Slide;
