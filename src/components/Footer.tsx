
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-impact-black text-impact-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/b532da65-78db-4946-a067-216e649153ba.png" 
                alt="IMPACTO Boxing Gear" 
                className="h-10 w-auto" 
              />
              <span className="ml-2 text-impact-white font-heading text-2xl tracking-wider">IMPACTO</span>
            </Link>
            <p className="text-sm text-gray-400">
              Golpea con fuerza, deja huella.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/ImpactoBoxing" className="text-gray-400 hover:text-impact-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com/ImpactoBoxing" className="text-gray-400 hover:text-impact-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com/Impacto_Box" className="text-gray-400 hover:text-impact-red transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://youtube.com/ImpactoBoxingOfficial" className="text-gray-400 hover:text-impact-red transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-impact-red transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-impact-red transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-impact-red transition-colors">Products</Link></li>
              <li><Link to="/training" className="text-gray-400 hover:text-impact-red transition-colors">Training Tips</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-impact-red transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-xl mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/products/gloves" className="text-gray-400 hover:text-impact-red transition-colors">Boxing Gloves</Link></li>
              <li><Link to="/products/wraps" className="text-gray-400 hover:text-impact-red transition-colors">Hand Wraps</Link></li>
              <li><Link to="/products/equipment" className="text-gray-400 hover:text-impact-red transition-colors">Training Equipment</Link></li>
              <li><Link to="/products/apparel" className="text-gray-400 hover:text-impact-red transition-colors">Apparel</Link></li>
              <li><Link to="/products/accessories" className="text-gray-400 hover:text-impact-red transition-colors">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-xl mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@impactoboxing.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Fighter Street, Boxing City</li>
            </ul>
            <div className="mt-6">
              <Link to="/contact" className="button-outline">Get in Touch</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} IMPACTO Boxing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
