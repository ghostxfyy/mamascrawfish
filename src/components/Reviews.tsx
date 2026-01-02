import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah M.',
    rating: 5,
    text: 'Delicious seafood boil and friendly service — generous portions! The crawfish was perfectly seasoned and the staff made us feel right at home.',
    date: 'December 2023',
  },
  {
    name: 'Mike T.',
    rating: 5,
    text: '$1 raw oysters and spicy wings — favorite late-night spot! You cannot beat the value and quality. The wings are some of the best in town!',
    date: 'November 2023',
  },
  {
    name: 'Jessica L.',
    rating: 5,
    text: 'Best Cajun food in Suwanee! The seafood combo is amazing and feeds multiple people. Love the spice levels you can choose from.',
    date: 'October 2023',
  },
  {
    name: 'David R.',
    rating: 5,
    text: 'Great atmosphere and even better food. The oysters are fresh and the wings are perfectly crispy. Will definitely be back!',
    date: 'September 2023',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-300">
            Don't just take our word for it
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-8 shadow-xl hover:shadow-2xl transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 text-orange-600/20" size={48} />

              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-orange-500 text-orange-500"
                  />
                ))}
              </div>

              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                "{review.text}"
              </p>

              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-orange-500">{review.name}</p>
                  <p className="text-sm text-gray-400">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-4">
            Join our satisfied customers today!
          </p>
          <a
            href="#location"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg"
          >
            Visit Us Today
          </a>
        </div>
      </div>
    </section>
  );
}
