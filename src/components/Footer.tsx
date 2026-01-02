import { MapPin, Phone, Clock, Facebook, Instagram } from 'lucide-react';
import logo from '../assets/448307703_493474526412268_5745447106830264288_n.jpg';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src={logo}
              alt="Mama's Crawfish N Wings"
              className="w-32 mb-4"
            />
            <p className="mb-4">
              Authentic Cajun cuisine serving fresh seafood and wings in Suwanee, Georgia
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-orange-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-orange-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-orange-500 mt-1" />
                <div>
                  <p>3103A Lawrenceville-Suwanee Rd</p>
                  <p>Suwanee, GA 30024</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-orange-500" />
                <a href="tel:6782889880" className="hover:text-orange-500">
                  (678) 288-9880
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Hours</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-orange-500 mt-1" />
                <div>
                  <p>Wed-Sat: 3:00 PM - 2:00 AM</p>
                  <p>Sunday: 3:00 PM - 12:00 AM</p>
                  <p>Mon-Tue: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Mama's Crawfish N Wings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
