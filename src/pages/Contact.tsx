
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
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
              CONTACTA CON <span className="text-impact-red">NOSOTROS</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Contáctanos para cualquier consulta sobre nuestros productos o servicios.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-3xl font-heading text-impact-black">Información de Contacto</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="text-impact-red mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-heading text-xl text-impact-black">Email</h3>
                    <p className="text-gray-600">info@impactoboxing.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-impact-red mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-heading text-xl text-impact-black">Teléfono</h3>
                    <p className="text-gray-600">+34 555 123 456</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-impact-red mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-heading text-xl text-impact-black">Dirección</h3>
                    <p className="text-gray-600">Calle del Ring 123, 28001 Madrid</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-impact-red focus:border-impact-red"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-impact-red focus:border-impact-red"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-impact-red focus:border-impact-red"
                    placeholder="¿En qué podemos ayudarte?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-impact-red text-white px-6 py-3 rounded-md hover:bg-impact-red/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
