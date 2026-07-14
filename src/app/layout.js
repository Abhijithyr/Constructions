import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer'; // 1. Import the new Footer component
import WhatsAppFloating from '../components/WhatsAppFloating';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://rsconstruction.homes'),
  title: {
    default: 'RS Construction Homes | Certified Modern Engineering Contractors',
    template: '%s | RS Construction Homes'
  },
  description: 'Turn-key premium structural builders and contractors. Get free architectural structural analysis valuations.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.className} flex flex-col min-h-screen text-brand-text bg-brand-bg relative antialiased`}>
        {/* Sticky Header at Top */}
        <Header />
        
        {/* Main Content Area */}
        <div className="flex-grow pt-20 w-full max-w-[100vw] overflow-x-hidden">
          {children}
        </div>
        
        {/* 2. Global Persistent Corporate Footer */}
        <Footer />
        
        {/* Floating WhatsApp Action Trigger */}
        <WhatsAppFloating phoneNumber="919916477467" defaultMessage="Hello RS Constructions, I would like to get a quote for a project." />
      </body>
    </html>
  );
}