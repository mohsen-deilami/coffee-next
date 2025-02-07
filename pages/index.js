import About from "@/Components/templates/index/About";
import Menu from "@/Components/templates/index/Menu";
import Offer from "@/Components/templates/index/Offer";
import Reservation from "@/Components/templates/index/Reservation";
import Service from "@/Components/templates/index/Service";
import Slider from "@/Components/templates/index/Slider";
import Testimonial from "@/Components/templates/index/Testimonial";

export default function Home({ data }) {
  return (
    <>
      <Slider />
      <About />
      <Service services={data.services} />
      <Offer />
      <Menu menu={data.menu}/>
      <Reservation />
      <Testimonial />
    </>
  );
}

export async function getStaticProps() {
  const servicesResponse = await fetch("http://localhost:4000/services");
  const servicesData = await servicesResponse.json();

  const menuResponse = await fetch("http://localhost:4000/menu");
  const menuData = await menuResponse.json();

  return {
    props: {
      data: {
        services:servicesData,
        menu:menuData
      },
    },
    revalidate: 60 * 60 * 12,
  };
}
