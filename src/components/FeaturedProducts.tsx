
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Pro Impact Gloves",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1595578045498-5abe6cee8e9e?auto=format&fit=crop&q=80&w=500&h=500",
    category: "gloves"
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
    category: "apparel"
  }
];

const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-impact-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-impact-white">FEATURED PRODUCTS</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Premium quality boxing gear designed for fighters who demand the best. Our equipment is crafted to withstand the most intense training sessions.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="rounded-lg overflow-hidden bg-impact-light-gray frosted-glass card-hover"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{
                    transform: hoveredProduct === product.id ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <Link to={`/products/${product.id}`} className="button-impact text-sm py-2 px-4">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-heading text-xl text-impact-white">{product.name}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-impact-red font-bold">${product.price}</span>
                  <span className="text-xs uppercase text-gray-400 bg-black/20 px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products" className="button-outline">
            VIEW ALL PRODUCTS
            <ArrowRight className="inline-block ml-2" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
