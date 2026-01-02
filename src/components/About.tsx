import { Clock, Heart, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Mama's Crawfish N Wings storefront"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>

          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Mama's Crawfish N Wings is a casual, local favorite in Suwanee,
              Georgia serving high-quality Cajun seafood, flavorful crawfish
              boils, spicy wings, oyster specials, and more in a friendly,
              welcoming atmosphere.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Whether you're craving a traditional Louisiana-style crawfish boil
              or our famous hot wings, we've got you covered. Open late for
              after-dinner hangouts, we're your go-to spot for great food, cold
              drinks, and good times with friends and family.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Heart className="text-orange-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-1">
                    Fresh Ingredients
                  </h3>
                  <p className="text-gray-600">
                    We use only the freshest seafood and highest quality
                    ingredients in every dish.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Award className="text-orange-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-1">
                    Authentic Cajun Flavor
                  </h3>
                  <p className="text-gray-600">
                    Traditional Louisiana recipes with bold, authentic flavors
                    that keep you coming back.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Clock className="text-orange-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-1">
                    Open Late
                  </h3>
                  <p className="text-gray-600">
                    Perfect for late-night cravings and after-dinner hangouts
                    with friends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
