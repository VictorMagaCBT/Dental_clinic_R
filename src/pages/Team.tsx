import React from 'react';
import { useLanguage } from '../LanguageContext';
import { GraduationCap, Award, Globe2, MessageCircle } from 'lucide-react';
import { Navbar } from '../App';

export function Team() {
  const { t } = useLanguage();
  
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/351969564324`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 flex items-center gap-2 group"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-200 ease-in-out">
          WhatsApp
        </span>
      </button>

      <Navbar />
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-32">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          {t('teamTitle')}
        </h1>
        <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
          {t('teamSubtitle')}
        </p>
      </div>

      {/* Team Members */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Dr. Ramiro Silva */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex items-center">
            {/* Imagem do Dr. */}
            <div className="w-1/2 h-[400px]">
              <img
                src="https://i.ibb.co/86djpPx/Ramiro-min.jpg?auto=format&fit=crop&q=80"
                alt="Dr. Miguel Silva"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Conteúdo ao lado */}
            <div className="w-1/2 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t('drSilvaName')}
              </h3>
              <p className="text-blue-600 font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                {t('drSilvaTitle')}
              </p>
              <p className="text-gray-600 mb-6">
                {t('drSilvaDesc')}
              </p>
              <div className="flex items-center gap-4 text-gray-500">
                <Award className="w-5 h-5" />
                <Globe2 className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Dr. Colega */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex items-center">
            {/* Imagem da Dra. */}
            <div className="w-1/2 h-[400px]">
              <img
                src="https://i.ibb.co/8PtrdJb/Colega-Ramiro-min-1.jpg?auto=format&fit=crop&q=80"
                alt="Dra. Ana Santos"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Conteúdo ao lado */}
            <div className="w-1/2 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t('drSantosName')}
              </h3>
              <p className="text-blue-600 font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                {t('drSantosTitle')}
              </p>
              <p className="text-gray-600 mb-6">
                {t('drSantosDesc')}
              </p>
              <div className="flex items-center gap-4 text-gray-500">
                <Award className="w-5 h-5" />
                <Globe2 className="w-5 h-5" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}