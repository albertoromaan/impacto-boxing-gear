
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-24 bg-impact-black relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-impact-red/30 to-transparent mix-blend-overlay"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-impact-white mb-6">
            READY TO MAKE AN <span className="text-impact-red">IMPACT</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join the community of fighters who trust our gear to perform at their best. Premium quality, innovative design, and unmatched durability.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/products" className="button-impact">
              SHOP NOW
              <ArrowRight className="inline-block ml-2" size={18} />
            </Link>
            <Link to="/contact" className="button-outline">
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default CallToAction;
