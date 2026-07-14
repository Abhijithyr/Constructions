'use client';

// import Head from 'next/head'; 
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HardHat, ShieldCheck, Award, ChevronRight, Link } from 'lucide-react';

const coreValues = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-orange-600" />,
    title: 'Structural Safety First',
    desc: 'Every column configuration, foundation reinforcement, and retaining wall assembly passes strict structural safety metrics before execution.'
  },
  {
    icon: <HardHat className="w-6 h-6 text-orange-600" />,
    title: 'Premium Engineering',
    desc: 'From custom residential luxury villas to corporate high-rise framing, we deploy premium grade steel and concrete casting systems.'
  },
  {
    icon: <Award className="w-6 h-6 text-orange-600" />,
    title: 'On-Time Handover',
    desc: 'Our streamlined critical-path scheduling models ensure milestone targets are systematically achieved without quality tradeoffs.'
  }
];

export default function AboutPage() {
  return (
    <>
      {/* SAFE NEXT.JS HEAD SYSTEM */}
      {/* <Head>
        <title>About RS Constructions | Leading Civil Engineers & Builders in Bangalore</title>
        <meta name="description" content="Discover the heritage of RS Constructions. We provide premium villa elevations, commercial multi-level framing, and heavy-duty structural concrete casting across Bangalore." />
        <meta name="keywords" content="RS Constructions Bangalore, civil contractors Whitefield, premium villa builders HSR Layout, structural engineering experts" />
      </Head> */}

      <main className="min-h-screen bg-white font-sans antialiased text-neutral-800">
        
        {/* 1. HERO SECTION WITH BLUEPRINT VECTOR GRID BACKGROUND */}
        <section className="relative overflow-hidden bg-neutral-50 border-b border-neutral-200 py-24 px-4 text-center">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          <div className="relative max-w-3xl mx-auto space-y-4">
            <span className="text-[11px] font-black tracking-widest text-orange-600 uppercase bg-orange-50 px-3 py-1 rounded-md border border-orange-100">
              Corporate Profile
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 uppercase">
              ABOUT RS CONSTRUCTIONS
            </h1>
            <p className="text-sm sm:text-base text-neutral-500 max-w-xl mx-auto leading-relaxed">
              Engineering residential landmarks and sustainable commercial frameworks with absolute structural integrity across Bangalore.
            </p>
          </div>
        </section>

        {/* 2. OUR JOURNEY SECTION (Split Layout Image + Copy) */}
        <section className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-80 sm:h-96 lg:h-[480px] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-xs"
          >
            <Image 
              src="/images/Package-4.png" 
              alt="RS Constructions active structural concrete site inspection"
              fill
              priority
              className="object-cover"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 uppercase">
              Pioneering End-to-End Civil Engineering Solutions
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Founded with a vision to redefine the structural landscapes of urban spaces, <strong className="font-semibold">RS Constructions</strong> has evolved into a highly trusted name in civil contracting. We specialize in bringing intricate architectural blueprints to life with rigorous engineering precision.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Whether constructing a premium minimalist smart villa or a heavy-duty commercial core complex, our on-site execution strategy focuses heavily on precision alignment, premium material sourcing, and localized regulatory compliance.
            </p>
          </motion.div>
        </section>

        {/* 3. CORE OPERATING VALUES (3-Column Grid Layout) */}
        <section className="bg-neutral-50/70 border-y border-neutral-200/60 py-20 px-4">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 uppercase">
                Our Structural Pillars
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500 font-medium">
                The fundamental engineering frameworks behind every RS Construction build site.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coreValues.map((value, i) => (
                <div 
                  key={i} 
                  className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-3xs space-y-4 hover:border-neutral-300 transition-colors duration-200"
                >
                  <div className="p-3 bg-orange-50 rounded-xl inline-block border border-orange-100">
                    {value.icon}
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. WORKFLOW REDIRECT CTA SECTION */}
        <section className="max-w-4xl mx-auto px-4 py-24 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 uppercase">
            Ready to Inspect Our Active Build Quality?
          </h2>
          <p className="text-sm text-neutral-500 max-w-xl mx-auto leading-relaxed">
            Take a look at our freshly updated, highly curated portfolio gallery containing twenty-five premium residential villa and commercial structure records.
          </p>
          <div>
            <Link 
              href="/gallery" 
              className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all duration-200 cursor-pointer shadow-xs"
            >
              Explore Project Gallery
              <ChevronRight className="w-4 h-4 text-orange-500" />
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}