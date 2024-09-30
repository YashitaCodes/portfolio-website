import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NotFound from "@/components/NotFound";

export default function Home() {
  return (
    <main>
      <div className="font-mono flex flex-col min-h-screen bg-background text-foreground">
      <Navbar/>      
      <section className="flex-1">
        <NotFound/>
      </section>
      <Footer/>
    </div>
    </main>
  );
}

