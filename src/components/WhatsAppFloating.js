'use client';
import { motion } from 'framer-motion';

export default function WhatsAppFloating({ phoneNumber, defaultMessage }) {
  const encodedMsg = encodeURIComponent(defaultMessage);
  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${encodedMsg}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-brand-whatsapp text-white p-3 sm:p-4 rounded-full shadow-2xl flex items-center justify-center border border-white/20"
    >
      <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.411 0 11.989 0c3.183.001 6.177 1.24 8.43 3.496 2.254 2.256 3.491 5.253 3.491 8.434 0 6.583-5.351 11.931-11.93 11.931-2.006-.002-3.97-.507-5.73-1.467L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.528 2.016 14.062 1 11.99 1 6.551 1 2.13 5.371 2.126 10.798c-.001 1.67.446 3.3 1.295 4.757l-.989 3.61 3.715-.965z" />
      </svg>
    </motion.a>
  );
}