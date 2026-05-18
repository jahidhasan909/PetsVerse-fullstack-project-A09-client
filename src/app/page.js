import Banner from "@/Components/Banner/Banner";
import SuccessStories from "@/Components/SuccessStories/SuccessStories";
import WhyAdoptPets from "@/Components/WhyAdoptPets/WhyAdoptPets";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <WhyAdoptPets></WhyAdoptPets>
      <SuccessStories></SuccessStories>
    </div>
  );
}
