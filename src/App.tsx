import "./App.css";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Services from "./components/Services";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 py-12 space-y-12">
        {/* Hero Section */}
        <Hero />

        {/* Servicios */}
        <Services />

        {/* Contacto */}
        <Contact />
      </div>
    </>
  );
}

export default App;
