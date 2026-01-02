import { UtensilsCrossed, Calendar, ShoppingBag } from 'lucide-react';
import logo from '../assets/mamas_logo.png';
import crawfishHero from '../assets/tdy_food_10a_crawfish_200225_1920x1080.jpg';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${crawfishHero})`,
      }}
    >
      <div className="text-center text-white px-4 max-w-4xl">
        <img
          src={logo}
          alt="Mama's Crawfish N Wings"
          className="w-64 md:w-80 mx-auto mb-8 drop-shadow-2xl"
        />
        <p className="text-2xl md:text-3xl mb-8 font-semibold drop-shadow-md">
          Bold Cajun Flavor • Fresh Seafood & Wings • Open Late!
        </p>
        <p className="text-lg md:text-xl mb-10 text-gray-200">
          Experience authentic Cajun cuisine in the heart of Suwanee, Georgia
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="flex items-center justify-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-all transform hover:scale-105 shadow-lg"
          >
            <UtensilsCrossed size={24} />
            View Menu
          </a>
          <a
            href="#location"
            className="flex items-center justify-center gap-2 bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-800 transition-all transform hover:scale-105 shadow-lg"
          >
            <ShoppingBag size={24} />
            Order Online
          </a>
          <a
            href="#location"
            className="flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            <Calendar size={24} />
            Make a Reservation
          </a>
        </div>
      </div>
    </section>
  );
}
