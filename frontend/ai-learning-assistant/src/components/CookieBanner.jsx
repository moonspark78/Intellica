import React from 'react';
import { Link } from 'react-router-dom';

const CookieBanner = ({ onAccept, onRefuse }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t border-slate-700 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Texte */}
          <div className="flex-1">
            <h4 className="text-white font-semibold text-base mb-1 flex items-center gap-2">
              <span>🍪</span>
              <span>Gestion des cookies</span>
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Nous utilisons des cookies pour améliorer votre expérience et analyser 
              l'utilisation de notre site. Vous pouvez accepter ou refuser les cookies 
              non essentiels.{' '}
              <Link 
                to="/privacy-policy" 
                className="text-indigo-400 hover:text-indigo-300 underline transition-colors"
              >
                En savoir plus
              </Link>
            </p>
          </div>

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:flex-shrink-0">
            <button
              onClick={onRefuse}
              className="px-6 py-3 rounded-lg text-sm font-semibold border border-indigo-500 text-indigo-400 bg-transparent hover:bg-indigo-500/10 transition-all duration-200 order-2 sm:order-1"
            >
              Refuser
            </button>
            <button
              onClick={onAccept}
              className="px-6 py-3 rounded-lg text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-200 order-1 sm:order-2"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
