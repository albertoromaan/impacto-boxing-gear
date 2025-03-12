
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-container relative overflow-hidden min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-impact-black via-impact-black/90 to-impact-black/80 z-10"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e21e22' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left animate-fade-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-impact-white mb-4">
              GOLPEA CON<br />
              <span className="text-impact-red">FUERZA</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              Equipamiento premium para boxeadores que dejan huella dentro y fuera del ring.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link to="/products" className="button-impact">
                COMPRAR AHORA
                <ArrowRight className="inline-block ml-2" size={18} />
              </Link>
              <Link to="/about" className="button-outline">
                NUESTRA HISTORIA
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center animate-float">
            <img 
              src="/lovable-uploads/b532da65-78db-4946-a067-216e649153ba.png" 
              alt="IMPACTO Boxing Gear" 
              className="max-w-md w-full h-auto drop-shadow-[0_0_30px_rgba(226,30,34,0.3)]" 
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-impact-black to-transparent z-20" />
    </section>
  );
};

export default Hero;
