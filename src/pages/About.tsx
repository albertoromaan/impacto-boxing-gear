import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Shield, Award, Dumbbell, Star } from "lucide-react";

const About = () => {
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
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-heading font-black text-impact-white mb-6">
              NUESTRA <span className="text-impact-red">HISTORIA</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Descubre la pasión y compromiso detrás de IMPACTO, la marca que está revolucionando el mundo del boxeo.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission and Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md animate-fade-up">
              <h2 className="text-3xl font-heading text-impact-black mb-4">Misión</h2>
              <p className="text-gray-700 leading-relaxed">
                Inspirar y equipar a los boxeadores con productos de calidad, diseñados para soportar los entrenamientos más duros y ayudar a cada atleta a alcanzar su máximo potencial.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-md animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-3xl font-heading text-impact-black mb-4">Visión</h2>
              <p className="text-gray-700 leading-relaxed">
                Convertirnos en la marca de referencia en el boxeo mundial, destacándonos por nuestra innovación, calidad y compromiso con los deportistas que practican boxeo o cualquier arte marcial.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title text-impact-black inline-block">NUESTROS VALORES</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center animate-fade-up">
              <div className="w-16 h-16 bg-impact-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-impact-red" size={32} />
              </div>
              <h3 className="text-xl font-heading text-impact-black mb-3">Pasión por el deporte</h3>
              <p className="text-gray-600">
                Vivimos y respiramos boxeo. Nuestra pasión impulsa cada producto que creamos.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 bg-impact-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-impact-red" size={32} />
              </div>
              <h3 className="text-xl font-heading text-impact-black mb-3">Resistencia y durabilidad</h3>
              <p className="text-gray-600">
                Diseñamos productos que resisten el paso del tiempo y los entrenamientos más intensos.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="w-16 h-16 bg-impact-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-impact-red" size={32} />
              </div>
              <h3 className="text-xl font-heading text-impact-black mb-3">Innovación constante</h3>
              <p className="text-gray-600">
                Buscamos constantemente nuevas formas de mejorar nuestros productos y materiales.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center animate-fade-up" style={{ animationDelay: "0.6s" }}>
              <div className="w-16 h-16 bg-impact-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-impact-red" size={32} />
              </div>
              <h3 className="text-xl font-heading text-impact-black mb-3">Compromiso con los atletas</h3>
              <p className="text-gray-600">
                Los deportistas son nuestra prioridad. Sus necesidades guían nuestras decisiones.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center animate-fade-up" style={{ animationDelay: "0.8s" }}>
              <div className="w-16 h-16 bg-impact-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Dumbbell className="text-impact-red" size={32} />
              </div>
              <h3 className="text-xl font-heading text-impact-black mb-3">Espíritu de lucha</h3>
              <p className="text-gray-600">
                Creemos en la perseverancia y la superación personal, valores que refleja el boxeo.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 animate-fade-up">
              <h2 className="section-title text-impact-black">NUESTRA HISTORIA</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                IMPACTO nació en 2018 de la pasión de un grupo de boxeadores profesionales y diseñadores que no encontraban en el mercado productos que combinaran calidad, durabilidad y estética.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Lo que comenzó como un pequeño proyecto para satisfacer necesidades propias, rápidamente se convirtió en una marca reconocida por su compromiso con la excelencia y atención al detalle.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Hoy, IMPACTO es sinónimo de calidad en el mundo del boxeo, con presencia en más de 20 países y el respaldo de atletas profesionales que confían en nuestros productos para sus entrenamientos y competiciones.
              </p>
            </div>
            
            <div className="order-1 md:order-2 animate-fade-in">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80&w=800" 
                  alt="Boxing training" 
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-impact-red rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title text-impact-black inline-block">NUESTRO EQUIPO</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Detrás de IMPACTO hay un equipo apasionado por el boxeo y comprometido con la excelencia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md animate-fade-up">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800&h=500" 
                alt="Alberto Román" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-heading text-impact-black mb-1">Alberto Román</h3>
                <p className="text-impact-red font-medium mb-3">CEO & Fundador</p>
                <p className="text-gray-600">
                  Experto en marketing deportivo con una visión innovadora para el boxeo.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800&h=500" 
                alt="Jose Maria Oteo" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-heading text-impact-black mb-1">Jose Maria Oteo</h3>
                <p className="text-impact-red font-medium mb-3">Director de Operaciones</p>
                <p className="text-gray-600">
                  Especialista en logística y gestión de la cadena de suministro.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <img 
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&q=80&w=800&h=500" 
                alt="Jose Manuel Sierra" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-heading text-impact-black mb-1">Jose Manuel Sierra</h3>
                <p className="text-impact-red font-medium mb-3">Director de Diseño</p>
                <p className="text-gray-600">
                  Diseñador con amplia experiencia en equipamiento deportivo.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md animate-fade-up" style={{ animationDelay: "0.6s" }}>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&h=500" 
                alt="Ruben Rincon" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-heading text-impact-black mb-1">Ruben Rincon</h3>
                <p className="text-impact-red font-medium mb-3">Director Técnico</p>
                <p className="text-gray-600">
                  Experto en desarrollo de productos y control de calidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
