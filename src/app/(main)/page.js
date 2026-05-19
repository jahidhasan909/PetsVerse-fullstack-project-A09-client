import Banner from "@/Components/Banner/Banner";
import PetAdoptionBanner from "@/Components/ButtomExplainAdoptBanner/PetAdoptionBanner";
import PawsitiveReviews from "@/Components/PawsitiveReviews/PawsitiveReviews";
import PetCareTips from "@/Components/PetCareTips/PetCareTips";

import SuccessStories from "@/Components/SuccessStories/SuccessStories";
import WhyAdoptPets from "@/Components/WhyAdoptPets/WhyAdoptPets";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <WhyAdoptPets></WhyAdoptPets>
      <SuccessStories></SuccessStories>
      <PetCareTips></PetCareTips>
      <PawsitiveReviews></PawsitiveReviews>
      <PetAdoptionBanner></PetAdoptionBanner>
    </div>
  );
}
