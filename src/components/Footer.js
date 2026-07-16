'use client';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const links = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Services', path: '/services' },
  { label: 'Project Gallery', path: '/gallery' },
  { label: 'Cost Estimator', path: '/cost-estimator' },
  { label: 'Packages', path: '/packages' },
  { label: 'Contact Us', path: '/contact' }
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#efefef] border-t border-neutral-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        
        <div className="space-y-4">
          <Link href="/" className="flex items-center shrink-0">
            <Image 
              src="/images/logo.webp" 
              alt="RS Construction Logo"
              width={200}
              height={66}
              className="w-auto h-20 object-contain"
            />
          </Link>
          <p className="text-sm text-brand-muted leading-relaxed max-w-xs">
            U Dream It, We Will Build It.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-brand-text">Quick Links</h4>
          <ul className="grid grid-cols-1 gap-2.5">
            {links.map((link, idx) => (
              <li key={idx}>
                <Link 
                  href={link.path} 
                  className="text-sm text-brand-muted hover:text-brand-accent transition-colors flex items-center group"
                >
                  <span className="transform group-hover:translate-x-1 transition-transform">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-brand-text">Corporate Office Address</h4>
          <ul className="space-y-3 text-sm text-brand-muted">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
              <span>R S Construction, WFQH+3JP Maruthi Nagar Circle, 100 Feet Rd, Sonenalli, Sonnenahalli, SMV Layout, Bengaluru, Karnataka 560060</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-brand-accent shrink-0" />
              <a href="tel:+919876543210" className="hover:text-brand-accent transition-colors">+91 9916477467</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brand-accent shrink-0" />
              <a href="mailto:rsconstruction.kar@gmail.com" className="hover:text-brand-accent transition-colors">rsconstruction.kar@gmail.com</a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-brand-text">Work Hours & Map</h4>
          <ul className="space-y-3 text-sm text-brand-muted">
            <li className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-brand-text">Mon - Sat: 10:00 AM - 08:00 PM</p>
                <p className="text-xs text-neutral-400 mt-0.5">Sunday: Emergency On-Site Calls Only</p>
              </div>
            </li>
          </ul>
            <div className="pt-2 w-full">
                <div className="w-full h-44 rounded-xl overflow-hidden border border-neutral-200 shadow-sm relative bg-neutral-50">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10582.932740303322!2d77.48116827052112!3d12.942282263530036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f00760b486f%3A0xc6dd2a56c61259!2sR%20S%20Construction!5e1!3m2!1sen!2sin!4v1777630159767!5m2!1sen!2sin" 
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="RS Construction Office Location Map"
                    className="w-full h-full grayscale-[20%] contrast-[110%] hover:grayscale-0 transition-all duration-300"
                    />
                </div>
            </div>
        </div>

      </div>

      <div className="w-full bg-neutral-50 border-t border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-brand-muted">
          <p>© {new Date().getFullYear()} RS Construction Homes. All rights reserved.</p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}