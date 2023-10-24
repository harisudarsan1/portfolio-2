import Hero from "@/pages/Hero";
import AboutPage from "@/pages/About";
import Work from "@/pages/Work";
import Projects from "@/pages/Projects";
import OtherProjects from "@/pages/OtherProjects";
import Contact from "@/pages/Contact";
import Footer from "@/pages/Footer";
import SocialIcons from "@/components/SocialIcons";
import Email from "@/components/Email";

export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <AboutPage></AboutPage>
      <Work></Work>
      <Projects></Projects>
      <OtherProjects></OtherProjects>
      <Contact></Contact>
      <SocialIcons></SocialIcons>
      <Footer></Footer>

      <Email></Email>
    </div>
  );
}
