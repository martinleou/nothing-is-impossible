"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export function Modal({ isOpen, onClose, children, className }: ModalProps) {
  // Close on escape
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={cn(
              "glass relative w-full max-w-lg max-h-[92dvh] md:max-h-[85vh] rounded-3xl border border-white/10 shadow-2xl flex flex-col overflow-hidden",
              className
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - larger and more prominent on mobile */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-full p-2.5 text-text-secondary bg-[#050507]/80 backdrop-blur-sm transition hover:bg-[#050507] hover:text-white md:right-6 md:top-6"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Scrollable content area */}
            <div className="flex-1 overflow-y-auto p-6 pt-12 md:p-8 md:pt-8">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
