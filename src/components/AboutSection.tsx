
import { ShieldCheck, Award, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <h2 className="section-title text-impact-black">ABOUT IMPACTO</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              IMPACTO is dedicated to the world of boxing, offering high-quality apparel and equipment for professional and amateur boxers. We focus on innovative designs and durable materials that enhance athlete performance both inside and outside the ring.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our mission is to inspire and equip boxers with quality products designed to withstand the toughest training sessions and help each athlete reach their maximum potential.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <ShieldCheck className="text-impact-red mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-heading text-xl text-impact-black">Durability & Quality</h3>
                  <p className="text-gray-600">Our products are built to last through intense training.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Award className="text-impact-red mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-heading text-xl text-impact-black">Professional Design</h3>
                  <p className="text-gray-600">Designed with input from professional fighters.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Zap className="text-impact-red mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-heading text-xl text-impact-black">Performance Enhancement</h3>
                  <p className="text-gray-600">Engineered to improve your performance in the ring.</p>
                </div>
              </div>
            </div>
            
            <Link to="/about" className="button-impact">
              DISCOVER OUR STORY
            </Link>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&q=80&w=800" 
                alt="Boxing training" 
                className="w-full h-auto"
              />
            </div>
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full border-4 border-impact-red rounded-lg -z-10 -m-4"
              style={{ maxWidth: "calc(100% - 2rem)" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
