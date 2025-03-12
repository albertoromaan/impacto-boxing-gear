
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DumbbellIcon, Target, Brain, Heart } from "lucide-react";

const Training = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-impact-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e21e22' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-black text-impact-white mb-6">
              ENTRENAMIENTO <span className="text-impact-red">IMPACTO</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Mejora tu técnica, aumenta tu fuerza y alcanza tus objetivos con nuestros programas de entrenamiento especializados.
            </p>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <DumbbellIcon className="text-impact-red mb-4" size={40} />
              <h3 className="text-xl font-heading text-impact-black mb-3">Fuerza y Resistencia</h3>
              <p className="text-gray-600">Programas especializados para aumentar tu potencia y resistencia en el ring.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <Target className="text-impact-red mb-4" size={40} />
              <h3 className="text-xl font-heading text-impact-black mb-3">Técnica y Precisión</h3>
              <p className="text-gray-600">Mejora tu técnica de boxeo con ejercicios específicos y sparring controlado.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <Brain className="text-impact-red mb-4" size={40} />
              <h3 className="text-xl font-heading text-impact-black mb-3">Mentalidad</h3>
              <p className="text-gray-600">Entrena tu mente para mantener el enfoque y la determinación en cada round.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <Heart className="text-impact-red mb-4" size={40} />
              <h3 className="text-xl font-heading text-impact-black mb-3">Acondicionamiento</h3>
              <p className="text-gray-600">Mejora tu resistencia cardiovascular y preparación física general.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Training;
