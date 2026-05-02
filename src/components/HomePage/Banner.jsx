"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="mt-5">
      <Swiper
        navigation={true}
        autoplay={{ delay: 4000 }}
        modules={[Navigation, Autoplay]}
        className="h-[400px]"
      >

         <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/8nK6V9Sm/banner-tile3.jpg')] h-full w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
          
            <div className="w-full h-full bg-black/50 flex items-center ">
              <div className="max-w-7xl mx-auto px-6 text-white">
                <h1 className="text-4xl md:text-2xl font-bold mb-4 max-w-2xl">
                 Marble Effect Tile
                </h1>
                <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
             Luxury tile with realistic marble texture.
                </p>

                <div className="flex gap-4">
                  <Link href="/all-tiles">
                    <button className="  btn bg-linear-to-r from-pink-100 via-purple-100 bg-red-100">
                     Browse Now
                    </button>
                  </Link>

                 
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
            
         <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co.com/ycCxTVCJ/tiles05.webp')] h-full w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
          
            <div className="w-full h-full bg-black/50 flex items-center ">
              <div className="max-w-7xl mx-auto px-6 text-white">
                <h1 className="text-4xl md:text-2xl font-bold mb-4 max-w-2xl">
                  Ceramic White Tile
                </h1>
                <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
               Elegant ceramic tile with glossy white finish.
                </p>

                <div className="flex gap-4">
                  <Link href="/all-tiles">
                    <button className=" btn bg-linear-to-r from-pink-100 via-purple-100 bg-red-100">
                      Browse Now
                    </button>
                  </Link>

                
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

         <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co.com/0Rt7qbn4/Marmo-Satuario-Gold-jpg.webp')] h-full w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
          
            <div className="w-full h-full bg-black/50 flex items-center ">
              <div className="max-w-7xl mx-auto px-6 text-white">
                <h1 className="text-2xl md:text-2xl font-bold mb-4 max-w-2xl">
                Porcelain Gray Tile
                </h1>
                <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
                Durable porcelain tile with matte gray finish.
                </p>

                <div className="flex gap-4">
                  <Link href="all-tiles">
                    <button className="  btn bg-linear-to-r from-pink-100 via-purple-100 bg-red-100">
                    Browse Now
                    </button>
                  </Link>

                
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
  
      </Swiper>
    </div>
  );
}