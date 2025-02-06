import About from "@/Components/templates/index/About";
import Menu from "@/Components/templates/index/Menu";
import Offer from "@/Components/templates/index/Offer";
import Reservation from "@/Components/templates/index/Reservation";
import Service from "@/Components/templates/index/Service";
import Slider from "@/Components/templates/index/Slider";
import Testimonial from "@/Components/templates/index/Testimonial";

export default function Home() {
  return (
    <>
 <Slider/>
 <About/>
 <Service/>
 <Offer/>
 <Menu/>
 <Reservation/>
 <Testimonial/>
    </>

  )
  
}
