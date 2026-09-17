import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { navigation } from '../../data/navigation';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '../../lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, currentPath }) => {
  const { t } = useTranslation();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-40 bg-editorial-bg pt-24 px-6 md:hidden flex flex-col"
        >
          <div className="flex flex-col space-y-6 mt-8">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={cn(
                  "text-3xl font-serif tracking-wide transition-colors",
                  currentPath === item.path ? "text-editorial-text" : "text-editorial-muted"
                )}
              >
                {t(item.nameKey)}
              </Link>
            ))}
          </div>

          <div className="mt-auto mb-12">
            <Link 
              to="/contact"
              onClick={onClose}
              className="inline-flex items-center text-lg font-medium text-editorial-text"
            >
              {t('nav.contact')} <ArrowUpRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
