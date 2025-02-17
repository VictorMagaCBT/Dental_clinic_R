import React from 'react';
import { useLanguage } from '../LanguageContext';
import { MessageCircle, CheckCircle2 } from 'lucide-react';
import { Navbar } from '../App';

export function OrthognathicSurgery() {
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
      <div className="relative h-[60vh] pt-24">
        <div className="absolute inset-0">
          <img
            src="https://i.ibb.co/8gDxM1G/tecnologia.jpg"
            alt="Orthognathic Surgery Technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/70" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">{t('orthognathicSurgery')}</h1>
            <p className="text-xl">{t('orthognathicHeroDesc')}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('orthognathicOverviewTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 mb-6">{t('orthognathicOverviewDesc')}</p>
              <ul className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{t(`orthognathicBenefit${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://i.ibb.co/Tg7bcPW/Imagem-10.jpg"
                alt="Dental consultation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('orthognathicProcessTitle')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-blue-600">{step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{t(`orthognathicStep${step}Title`)}</h3>
                <p className="text-gray-600">{t(`orthognathicStep${step}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('orthognathicResultsTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://i.ibb.co/K7PJTH0/Imagem-11-Inc-gnita-min.jpg"
                alt="Treatment results"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-gray-600 mb-6">{t('orthognathicResultsDesc')}</p>
              <ul className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{t(`orthognathicResult${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('orthognathicCtaTitle')}</h2>
            <p className="text-gray-600 mb-8">{t('orthognathicCtaDesc')}</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              {t('scheduleButton')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}