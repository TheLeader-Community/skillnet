
import Sectionformation from "./components/section/Sectionformation";
import Header from "./components/ui/Header";
import Hero from "./components/ui/Hero";
import SectionExpertise from "./components/section/SectionExpertise";
import SectionPopularCourses from "./components/section/SectionPopularCourses";
import Footer from "./components/ui/Footer";
import Logo from "./components/ui/Logo";

const Index = () => {

  return (
    <div>
      <Header />
      <Hero />
      <SectionExpertise />
      <section className="p-2 md:px-8 lg:px-20">
        <div className=" p-5 flex flex-col md:flex-row  justify-between items-center">
          <div className="">
            <div className=" pb-2">
              <Logo></Logo>
            </div>
            <h1 className=" text-4xl md:text-5xl ps-1 font-bold">Formations populaires</h1>
            <p className=" m-2 mt-5 text-zinc-700">
              les formations les plus consultés sur notre platforme depuis sa création
            </p>
          </div>
        </div>
        <SectionPopularCourses />
      </section>

      <section className="bg-zinc-50 mt-10 md:mt-0 md:px-10 ">
        <Sectionformation />
      </section>


      <Footer></Footer>

    </div>
  )
}



export default Index;

