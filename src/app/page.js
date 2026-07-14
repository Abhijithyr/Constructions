'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, ShieldCheck, Clock, Award, ChevronRight } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <main className="w-full">
      
      {/* 1. HERO SECTION (Existing - Retained for layout stability) */}
      <section className="min-h-[85vh] flex items-center px-4 sm:px-6 lg:px-16 py-12 bg-brand-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
            <span className="text-brand-accent font-semibold text-xs sm:text-sm tracking-wider uppercase bg-orange-50 px-3 py-1 rounded-full inline-block">Engineering Excellence</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-text leading-tight">
              Premium structures <span className="text-brand-accent">built with precision</span>
            </h1>
            <p className="text-brand-muted text-sm sm:text-base max-w-lg">
              Residential spaces, architectural villas, and commercial framework developments executed transparently across critical project milestones.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#packages" className="w-full sm:w-auto bg-brand-accent text-white text-center px-6 py-3 rounded-lg font-medium shadow-md hover:bg-opacity-95 transition">View Build Packages</a>
              <Link href="/cost-estimator" className="w-full sm:w-auto text-center border border-neutral-300 bg-white px-6 py-3 rounded-lg font-medium text-brand-text hover:bg-neutral-50 transition">Cost Calculator</Link>
            </div>
          </motion.div>
          {/* <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="h-64 sm:h-96 rounded-2xl overflow-hidden shadow-xl border border-neutral-100 relative bg-neutral-200">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src="https://assets.mixkit.co/videos/preview/mixkit-architect-working-on-a-building-blueprint-41584-large.mp4" type="video/mp4" />
            </video>
          </motion.div> */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="h-64 sm:h-96 rounded-2xl overflow-hidden shadow-xl border border-neutral-100 relative bg-neutral-200"
          >
            <Image 
              src="/images/gallerynew.jpeg" // <-- Replace with your actual image path or public URL
              alt="Architect working on a house construction blueprint" 
              fill
              sizes="(max-w-7xl) 50vw, 100vw"
              priority={true} // High-priority loading for above-the-fold layout content
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. CORE METRICS & TRUST BADGES SECTION */}
      {/* <section className="py-16 bg-white border-y border-neutral-100 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "150+", label: "Completed Projects" },
            { value: "25+", label: "Premium Villas" },
            { value: "100%", label: "Material Transparency" },
            { value: "0", label: "Hidden Overheads" }
          ].map((stat, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="space-y-1">
              <h3 className="text-3xl sm:text-4xl font-black text-brand-accent">{stat.value}</h3>
              <p className="text-xs sm:text-sm font-medium text-brand-muted uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* 3. WHY CHOOSE US SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-16 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Why Smart Homeowners Choose RS</h2>
            <p className="text-sm sm:text-base text-brand-muted">We eliminate contracting risk through ironclad tracking and raw material verification protocols.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <ShieldCheck className="w-8 h-8 text-brand-accent" />, title: "Structural Warranty", desc: "Every concrete structure we cast comes with an extended structural stability guarantee document." },
              { icon: <Clock className="w-8 h-8 text-brand-accent" />, title: "On-Time Handover", desc: "We utilize rigorous milestone-based dependency mapping to prevent deployment delay overheads." },
              { icon: <Award className="w-8 h-8 text-brand-accent" />, title: "Certified Raw Materials", desc: "Exclusive usage of high-test premium steel rods and precise custom cement hydration mixtures." }
            ].map((item, idx) => (
              <motion.div key={idx} {...fadeUp} className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition space-y-4">
                <div className="p-3 bg-orange-50 rounded-xl inline-block">{item.icon}</div>
                <h3 className="text-xl font-bold text-brand-text">{item.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE 4-STEP BUILDING PROCESS SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-left max-w-xl mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight">Our Structured Construction Lifecycle</h2>
            <p className="text-sm text-brand-muted">Here is exactly how we take your empty plot of land and turn it into a premium structure.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {[
              { step: "01", title: "Soil & Map Setup", desc: "Comprehensive structural ground load tests and precision architectural blueprint validation." },
              { step: "02", title: "Foundation & Frame", desc: "Heavy-duty excavation, footing layout stabilization, and reinforced structural column casting." },
              { step: "03", title: "Brickwork & Conduits", desc: "High-density wall framing alongside built-in electrical and plumbing channel layouts." },
              { step: "04", title: "Premium Finishes", desc: "Exquisite tiling application, premium water-proofing layers, and final clean key delivery." }
            ].map((proc, index) => (
              <motion.div key={index} {...fadeUp} transition={{ delay: index * 0.1 }} className="space-y-3 relative">
                <span className="text-5xl font-black text-orange-100 block transition-colors hover:text-orange-200">{proc.step}</span>
                <h3 className="text-lg font-bold text-brand-text">{proc.title}</h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">{proc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PACKAGES & PRICING SECTION (Links directly to cost estimator) */}
      <section id="packages" className="py-20 px-4 sm:px-6 lg:px-16 bg-brand-bg scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-brand-accent font-bold text-xs uppercase tracking-widest">Transparent Rates</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Premium Contracting Packages</h2>
            <p className="text-sm sm:text-base text-brand-muted">Select a standard specifications profile that fits your structural and material goals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {[
              {
                name: "Basic Structure Package",
                price: "1,900",
                desc: "Ideal for basic structural extensions, storage enclosures, or standard budget rental investments.",
                features: ["Standard 53-Grade Cement", "Fe-550 Structural TMT Steel Bars", "Solid Concrete Block Core Walls", "Standard Electrical Wiring Layouts"]
              },
              {
                name: "Standard Residential Package",
                price: "2,050",
                desc: "Perfect for premium multi-floor residential apartments and urban family residential layouts.",
                features: ["Premium Anti-Corrosive Treated Steel", "High-Performance Waterproof Plastering", "Premium Vitrified Floor Tiling", "Modular Kitchen Provision Setup", "Concealed Plumbing Layout Channels"],
                popular: true
              },
              {
                name: "Premium Luxury Villa Package",
                price: "2,500",
                desc: "Custom architectural design structures engineered with ultra-premium materials specifications.",
                features: ["Full Architectural Design Flexibility", "Italian Marble Flooring Layouts", "Ultra-High Performance Structural Concrete", "Premium Concealed Multi-Layer Piping Systems", "Smart Automation Integration Infrastructure"]
              }
            ].map((pkg, idx) => (
              <motion.div 
                key={idx} 
                {...fadeUp}
                className={`bg-white rounded-2xl border p-6 sm:p-8 flex flex-col justify-between relative shadow-sm transition-all hover:shadow-md ${pkg.popular ? 'border-brand-accent ring-2 ring-brand-accent/10 scale-102 z-10' : 'border-neutral-200'}`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-accent text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                    Most Popular Choice
                  </span>
                )}
                <div>
                  <h3 className="text-xl font-bold text-brand-text mb-2">{pkg.name}</h3>
                  <p className="text-xs text-brand-muted min-h-[48px]">{pkg.desc}</p>
                  
                  <div className="my-6 border-y border-neutral-100 py-4">
                    <span className="text-xs font-bold text-brand-muted uppercase">Starting at</span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-3xl font-black text-brand-text">₹{pkg.price}</span>
                      <span className="text-sm text-brand-muted">/ sq. ft.</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-brand-muted">
                        <CheckCircle className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Secure Dynamic Router Handshake Link */}
                <Link 
                  href="/packages" 
                  className={`w-full text-center py-3 rounded-lg font-bold text-sm transition flex items-center justify-center gap-1 ${pkg.popular ? 'bg-brand-accent text-white hover:bg-opacity-95 shadow-md' : 'bg-neutral-100 text-brand-text hover:bg-neutral-200'}`}
                >
                  <span>Run Live Estimate Sheet</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION (CTA) SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-16 bg-brand-text text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#EA580C_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Ready to Lay Your Build Foundation?</h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto">
            Get in touch with our team of on-site structural engineers today for a completely transparent blueprint evaluation and cost mapping review.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link href="/contact" className="w-full sm:w-auto bg-brand-accent text-white px-8 py-3 rounded-lg font-semibold text-sm hover:bg-opacity-95 shadow-lg transition">Schedule Site Meeting</Link>
            <Link href="/services" className="w-full sm:w-auto border border-neutral-700 text-neutral-200 px-8 py-3 rounded-lg font-semibold text-sm hover:bg-neutral-800 transition">Explore All Verticals</Link>
          </div>
        </div>
      </section>

    </main>
  );
}