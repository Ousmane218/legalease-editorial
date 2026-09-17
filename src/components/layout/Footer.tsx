import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-editorial-dark text-editorial-light pt-14 md:pt-24 pb-12 px-6 md:px-12 border-t border-editorial-border/10">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-8 mb-12 md:mb-24">
          
          <div className="col-span-1">
            <h3 className="font-serif text-lg tracking-widest uppercase mb-4 md:mb-6 text-editorial-light/80">{t('footer.firm')}</h3>
            <ul className="space-y-4 text-sm text-editorial-light/60">
              <li><Link to="/approche" className="hover:text-editorial-accent transition-colors">{t('footer.approach')}</Link></li>
              <li><Link to="/equipe" className="hover:text-editorial-accent transition-colors">{t('footer.governance')}</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-serif text-lg tracking-widest uppercase mb-4 md:mb-6 text-editorial-light/80">{t('footer.expertises')}</h3>
            <ul className="space-y-4 text-sm text-editorial-light/60">
              <li><Link to="/expertises/juridique-fiscal" className="hover:text-editorial-accent transition-colors">Juridique & Fiscal</Link></li>
              <li><Link to="/expertises/corporate-finance" className="hover:text-editorial-accent transition-colors">Corporate Finance</Link></li>
              <li><Link to="/expertises/transactions" className="hover:text-editorial-accent transition-colors">Transactions</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-serif text-lg tracking-widest uppercase mb-4 md:mb-6 text-editorial-light/80">{t('footer.resources')}</h3>
            <ul className="space-y-4 text-sm text-editorial-light/60">
              <li><Link to="/secteurs" className="hover:text-editorial-accent transition-colors">{t('footer.sectors')}</Link></li>
              <li><Link to="/publications" className="hover:text-editorial-accent transition-colors">{t('footer.publications')}</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-serif text-lg tracking-widest uppercase mb-4 md:mb-6 text-editorial-light/80">{t('footer.team')}</h3>
            <ul className="space-y-4 text-sm text-editorial-light/60">
              <li><Link to="/equipe/ibrahima-souleymane-mbaye" className="hover:text-editorial-accent transition-colors">Ibrahima Souleymane MBAYE</Link></li>
              <li><Link to="/equipe/serigne-saliou-mbacke-gueye" className="hover:text-editorial-accent transition-colors">Serigne Saliou Mbacke Gueye</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-serif text-lg tracking-widest uppercase mb-4 md:mb-6 text-editorial-light/80">{t('footer.contact')}</h3>
            <ul className="space-y-4 text-sm text-editorial-light/60">
              <li>
                LegalEase Partners<br/>
                Villa N°112B, Centenaire<br/>
                Dakar, Sénégal
              </li>
              <li className="pt-2">
                <Link to="/contact" className="text-editorial-accent hover:text-editorial-light transition-colors inline-flex items-center uppercase tracking-widest text-xs font-medium border-b border-editorial-accent/30 pb-1">
                  {t('footer.writeUs')} ↗
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pt-8 border-t border-editorial-light/10 text-xs text-editorial-light/40 uppercase tracking-widest font-medium">
          <div className="mb-4 md:mb-0 space-y-2">
            <p>RCCM : SN DKR 2026 B 16076</p>
            <p>NINEA : 013018818 2A5</p>
          </div>
          <div className="font-serif text-sm italic normal-case tracking-normal">
            {t('footer.slogan')}
          </div>
        </div>

      </div>
    </footer>
  );
};
