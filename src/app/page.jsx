import Banner from "@/components/HomePage/Banner";
import TopTiles from "@/components/HomePage/TopTiles";
import Marquee from "@/components/Marq";
import { ToastContainer } from "react-toastify";


export default function Home() {
  return (
    <div>
      
       <Banner></Banner>
      <Marquee></Marquee>
      <TopTiles></TopTiles>
      
    </div>
  );
}
