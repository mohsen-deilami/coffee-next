import About from "@/Components/templates/index/About";
import Menu from "@/Components/templates/index/Menu";
import Offer from "@/Components/templates/index/Offer";
import Reservation from "@/Components/templates/index/Reservation";
import Service from "@/Components/templates/index/Service";
import Slider from "@/Components/templates/index/Slider";
import Testimonial from "@/Components/templates/index/Testimonial";

export default function Home({ dataServices }) {
  return (
    <>
      <Slider />
      <About />
      <Service services={dataServices.services} />
      <Offer />
      <Menu />
      <Reservation />
      <Testimonial />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/services");
  const services = await res.json();
  return {
    props: {
      dataServices: {
        services,
      },
    },
    revalidate: 60 * 60 * 12,
  };
}
