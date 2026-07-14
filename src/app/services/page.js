import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, ClipboardCheck, Wrench } from "lucide-react";

// 1. High-Performance SEO Metadata for Local Search Ranking
export const metadata = {
  title: 'Professional Construction Services in Bangalore | RS Construction',
  description: 'Explore commercial, luxury villa, and residential home construction services by RS Construction in Bengaluru. Premium turn-key turnkey delivery with end-to-end management.',
  keywords: [
    "Residential builders Bengaluru",
    "Commercial construction company Bangalore",
    "Luxury villa builders SMV layout",
    "Turnkey house construction packages",
    "Building contractors Bangalore"
  ],
  openGraph: {
    title: 'Comprehensive Building Solutions | RS Construction Services',
    description: 'From deep foundation engineering to architectural finishing, we build residential spaces, premium villas, and commercial real estate across Bengaluru.',
    type: 'website',
  }
};

const services = [
  {
    title: "Residential Construction",
    desc: "Dream homes tailored to you—premium furnished and semi-furnished options built with high-grade materials and lifetime structural reliability.",
    image: "/images/Package-1.png",
    alt: "RS Constructions Residential Construction project showing modern architectural framing",
    tag: "Homes & Apartments"
  },
  {
    title: "Commercial Construction",
    desc: "Spaces that inspire business. Structured planning, optimized floor configurations, and reliable execution engineered for maximum utility.",
    image: "/images/commercial-package.png",
    alt: "RS Constructions Commercial Construction showing structural office layout skeleton",
    tag: "Corporate & Retail"
  },
  {
    title: "Villa Construction",
    desc: "Luxury living redefined. Custom high-end villas designed meticulously around your lifestyle, featuring superior space utilization and architectural elegance.",
    image: "/images/Package-4.png",
    alt: "RS Constructions Villa Construction showing premium elevation design",
    tag: "Luxury Estates"
  },
];

const steps = [
  { icon: ClipboardCheck, title: "1. Planning & Budgeting", desc: "Itemized material lists and transparent line-item pricing calculations before laying ground." },
  { icon: Shield, title: "2. Approvals & Architecture", desc: "Navigating local civic laws, structural stability blue-printing, and safety compliance checks." },
  { icon: Wrench, title: "3. Precision Execution", desc: "On-site material deployment and strict engineering management for on-time structural handovers." }
];

export default function ServicesPage() {
  return (
    <main className="bg-neutral-50 min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* SEO HEADER ARCHITECTURE */}
        <section className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-100 mb-4">
            Our Construction Services
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 leading-tight">
            Comprehensive solutions from concept to completion
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            We specialize in residential, commercial, and villa construction across Bengaluru. Our delivery pipeline is engineered for absolute blueprint clarity, consistency, and on-time site handovers.
          </p>
        </section>

        {/* MODERN TAILWIND CARDS GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <article 
              key={s.title} 
              className="group bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* IMAGE WRAPPER WITH ASPECT RATIO FIX */}
              <div className="relative w-full h-56 sm:h-64 bg-neutral-100 overflow-hidden">
                <span className="absolute top-3 left-3 z-10 bg-neutral-900/80 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                  {s.tag}
                </span>
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="(max-w-7xl) 33vw, 100vw"
                  priority={true}
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* CARD CONTENT */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-neutral-900 tracking-tight group-hover:text-orange-600 transition-colors">
                    {s.title}
                  </h2>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                
                <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-neutral-800">
                  <span className="flex items-center gap-1.5 text-emerald-600">
                    <CheckCircle2 className="w-4 h-4" /> End-to-End Delivery
                  </span>
                  <Link 
                    href="/packages" 
                    className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    Get Quote <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* BONUS: SEARCH ENGINE TRUST-BUILDING PROCESS SECTION */}
        <section className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-10 shadow-3xs mt-12">
          <div className="max-w-xl mb-8">
            <h3 className="text-lg font-bold text-neutral-900 uppercase tracking-wide text-orange-600">
              How We Execute
            </h3>
            <p className="text-sm text-neutral-500 mt-1">
              Every build follows strict quality gates to guarantee structural integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step) => {
              const IconComp = step.icon;
              return (
                <div key={step.title} className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 mb-2">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-neutral-900">{step.title}</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </main>
  );
}