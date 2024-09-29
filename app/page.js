import HeroSec from "@/components/HeroSec";
import Navbar from "@/components/Navbar";
import DestinationA from "@/components/DestinationA";
import Image from "next/image";

export default function Home() {
  return (
    <main >
        <Navbar/>
        <HeroSec/>
     <DestinationA/>
    </main>
  );
}
