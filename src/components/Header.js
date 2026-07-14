'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Cost Estimator', path: '/cost-estimator' },
  { label: 'Packages', path: '/packages' },
  { label: 'Contact Us', path: '/contact' }
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const currentPath = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-brand-surface/90 backdrop-blur-md border-b border-neutral-100 z-50">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">

        <Link href="/" className="flex items-center shrink-0">
          <Image 
            src="/images/logo.webp"          
            alt="RS Construction Logo"
            width={300}             
            height={100}       
            priority     
            className="w-auto h-10 sm:h-14 md:h-16 lg:h-20 object-contain transition-all" 
          />
        </Link>

        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {links.map((link) => (
            <Link key={link.path} href={link.path} className={`relative py-2 text-sm font-medium transition-colors hover:text-brand-accent ${currentPath === link.path ? 'text-brand-accent' : 'text-brand-muted'}`}>
              {link.label}
              {currentPath === link.path && (
                <motion.div layoutId="navMarker" className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-accent" />
              )}
            </Link>
          ))}
        </nav>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-brand-muted hover:text-brand-text transition-colors">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute top-20 left-0 right-0 bg-brand-surface border-b border-neutral-200 shadow-xl flex flex-col p-4 space-y-2 md:hidden z-40">
            {links.map((link) => (
              <Link key={link.path} href={link.path} onClick={() => setMobileOpen(false)} className={`p-3 rounded-lg text-base font-medium transition-colors ${currentPath === link.path ? 'bg-orange-50 text-brand-accent' : 'hover:bg-neutral-50 text-brand-muted'}`}>
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}