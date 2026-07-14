'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Plus, Check, ChevronDown, ChevronUp, HardHat, Layers, ShieldCheck } from "lucide-react";
import Image from "next/image";

const packagesData = [
  {
    id: "residential-package-basic",
    main: "Residential Building Package (Concrete Blocks)",
    title: "Basic Package",
    price: "Rs. 1,900/sq ft",
    badge: "Most Economical",
    badgeColor: "bg-neutral-100 text-neutral-800 border-neutral-200",     
    highlights: [
      {
        title: "Core construction materials",
        items: ["Cement - Ultratech, Birla or Equivalent", "Steel - A1 Gold or Equivalent", "Blocks - Standard concrete blocks", "Sand - M-sand (single wash for all works) P-sand (double wash for plastering)", "Aggregates - 20mm & 40mm", 'Sump - 6" concrete blocks & waterproof plastered with single layer mesh with a capacity of 8000 liters.', "Clear floor height - 10 feet.", "Waterproofing - Dr Fixit waterproofing for the terrace"],
      },
      {
        title: "Flooring",
        items: ["Living, Dining, Rooms & Kitchen - Tiles of price up to ₹80/SFT", "Balcony & Open areas - Anti skid tiles of value up to ₹40/sq.ft", "Staircase - Granite of price up to ₹100/sq.ft", "Parking - Tiles of price up to ₹40/sq.ft"],
      },
      {
        title: "Kitchen",
        items: ['Wall cladding up to a height of 3 feet above kitchen slab - Ceramic tiles of size 18"X12" of price up to ₹50/sq.ft', "Sink - Steel sink of price up to ₹5,000/sq.ft", "Kitchen counter - 30mm thick slab of price up to ₹200/sq.ft"],
      },
      {
        title: "Bathroom",
        items: ["Wall cladding up to a height of 7 feet - Ceramic tiles of price ₹50/sq.ft", "Sanitary ware & CP fittings - Total Budget for toilets ₹25,000 inclusive of GST of brand Hindware or Parryware"],
      },
      {
        title: "Doors & Windows",
        items: ['Main door - 6"X4" Ghana teak wood frame, shutter thickness of 32mm of price up to ₹30,000', 'Pooja Room - 5"X3" Teak wood frame and shutters door of price up to ₹12,000', 'Internal Doors - 5"X3" Sal wood frame and solid flush door of price up to ₹10,000', "Toilet Doors - WPC doors of price up to ₹5,000", "Windows - UPVC (450 /sqft)"],
      },
      {
        title: "Painting",
        items: ["Wall Putty - Birla wall putty of 2 coats for internal walls", "Internal walls - Asian internal primer of 1 coat and Tractor Emulsion of 2 coats", "External walls - Asian External primer of 1 coat and Asian Apex paint of 2 coats"],
      },
      {
        title: "Electrical",
        items: ["Conduits - ISI make pipes", "Wires - Finolex, or Equivalent Brand", "Switches - Hi-Fi brand", "MCB - IndoAsian"],
      },
      {
        title: "Plumbing",
        items: ["Pipes - CPVC and PVC pipes of brand Supreme or Ashirwad", "Overhead tank - 1,000 litres overhead tank Solar and Geyser lines are provided Inspection chambers inside the plot will be provided wherever required"],
      },
      {
        title: "Fabrication",
        items: ["Inside and Balcony - SS Staircase Railing of the price upto ₹700/sq ft", "Outside - MS Staircase"],
      },
    ],
  },
  {
    id: "residential-package-standard",
    main: "Residential Building Package (Concrete Blocks)",
    title: "Standard Package",
    price: "Rs. 2,050/sq ft",
    badge: "Popular Choice",
    badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
    highlights: [
      {
        title: "Core construction materials",
        items: ["Cement - UltraTech, Birla or equivalent", "Steel - SK, Sunvik or Turbo", "Blocks - Standard concrete blocks", "Sand - M-sand (single wash for all works) P-sand (double wash for plastering)", "Aggregates - 20mm & 40mm", 'Sump - 6" concrete blocks & waterproof plastered with single layer mesh with a capacity of 10000 liters.', 'Clear floor height - 10"6" feet.', "Waterproofing - Dr Fixit waterproofing for the terrace"],
      },
      {
        title: "Flooring",
        items: ["Living, Dining, Rooms & Kitchen - Tiles or Granite of price up to ₹100/SFT", "Balcony & Open areas - Anti skid tiles of value up to ₹50/sq.ft", "Staircase - Granite of price up to ₹120/sq.ft", "Parking - Tiles of price up to ₹50/sq.ft"],
      },
      {
        title: "Kitchen",
        items: ['Wall cladding up to a height of 3 feet above kitchen slab - Ceramic tiles of size 18"X12" of price up to ₹70/sq.ft', "Sink - Steel sink of price up to ₹6500/sq.ft", "Kitchen counter - 30mm thick slab of price up to ₹220/sq.ft"],
      },
      {
        title: "Bathroom",
        items: ["Wall cladding up to a height of 7 feet - Ceramic tiles of price ₹60/sq.ft", "Sanitary ware & CP fittings - Total budget for toilets ₹32,000 inclusive of GST of brand Cera or Varmora"],
      },
      {
        title: "Doors & Windows",
        items: ['Main door - 6"X4" Ghana teak wood frame, shutter thickness of 32mm of price up to ₹40,000', 'Pooja Room - 5"X3" Teak wood frame and shutters door of price up to ₹20,000', 'Internal Doors - 5"X3" Sal wood frame and solid flush door of price up to ₹15,000', "Toilet Doors - WPC doors of price up to ₹7,000", "Windows - UPVC (600 /sq.ft)"],
      },
      {
        title: "Painting",
        items: ["Wall Putty - Asian wall putty of 2 coats for internal walls", "Internal walls - Asian internal primer of 1 coat and Tractor Emulsion of 2 coats", "External walls - Asian External primer of 1 coat and Asian Apex paint of 2 coats"],
      },
      {
        title: "Electrical",
        items: ["Conduits - ISI make pipes", "Wires - Finolex, or Equivalent Brand", "Switches - GM or Lisa brand", "MCB - IndoAsian"],
      },
      {
        title: "Plumbing",
        items: ["Pipes - CPVC and PVC pipes of brand Supreme or Ashirwad", "Overhead tank - 1,500 litres overhead tank Solar and Geyser lines are provided Inspection chambers inside the plot will be provided wherever required"],
      },
      {
        title: "Fabrication",
        items: ["Inside and Balcony - SS Staircase Railing of the price upto ₹1000/SFT", "Outside - MS Staircase"],
      },
    ],
  },
  {
    id: "residential-package-premium",
    main: "Residential Building Package (Concrete Blocks)",
    title: "Premium Package",
    price: "Rs. 2,200/sq ft",
    badge: "Elite Quality",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    highlights: [
      {
        title: "Core Construction Materials",
        items: ["Cement - UltraTech Super or Birla Super", "Steel - Indus, Jindal or JSW", "Blocks - Standard concrete blocks", "Sand - M-sand (single wash for all works) P-sand (double wash for plastering)", "Aggregates - 20mm & 40mm", 'Sump - 6" concrete blocks & waterproof plastered with single layer mesh with a capacity of 12,000 liters.', "Clear floor height - 10'6″ feet.", "Waterproofing - Dr Fixit waterproofing for the terrace"],
      },
      {
        title: "Flooring",
        items: ["Living, Dining, Rooms & Kitchen - Tiles of price up to ₹120/SFT", "Balcony & Open areas - Anti skid tiles of value up to ₹60/sq.ft", "Staircase - Granite of price up to ₹200/sq.ft", "Parking - Tiles of price up to ₹60/sq.ft"],
      },
      {
        title: "Kitchen",
        items: ['Wall cladding up to a height of 3 feet above kitchen slab - Ceramic tiles of size 18"X12" of price up to ₹100/sq.ft', "Sink - Steel sink of price up to ₹8,000/sq.ft", "Kitchen counter - 30mm thick slab of price up to ₹250/sq.ft"],
      },
      {
        title: "Bathroom",
        items: ["Wall cladding up to a height of 10 feet - Ceramic tiles of price ₹70/sq.ft", "Sanitary ware & CP fittings - Total budget for toilets ₹40000/- inclusive of GST of brand Jaquar"],
      },
      {
        title: "Doors & Windows",
        items: ['Main door - 6"X4" Ghana teak wood frame, shutter thickness of 32mm of price up to ₹50,000', 'Pooja Room - 5"X3" Teak wood frame and solid flush door of price up to ₹30,000', 'Internal Doors - 5"X3" Sal wood frame and solid flush door of price up to ₹20,000', "Toilet Doors - WPC doors of price up to ₹10,000", "Windows - UPVC or Teak wood"],
      },
      {
        title: "Painting",
        items: ["Wall Putty - Asian wall putty of 2 coats for internal walls", "Internal walls - Asian internal primer of 1 coat and Tractor Emulsion of 2 coats", "External walls - Asian External primer of 1 coat and Asian Apex Ultima paint of 2 coats"],
      },
      {
        title: "Electrical",
        items: ["Conduits - ISI make pipes", "Wires - Finolex, or Equivalent Brand", "Switches - Anchor or Roma brand", "MCB - IndoAsian"],
      },
      {
        title: "Plumbing",
        items: ["Pipes - CPVC and PVC pipes of brand Supreme or Ashirwad", "Overhead tank - 2,000 litres overhead tank Solar and Geyser lines are provided Inspection chambers inside the plot will be provided wherever required"],
      },
      {
        title: "Fabrication",
        items: ["Inside and Balcony - SS Staircase Railing with Glass of the price up to ₹1200/SFT", "Outside - SS Staircase railing"],
      },
    ],
  },
  {
    id: "villa-package-standard",
    main: "Villa Package",
    title: "Standard Villa Package",
    price: "Rs. 2,500/sq ft",
    badge: "Ultra Premium",
    badgeColor: "bg-orange-600 text-white border-transparent",
    highlights: [
      {
        title: "Core construction materials",
        items: ["Cement - UltraTech Super or Birla Super", "Steel - Tata", 'Blocks - 6" and 8" blocks', "Sand - M-sand (single wash for all works) P-sand (double wash for plastering)", "Aggregates - 20mm & 40mm", 'Sump - 6" concrete blocks & waterproof plastered with single layer mesh with a capacity of 12,000 liters.', 'Clear floor height - 11".', "Waterproofing - Chemical waterproofing "],
      },
      {
        title: "Flooring",
        items: ["Living, Dining, Rooms & Kitchen - Tiles, granite or Marble upto ₹160/-", "Balcony & Open areas - Anti skid tiles of value up to ₹100/sq.ft", "Staircase - Granite of price up to ₹250/sq.ft", "Parking - Tiles of price up to ₹80/sq.ft"],
      },
      {
        title: "Kitchen",
        items: ['Wall cladding up to a height of 3 feet above kitchen slab - Ceramic tiles of size 18"X12"of price up to ₹100/sq.ft', "Sink - Fiber sink of price up to ₹10,000/sq.ft", "Kitchen counter - 30mm thick slab of price up to ₹250/sq.ft"],
      },
      {
        title: "Bathroom",
        items: ["Wall cladding up to a height of 10 feet - Ceramic tiles of price ₹70/sq.ft", "Sanitary ware & CP fittings - Total budget for toilets ₹55,000 inclusive of GST of Brand Jaquar and Kohler"],
      },
      {
        title: "Doors & Windows (PU Polish)",
        items: ['Main door - 6"X4" Teak wood frame, shutter thickness of 32mm of price up to ₹60,000', 'Pooja Room - 5"X3" Teak wood frame and shutters door of price up to ₹40,000', 'Internal Doors - 5"X3" Teak wood frame and solid flush door of price up to ₹20,000', "Toilet Doors - WPC doors of price up to ₹6,000", "Windows - Teak wood"],
      },
      {
        title: "Painting",
        items: ["Wall Putty - Asian wall putty of 2 coats for internal walls", "Internal walls - Royal paint", "External walls - Apex Ultima Protek"],
      },
      {
        title: "Electrical",
        items: ["Conduits - ISI make pipes", "Wires - Finolex, or Equivalent Brand", "Switches - Legrand or Schneider", "MCB - IndoAsian"],
      },
      {
        title: "Plumbing",
        items: ["Pipes - CPVC and PVC pipes of brand Supreme or Ashirwad", "Overhead tank - 2,000 litres overhead tank Solar and Geyser lines are provided Inspection chambers inside the plot will be provided wherever required"],
      },
      {
        title: "Fabrication",
        items: ["Inside - SS Staircase With Wood", "Outside - SS Staircase With Glass"],
      },
    ],
  },
];

