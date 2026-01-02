import { Phone, MapPin, ShoppingBag } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-600 to-red-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Experience Bold Cajun Flavor?
        </h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto">
          Visit us today for fresh seafood, spicy wings, and an unforgettable dining experience
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="tel:6782889880"
            className="flex items-center justify-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            <Phone size={24} />
            Call to Order
          </a>
          <a
            href="#location"
            className="flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-900 transition-all transform hover:scale-105 shadow-lg"
          >
            <ShoppingBag size={24} />
            Order Online
          </a>
          <a
            href="#location"
            className="flex items-center justify-center gap-3 bg-orange-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-900 transition-all transform hover:scale-105 shadow-lg"
          >
            <MapPin size={24} />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
