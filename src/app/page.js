import ContactHome from "@/components/UI/Contact-Home/ContactHome";
import FinalHero from "@/components/UI/Hero/FinalHero";
import OurClient from "@/components/UI/OurClient/OurClient";
import Performance from "@/components/UI/Performance/Performance";
import Testimonials from "@/components/UI/Testimonials/Testimonials";
import WhyTrustUs from "@/components/UI/WhyTrustUs/WhyTrustUs";
import TechStack from "@/components/TechStack/TechStack";
import ServiceSection from "@/components/UI/ServiceSection/ServiceSection";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <FinalHero />

      <div className="my-12 md:my-16">
        <TechStack />
      </div>

      <div className="my-12 md:my-16">
        <ServiceSection />
      </div>

      <div className="my-12 md:my-16">
        <WhyTrustUs />
      </div>

      <div className="mt-12 md:mt-16">
        <Performance />
      </div>

      <div className="mb-12 md:mb-16">
        <OurClient />
      </div>

      <div className="my-12 md:my-16">
        <ContactHome />
      </div>

      <div className="my-12 md:my-16">
        <Testimonials />
      </div>
    </div>
  );
}
