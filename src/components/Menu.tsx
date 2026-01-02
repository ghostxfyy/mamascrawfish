import { Star } from 'lucide-react';

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Menu
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">
            Authentic Louisiana Cajun Seafood & Wings
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-6 text-white shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Star size={24} className="fill-white" />
              <h3 className="text-2xl font-bold">Mama's Specialty Plates</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-lg font-bold">Special A</h4>
                  <span className="text-sm opacity-90">$37.99</span>
                </div>
                <p className="text-sm opacity-90">Snow Crab, Shrimp, Sausage, Corn, Potato, Broccoli</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-lg font-bold">Special B</h4>
                  <span className="text-sm opacity-90">$46.99</span>
                </div>
                <p className="text-sm opacity-90">Snow Crab, Shrimp, Crawfish, Green Mussels, Corn, Potato, Broccoli</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-lg font-bold">Special C</h4>
                  <span className="text-sm opacity-90">$50.99</span>
                </div>
                <p className="text-sm opacity-90">Lobster Tail, Snow Crab, Shrimp, Corn, Potato, Broccoli</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-lg font-bold">Mama's Mardi Gras</h4>
                  <span className="text-sm opacity-90">$119.99</span>
                </div>
                <p className="text-xs opacity-75 mb-2">Serves 3-4</p>
                <p className="text-sm opacity-90">Snow Crab Legs, Crawfish, Shrimp, Corn, Potato, Broccoli, Noodle, Sausage</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-lg font-bold">Mama's Feast</h4>
                  <span className="text-sm opacity-90">$199.99</span>
                </div>
                <p className="text-xs opacity-75 mb-2">Serves 5-6</p>
                <p className="text-sm opacity-90">Lobster Tail (4pc), Snow Crab Legs, Crawfish, Shrimp, Green Mussels, Sides</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-orange-500">
                Build Your Plate
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Shrimp (Easy Peeled or Peeled & Deveined)</span>
                  <span className="text-gray-500 text-xs">$13.99</span>
                </div>
                <div className="flex justify-between">
                  <span>Crawfish</span>
                  <span className="text-gray-500 text-xs">$13.99</span>
                </div>
                <div className="flex justify-between">
                  <span>Green Mussel</span>
                  <span className="text-gray-500 text-xs">$16.99</span>
                </div>
                <div className="flex justify-between">
                  <span>Snow Crab (1 Cluster)</span>
                  <span className="text-gray-500 text-xs">$19.99</span>
                </div>
                <div className="flex justify-between">
                  <span>Snow Crab, Crawfish, Shrimp Combo</span>
                  <span className="text-gray-500 text-xs">$35.99</span>
                </div>
                <p className="text-xs text-gray-500 italic pt-2">Make it a combo for $5.00 (includes sides)</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-red-600">
                Wings
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                <div className="flex justify-between">
                  <span>6 pieces</span>
                  <span className="text-gray-500 text-xs">$8.99</span>
                </div>
                <div className="flex justify-between">
                  <span>10 pieces</span>
                  <span className="text-gray-500 text-xs">$12.99</span>
                </div>
                <div className="flex justify-between">
                  <span>20 pieces</span>
                  <span className="text-gray-500 text-xs">$23.99</span>
                </div>
                <div className="flex justify-between">
                  <span>30 pieces</span>
                  <span className="text-gray-500 text-xs">$34.99</span>
                </div>
              </div>
              <div className="border-t pt-3 mt-3">
                <p className="text-xs font-semibold text-gray-700 mb-1">Flavors Available:</p>
                <p className="text-xs text-gray-600">
                  Mild, Medium, Hot, Crazy Hot, Carolina BBQ, Honey BBQ, Teriyaki,
                  Hot Lemon Pepper, Garlic Parmesan, Soy Garlic, Dry Rub, Lemon Pepper,
                  Cajun, Old Bay
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 pb-2 border-b border-orange-300">
                Sauces
              </h3>
              <div className="space-y-1.5 text-sm text-gray-700">
                <p>• Cajun (Water Based)</p>
                <p>• Cajun Butter Garlic</p>
                <p>• Butter Garlic</p>
                <p>• Cream Garlic</p>
                <p>• Butter Only</p>
                <p>• Garlic Butter Only</p>
                <p className="text-xs text-gray-500 pt-2">Available in Mild, Medium, Hot, Extra Hot</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 pb-2 border-b border-orange-300">
                Add Ons
              </h3>
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <span>Corn or Potato</span>
                  <span className="text-gray-500 text-xs">$1.99</span>
                </div>
                <div className="flex justify-between">
                  <span>Boiled Egg</span>
                  <span className="text-gray-500 text-xs">$1.99</span>
                </div>
                <div className="flex justify-between">
                  <span>Broccoli or Noodle</span>
                  <span className="text-gray-500 text-xs">$4.99</span>
                </div>
                <div className="flex justify-between">
                  <span>Sausage</span>
                  <span className="text-gray-500 text-xs">$6.99</span>
                </div>
                <div className="flex justify-between">
                  <span>Cream Garlic Noodle</span>
                  <span className="text-gray-500 text-xs">$6.99</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 pb-2 border-b border-orange-300">
                Something Fried
              </h3>
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <span>Fish or Shrimp</span>
                  <span className="text-gray-500 text-xs">from $9.99</span>
                </div>
                <div className="flex justify-between">
                  <span>Oysters</span>
                  <span className="text-gray-500 text-xs">from $10.99</span>
                </div>
                <div className="flex justify-between">
                  <span>Chicken Tenders</span>
                  <span className="text-gray-500 text-xs">from $9.99</span>
                </div>
                <div className="flex justify-between">
                  <span>Crawfish</span>
                  <span className="text-gray-500 text-xs">from $10.99</span>
                </div>
                <div className="bg-orange-50 p-2 rounded mt-3">
                  <p className="text-xs font-semibold text-orange-800">Fried Sampler $19.99</p>
                  <p className="text-xs text-gray-600">Choose any 3 items</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-red-600">
              Po' Boys
            </h3>
            <p className="text-xs text-gray-600 mb-3">Served with French Fries & Hush Puppy</p>
            <div className="grid md:grid-cols-5 gap-4 text-sm">
              <div>
                <p className="font-medium">Fish Po Boy</p>
                <p className="text-xs text-gray-500">Half $8.99 / Full $13.99</p>
              </div>
              <div>
                <p className="font-medium">Shrimp Po Boy</p>
                <p className="text-xs text-gray-500">Half $8.99 / Full $13.99</p>
              </div>
              <div>
                <p className="font-medium">Oyster Po Boy</p>
                <p className="text-xs text-gray-500">Half $9.99 / Full $15.99</p>
              </div>
              <div>
                <p className="font-medium">Chicken Po Boy</p>
                <p className="text-xs text-gray-500">Half $8.99 / Full $13.99</p>
              </div>
              <div>
                <p className="font-medium">Crawfish Po Boy</p>
                <p className="text-xs text-gray-500">Half $8.99 / Full $13.99</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">Also Available</h3>
            <div className="grid md:grid-cols-4 gap-4 text-sm text-center">
              <div>
                <p className="font-semibold text-gray-900">Appetizers</p>
                <p className="text-xs text-gray-600">Onion Rings, Mozzarella Sticks, Korean Dumplings, Jalapeño Poppers, Crab Cake</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Rice Bowls</p>
                <p className="text-xs text-gray-600">Fried Rice, Bulgogi Bowl, Teriyaki Chicken, LA Galbi</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Burgers</p>
                <p className="text-xs text-gray-600">Hamburger, Cheeseburger, Shrimp Burger, Philly Cheese Steak</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Sides</p>
                <p className="text-xs text-gray-600">Gumbo, Hush Puppy, French Fries, Sweet Potato Fries, Kids Menu</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="#location"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors shadow-md"
          >
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
}
