import HeroSec from "@/components/HeroSec";
import Navbar from "@/components/Navbar";
import DestinationA from "@/components/DestinationA";
import Image from "next/image";
import Crew from "@/components/Crew";

export default function Home() {
  return (
    <main >
        <Navbar/>
        <HeroSec/>
     <DestinationA/>
    <Crew/>
    </main>
  );
}
