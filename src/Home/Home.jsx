import Blogs from "../components/Blogs/Blogs";
import FAQs from "../components/FAQ/FAQs";
import Hero from "../components/Hero/Hero";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import Layout from "../components/Layout/Layout";
import OurFamilies from "../components/OurFamilies/OurFamilies";
import PatientCaring from "../components/PatientCaring/PatientCaring";

export default function Home() {
  return (
    <Layout>
      <Hero/>
      <HeroSlider/>
      <PatientCaring/>
      <Blogs/>
      <OurFamilies/>
      <FAQs/>
    </Layout>
  );
}