import Announcement from "@/components/Layout/Home/Announcement";
import Banner from "@/components/Layout/Home/Banner";
import FaqSection from "@/components/Layout/Home/FAQ";
import SupportHelplineCard from "@/components/Layout/Home/HelpLine";
import JourneyNeccessities from "@/components/Layout/Home/JourneyNeccessities";

export default function Home() {
  return (
    <>
      <Banner />
      <SupportHelplineCard />
      <Announcement />
      <JourneyNeccessities />
      <FaqSection />
    </>
  );
}
