import Container from "@/components/Container";
import Announcement from "@/components/Layout/Home/Announcement";
import Banner from "@/components/Layout/Home/Banner";
import SupportHelplineCard from "@/components/Layout/Home/HelpLine";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <SupportHelplineCard />
      <Announcement />
      <>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
        dolorum, reprehenderit optio, alias distinctio ipsam atque deserunt
        nobis repellat dolores culpa maxime. Obcaecati, veritatis consectetur
        iure vitae quod magnam reiciendis tenetur consequuntur sapiente placeat
        suscipit impedit tempore asperiores odit, nisi ab velit excepturi
        expedita cupiditate ex repellendus. Aspernatur aliquid sunt dignissimos
        tenetur ut distinctio ad eligendi natus et est commodi, aut dolorem
        dolores quos quod labore corporis a neque, obcaecati modi, veritatis
        ducimus provident. Doloremque sequi ducimus ipsam molestias nobis
        possimus neque dignissimos sunt culpa voluptates, est provident! At
        quaerat pariatur alias corporis assumenda mollitia ex porro, omnis illum
        sequi!
      </>
    </>
  );
}
