'use client';

import { useState } from "react";
import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-neutral-50 min-h-screen py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* HEADER SECTION */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-100 mb-3">
            Get in Touch
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 leading-tight">
            Tell us about your project
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
            Send your details and we’ll reach out with next steps. For faster response, you can also connect directly via phone or email.
          </p>
        </div>

        {/* TWO-COLUMN GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: COMPLETE BUSINESS CONTACT INFO PANEL & MAP */}
          <div className="lg:col-span-5 bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            <h2 className="text-lg font-bold text-neutral-900 border-b border-neutral-100 pb-3">
              Contact Information
            </h2>

            <div className="space-y-4">
              {/* PHONE ROW */}
              <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-neutral-50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Phone</div>
                  <div className="text-base font-bold text-neutral-900 mt-0.5">
                    <a href="tel:9916477467" className="hover:text-orange-600 transition-colors">
                      +91 9916477467
                    </a>
                  </div>
                </div>
              </div>

              {/* EMAIL ROW */}
              <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-neutral-50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="break-all">
                  <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Email</div>
                  <div className="text-base font-bold text-neutral-900 mt-0.5">
                    <a href="mailto:rsconstruction.kar@gmail.com" className="hover:text-blue-600 transition-colors">
                      rsconstruction.kar@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* ADDRESS ROW */}
              <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-neutral-50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Address</div>
                  <p className="text-sm text-neutral-600 font-medium mt-0.5 leading-relaxed">
                    <strong>R S Construction</strong>,<br />
                    WFQH+3JP Maruthi Nagar Circle, <br />
                    100 Feet Rd, Sonenalli, Sonnenahalli, <br />
                    SMV Layout, Bengaluru, Karnataka 560060
                  </p>
                </div>
              </div>
            </div>

            {/* LIVE GOOGLE MAP CONTAINER */}
            <div className="pt-2">
              <h3 className="text-sm font-bold text-neutral-800 mb-3 flex items-center gap-2">
                <span>📍</span> Our Office Location
              </h3>
              <div className="relative w-full h-[230px] rounded-xl overflow-hidden border border-neutral-200 shadow-3xs">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10582.932740303322!2d77.48116827052112!3d12.942282263530036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f00760b486f%3A0xc6dd2a56c61259!2sR%20S%20Construction!5e1!3m2!1sen!2sin!4v1777630159767!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RS Construction Google Maps Location"
                ></iframe>
              </div>
            </div>

            {/* BACKLINK TRIGGER FOR EXTERNAL MAP APPS */}
            <div className="pt-2 border-t border-neutral-100">
              <a 
                href="https://maps.app.goo.gl/oRA7iuWLMLi7Pa3T6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-orange-600 hover:text-orange-700 hover:underline inline-flex items-center gap-1"
              >
                Open in Google Maps Mobile App &rarr;
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: CUSTOM INTERACTIVE QUOTE FORM */}
          <div className="lg:col-span-7 bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-neutral-900 tracking-tight">
                Free Quote Form
              </h2>
              <p className="text-sm text-neutral-500 mt-1">
                Share your structural requirements below and our deployment managers will review your setup.
              </p>
            </div>

            {/* INTERACTIVE FORM CONTAINER */}
            <ContactForm />

            <div className="mt-4 flex items-start gap-2 bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <ShieldCheck className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
              <p className="text-xs text-neutral-500 leading-relaxed">
                By submitting this building metric inquiry form, you authorize RS Construction layout engineers to contact you directly with customized building configurations and pricing estimates.
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form request captured safely inside Client Layer.");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
          Full Name
        </label>
        <input 
          type="text" 
          placeholder="e.g. Rahul Kumar" 
          className="w-full px-4 py-3 border border-neutral-200 bg-neutral-50/50 focus:bg-white rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-neutral-800" 
          required 
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
          Email Address
        </label>
        <input 
          type="email" 
          placeholder="name@company.com" 
          className="w-full px-4 py-3 border border-neutral-200 bg-neutral-50/50 focus:bg-white rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-neutral-800" 
          required 
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
          Project Specifications
        </label>
        <textarea 
          rows="4" 
          placeholder="Tell us about your built-up area, desired plots parameters, budget constraints or preferred structural materials..." 
          className="w-full px-4 py-3 border border-neutral-200 bg-neutral-50/50 focus:bg-white rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-neutral-800 leading-relaxed resize-none" 
          required
        ></textarea>
      </div>

      <button 
        type="submit" 
        className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3.5 px-4 rounded-xl text-sm font-bold tracking-wide shadow-sm hover:shadow-md transition-all active:scale-[0.99]"
      >
        Submit Inquiry Ticket
      </button>
    </form>
  );
}