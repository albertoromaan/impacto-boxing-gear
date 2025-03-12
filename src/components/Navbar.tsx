
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-impact-black/95 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/b532da65-78db-4946-a067-216e649153ba.png" 
              alt="IMPACTO Boxing Gear" 
              className="h-10 w-auto" 
            />
            <span className="ml-2 text-impact-white font-heading text-2xl tracking-wider">IMPACTO</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/" className="nav-link active">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/training" className="nav-link">Training</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link 
              to="/cart" 
              className="ml-4 p-2 bg-impact-red/20 hover:bg-impact-red/30 rounded-full transition-colors"
            >
              <ShoppingCart className="text-impact-white" size={20} />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-impact-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-impact-black/95 z-40 md:hidden transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "60px" }}
      >
        <nav className="flex flex-col items-center justify-center h-full">
          <Link 
            to="/" 
            className="text-impact-white text-xl py-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-impact-white text-xl py-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/products" 
            className="text-impact-white text-xl py-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Products
          </Link>
          <Link 
            to="/training" 
            className="text-impact-white text-xl py-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Training
          </Link>
          <Link 
            to="/contact" 
            className="text-impact-white text-xl py-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link 
            to="/cart" 
            className="text-impact-white text-xl py-4 flex items-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <ShoppingCart className="mr-2" size={20} />
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
