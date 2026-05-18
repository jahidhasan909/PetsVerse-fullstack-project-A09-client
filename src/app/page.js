import Banner from "@/Components/Banner/Banner";
import PawsitiveReviews from "@/Components/PawsitiveReviews/PawsitiveReviews";
import PetCareTips from "@/Components/PetCareTips/PetCareTips";
import SuccessStories from "@/Components/SuccessStories/SuccessStories";
import WhyAdoptPets from "@/Components/WhyAdoptPets/WhyAdoptPets";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <WhyAdoptPets></WhyAdoptPets>
      <SuccessStories></SuccessStories>
      <PetCareTips></PetCareTips>
      <PawsitiveReviews></PawsitiveReviews>
    </div>
  );
}