export default function ClientPackages() {
  const [openPackageIndex, setOpenPackageIndex] = useState(0); 
  const [openHighlight, setOpenHighlight] = useState({
    pkgIndex: 0,
    highlightIndex: 0,
  });

  const togglePackage = (idx) => {
    setOpenPackageIndex((cur) => (cur === idx ? -1 : idx));
  };

  const toggleHighlight = (e, pkgIndex, highlightIndex) => {
    e.stopPropagation();
    setOpenHighlight((prev) =>
      prev.pkgIndex === pkgIndex && prev.highlightIndex === highlightIndex
        ? { pkgIndex: null, highlightIndex: null }
        : { pkgIndex, highlightIndex }
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-start">
        
        {/* LEFT COLUMN: HERO AREA & CAPTIVATING IMAGE */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6 md:space-y-8">
          <div className="space-y-4 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-100">
              Transparent Pricing
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 leading-tight">
              Premium House Construction Plans
            </h1>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Starting prices calculated per square foot. Review explicit material specs, transparent budgets, and custom architectural options tailored for your future space.
            </p>
          </div>

          {/* IMAGE INTEGRATION FOR VISUAL TRUST */}
          <div className="relative h-[200px] sm:h-[300px] md:h-[350px] lg:h-[280px] xl:h-[320px] w-full rounded-2xl overflow-hidden shadow-md border border-neutral-200">
            <Image 
              src="/images/Galleryimg-1.jpeg"
              alt="Modern residential structural framework showing accurate house construction process"
              fill
              sizes="(max-w-1024px) 100vw, 40vw"
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white space-y-1">
              <p className="text-xs font-bold text-orange-400 tracking-wider uppercase">RS Construction Standards</p>
              <p className="text-xs sm:text-sm font-medium text-neutral-200 leading-snug">Engineering strong foundations with structural verification checks at every phase.</p>
            </div>
          </div>

          {/* TRUST BULLETS FOR CLIENTS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-white p-4 rounded-xl border border-neutral-200 shadow-xs">
            <div className="flex items-center gap-3 sm:gap-2 lg:gap-3 sm:flex-col lg:flex-row text-left sm:text-center lg:text-left">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="text-xs font-bold text-neutral-700">Zero Hidden Costs</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-2 lg:gap-3 sm:flex-col lg:flex-row text-left sm:text-center lg:text-left border-t sm:border-t-0 sm:border-x border-neutral-100 pt-2.5 sm:pt-0 sm:px-2">
              <HardHat className="w-5 h-5 text-orange-500 shrink-0" />
              <span className="text-xs font-bold text-neutral-700">Expert Supervision</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-2 lg:gap-3 sm:flex-col lg:flex-row text-left sm:text-center lg:text-left border-t sm:border-t-0 pt-2.5 sm:pt-0">
              <Layers className="w-5 h-5 text-blue-500 shrink-0" />
              <span className="text-xs font-bold text-neutral-700">Top Brand Materials</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: RE-DESIGNED INTERACTIVE TIERS */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-5">
          {packagesData.map((p, idx) => {
            const isOpen = openPackageIndex === idx;

            return (
              <div 
                key={idx} 
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? "border-orange-500 shadow-md ring-1 ring-orange-500/20" 
                    : "border-neutral-200 shadow-xs hover:border-neutral-300"
                }`}
              >
                
                {/* ACCORDION HEADER TRIGGER */}
                <div 
                  onClick={() => togglePackage(idx)}
                  className="w-full text-left p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-neutral-50/40 select-none transition-colors"
                >
                  <div className="space-y-2 sm:space-y-1.5 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase truncate max-w-full">
                        {p.main}
                      </span>
                      {p.badge && (
                        <span className={`text-[9px] sm:text-[10px] px-2 py-0.5 font-bold rounded-md border uppercase tracking-wider whitespace-nowrap ${p.badgeColor}`}>
                          {p.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight truncate">{p.title}</h3>
                    <div className="text-xl sm:text-2xl font-black text-orange-600 tracking-tight">{p.price}</div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-0 border-neutral-100">
                    {p.pdf && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(p.pdf, "_blank");
                        }}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl bg-neutral-100 text-neutral-700 border border-neutral-200 hover:bg-neutral-200 active:scale-95 transition-all"
                      >
                        <FileText className="w-3.5 h-3.5 text-neutral-500" />
                        <span>Brochure</span>
                      </button>
                    )}
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-colors shrink-0 ${
                      isOpen ? "bg-orange-50 border-orange-200 text-orange-600" : "bg-neutral-50 border-neutral-200 text-neutral-500"
                    }`}>
                      {isOpen ? <ChevronUp className="w-4 h-4 stroke-[2.5]" /> : <ChevronDown className="w-4 h-4 stroke-[2.5]" />}
                    </div>
                  </div>
                </div>

                {/* DROPDOWN CHILD SPECIFICATIONS */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="border-t border-neutral-100 bg-neutral-50/50 p-4 sm:p-6 space-y-3 sm:space-y-4">
                        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-neutral-400 px-1">
                          Itemized Blueprint Specifications:
                        </p>
                        
                        {p.highlights.map((h, i) => {
                          const isHighlightOpen =
                            openHighlight.pkgIndex === idx &&
                            openHighlight.highlightIndex === i;

                          return (
                            <div key={i} className="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-3xs">
                              <button
                                type="button"
                                onClick={(e) => toggleHighlight(e, idx, i)}
                                className={`w-full text-left px-4 sm:px-5 py-3.5 flex items-center justify-between gap-4 text-xs sm:text-sm font-bold transition-colors ${
                                  isHighlightOpen ? "text-orange-600 bg-orange-50/30" : "text-neutral-700 hover:bg-neutral-50/50"
                                }`}
                              >
                                <span className="pr-2">{h.title}</span>
                                <motion.div
                                  animate={{ rotate: isHighlightOpen ? 45 : 0 }}
                                  className={`shrink-0 ${isHighlightOpen ? "text-orange-500" : "text-neutral-400"}`}
                                >
                                  <Plus className="w-4 h-4 stroke-[2.5]" />
                                </motion.div>
                              </button>

                              <AnimatePresence initial={false}>
                                {isHighlightOpen && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <div className="border-t border-neutral-100 bg-neutral-50/10">
                                      <ul className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                                        {h.items.map((item, j) => (
                                          <li key={j} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                                            <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                                              <Check className="w-2.5 h-2.5 text-emerald-600 stroke-[3.5]" />
                                            </div>
                                            <span className="flex-1 break-words">{item}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}