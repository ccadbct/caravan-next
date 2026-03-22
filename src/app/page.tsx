import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesGrid } from "@/components/home/FeaturesGrid";
import { CuisineCards } from "@/components/home/CuisineCards";
import { StorySection } from "@/components/home/StorySection";
import { PromoSection } from "@/components/home/PromoSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { OrderSection } from "@/components/home/OrderSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesGrid />
      <CuisineCards />
      <StorySection />
      <PromoSection />
      <TestimonialsSection />
      <OrderSection />
    </>
  );
}
