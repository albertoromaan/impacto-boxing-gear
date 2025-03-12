import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Filter, Search, ChevronDown } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  bestSeller?: boolean;
  new?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Pro Impact Gloves",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1595578045498-5abe6cee8e9e?auto=format&fit=crop&q=80&w=500&h=500",
    category: "gloves",
    bestSeller: true
  },
  {
    id: 2,
    name: "Elite Hand Wraps",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1618517048289-4646902edaf5?auto=format&fit=crop&q=80&w=500&h=500",
    category: "wraps"
  },
  {
    id: 3,
    name: "Premium Training Bag",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&q=80&w=500&h=500",
    category: "equipment"
  },
  {
    id: 4,
    name: "Performance Shorts",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=500&h=500",
    category: "apparel",
    new: true
  },
  {
    id: 5,
    name: "Contender Boxing Gloves",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80&w=500&h=500",
    category: "gloves"
  },
  {
    id: 6,
    name: "Speed Training Ball",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1516685125522-3c92d114a689?auto=format&fit=crop&q=80&w=500&h=500",
    category: "equipment",
    new: true
  },
  {
    id: 7,
    name: "Professional Headgear",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=500&h=500",
    category: "protection"
  },
  {
    id: 8,
    name: "Impact Training Tank",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=500&h=500",
    category: "apparel",
    bestSeller: true
  }
];

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [showFilters, setShowFilters] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (activeCategory !== "all") {
      result = result.filter(product => product.category === activeCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Sort products
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Keep default order (featured)
        break;
    }
    
    setFilteredProducts(result);
  }, [activeCategory, searchTerm, sortBy]);

  const categories = [
    { id: "all", name: "All Products" },
    { id: "gloves", name: "Boxing Gloves" },
    { id: "wraps", name: "Hand Wraps" },
    { id: "equipment", name: "Training Equipment" },
    { id: "apparel", name: "Apparel" },
    { id: "protection", name: "Protection Gear" }
  ];

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
              NUESTROS <span className="text-impact-red">PRODUCTOS</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Equipamiento de alta calidad diseñado para boxeadores que exigen lo mejor. Durabilidad, rendimiento y estilo.
            </p>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            {/* Sidebar Filters (Desktop) */}
            <div className="hidden md:block w-64 mr-8">
              <div className="sticky top-24">
                <h3 className="text-xl font-heading text-impact-black mb-4">Categorías</h3>
                <ul className="space-y-2 mb-8">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        className={`w-full text-left px-3 py-2 rounded transition-colors ${
                          activeCategory === category.id 
                            ? "bg-impact-red text-white" 
                            : "hover:bg-gray-100 text-gray-700"
                        }`}
                        onClick={() => setActiveCategory(category.id)}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
                
                <h3 className="text-xl font-heading text-impact-black mb-4">Búsqueda</h3>
                <div className="relative mb-8">
                  <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-impact-red"
                  />
                  <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="flex-1">
              {/* Mobile Filters */}
              <div className="md:hidden mb-6">
                <button
                  className="w-full flex items-center justify-between bg-gray-100 px-4 py-3 rounded-lg mb-4"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <div className="flex items-center">
                    <Filter size={18} className="mr-2 text-impact-red" />
                    <span>Filtros y búsqueda</span>
                  </div>
                  <ChevronDown 
                    size={18} 
                    className={`transition-transform ${showFilters ? "rotate-180" : ""}`} 
                  />
                </button>
                
                {showFilters && (
                  <div className="bg-gray-50 p-4 rounded-lg mb-4 animate-scale-in">
                    <h3 className="text-lg font-heading text-impact-black mb-3">Categorías</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          className={`px-3 py-1 rounded-full text-sm ${
                            activeCategory === category.id 
                              ? "bg-impact-red text-white" 
                              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                          }`}
                          onClick={() => setActiveCategory(category.id)}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                    
                    <h3 className="text-lg font-heading text-impact-black mb-3">Búsqueda</h3>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Buscar productos..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-impact-red"
                      />
                      <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
                    </div>
                  </div>
                )}
              </div>
              
              {/* Sort and Results Count */}
              <div className="flex flex-wrap items-center justify-between mb-6">
                <p className="text-gray-600">
                  {filteredProducts.length} {filteredProducts.length === 1 ? "producto" : "productos"} encontrados
                </p>
                
                <div className="flex items-center space-x-2">
                  <span className="text-gray-700">Ordenar por:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-impact-red"
                  >
                    <option value="featured">Destacados</option>
                    <option value="price-low">Precio: menor a mayor</option>
                    <option value="price-high">Precio: mayor a menor</option>
                    <option value="name">Nombre</option>
                  </select>
                </div>
              </div>
              
              {/* Products Grid */}
              <div className="product-grid">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <div 
                      key={product.id} 
                      className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 card-hover group"
                    >
                      <div className="relative overflow-hidden aspect-square">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-2 left-2 flex gap-2">
                          {product.bestSeller && (
                            <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                              BEST SELLER
                            </span>
                          )}
                          {product.new && (
                            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                              NEW
                            </span>
                          )}
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                          <button className="button-impact transform scale-0 group-hover:scale-100 transition-transform duration-300 text-sm py-2 px-4">
                            Ver Detalles
                          </button>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-heading text-xl text-impact-black">{product.name}</h3>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-impact-red font-bold">${product.price.toFixed(2)}</span>
                          <span className="text-xs uppercase text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {product.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full py-12 text-center">
                    <h3 className="text-xl font-heading text-impact-black mb-2">No se encontraron productos</h3>
                    <p className="text-gray-600">Intenta con otra búsqueda o categoría</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;
