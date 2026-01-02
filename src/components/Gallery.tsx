import wings from '../assets/lemon-pepper-chicken-wings-26-1200.jpg';
import lobster1 from '../assets/348s_(1).jpg';
import lobster2 from '../assets/348s.jpg';

const images = [
  {
    src: wings,
    alt: 'Lemon Pepper Wings - Crispy golden wings with lemon pepper seasoning',
  },
  {
    src: lobster1,
    alt: 'Lobster Platter - Fresh lobster with vegetables and seafood',
  },
  {
    src: lobster2,
    alt: 'Lobster Tail Platter - Grilled lobster tail with shrimp and vegetables',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Food Gallery
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-300">
            See what's cooking at Mama's
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-xl aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-semibold text-lg">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
