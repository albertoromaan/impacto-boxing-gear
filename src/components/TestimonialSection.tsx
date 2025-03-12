
import { useState, useEffect } from "react";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  testimonial: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Miguel Rodriguez",
    position: "Professional Boxer",
    testimonial: "IMPACTO gloves have been a game-changer for my training. The quality and comfort are unmatched, and they've helped me improve my technique significantly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1607273177127-5253d73943ac?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 2,
    name: "Sofia Martinez",
    position: "Boxing Coach",
    testimonial: "I recommend IMPACTO equipment to all my students. The durability and design are perfect for both beginners and advanced boxers. Simply the best in the market.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 3,
    name: "Carlos Vega",
    position: "Amateur Fighter",
    testimonial: "As someone who trains daily, I need equipment that can withstand intense use. IMPACTO has exceeded my expectations in every way. Worth every penny.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-impact-black">WHAT FIGHTERS SAY</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the fighters who trust IMPACTO for their training and competitions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden" style={{ height: "350px" }}>
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="absolute w-full transition-all duration-700 ease-in-out"
                style={{ 
                  opacity: currentTestimonial === index ? 1 : 0,
                  transform: `translateY(${(index - currentTestimonial) * 20}px)`,
                  pointerEvents: currentTestimonial === index ? "auto" : "none"
                }}
              >
                <div className="bg-white rounded-lg shadow-xl p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-impact-red">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        size={18}
                        className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6">"{testimonial.testimonial}"</p>
                  <div>
                    <h4 className="font-heading text-xl text-impact-black">{testimonial.name}</h4>
                    <p className="text-impact-red font-medium">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 transition-all ${
                  currentTestimonial === index 
                    ? "bg-impact-red w-6" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
