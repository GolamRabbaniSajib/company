import ContactHome from "@/components/UI/Contact-Home/ContactHome";
import FinalHero from "@/components/UI/Hero/FinalHero";
// import { IoChatbox } from "react-icons/io5";
import OurClient from "@/components/UI/OurClient/OurClient";
import OurService from "@/components/UI/OurService/OurService";
import Performance from "@/components/UI/Performance/Performance";
// import TeamMember from "@/components/UI/TeamMember/TeamMember";
import Testimonials from "@/components/UI/Testimonials/Testimonials";
import WhyChooseUs from "@/components/UI/WhyChooseUs/WhyChooseUs";
import WhyTrustUs from "@/components/UI/WhyTrustUs/WhyTrustUs";
import TechStack from "@/components/TechStack/TechStack";
import ServiceSection from "@/components/UI/ServiceSection/ServiceSection";

export default function Home() {
  
  return (
    <div className="relative overflow-x-hidden">
      <FinalHero />
      
      <TechStack />
      <ServiceSection></ServiceSection>
      {/* <OurService /> */}
      <WhyChooseUs />
      {/* <WhyTrustUs /> */}
      <Performance />
      <OurClient />
      <ContactHome />
      <Testimonials />
      {/* <TeamMember /> */}
    </div>
  );
}


