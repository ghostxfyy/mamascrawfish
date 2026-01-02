import { MapPin, Phone, Clock } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visit Us
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <MapPin className="text-orange-600" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Address
                  </h3>
                  <p className="text-lg text-gray-700">
                    3103A Lawrenceville-Suwanee Rd
                    <br />
                    Suwanee, GA 30024
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Phone className="text-orange-600" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:6782889880"
                    className="text-lg text-orange-600 hover:text-orange-700 font-semibold"
                  >
                    (678) 288-9880
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Clock className="text-orange-600" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Hours
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between gap-8">
                      <span className="font-medium">Monday:</span>
                      <span className="text-red-600 font-semibold">Closed</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span className="font-medium">Tuesday:</span>
                      <span className="text-red-600 font-semibold">Closed</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span className="font-medium">Wednesday:</span>
                      <span>3:00 PM - 2:00 AM</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span className="font-medium">Thursday:</span>
                      <span>3:00 PM - 2:00 AM</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span className="font-medium">Friday:</span>
                      <span>3:00 PM - 2:00 AM</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span className="font-medium">Saturday:</span>
                      <span>3:00 PM - 2:00 AM</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span className="font-medium">Sunday:</span>
                      <span>3:00 PM - 12:00 AM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
              <p className="text-gray-800 font-medium">
                Perfect for late-night cravings! We're open until 2 AM most days.
              </p>
            </div>
          </div>

          <div className="h-96 lg:h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.9564394758757!2d-84.07404!3d34.047577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f59c7a8c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2s3103A%20Lawrenceville-Suwanee%20Rd%2C%20Suwanee%2C%20GA%2030024!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
