import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Volunteering from "@/components/Volunteering";

export default function Home() {
  return (
    <main>
      <div className="font-mono flex flex-col min-h-screen bg-background text-foreground">
      <Navbar/>      
      <main className="flex-1">
        <About/>
        <Experience/>
        <Projects/>
        <Research/>
        <Volunteering/>
        <Contact/>
      </main>
      <Footer/>
    </div>
    </main>
  );
}

