import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Globe2, ChevronRight, Phone, Mail, Clock, MapPin, MessageCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { ContactForm } from './components/ContactForm';
import { AdminLogin } from './pages/AdminLogin';
import { AdminDashboard } from './pages/AdminDashboard';
import { Team } from './pages/Team';
import { OrthognathicSurgery } from './pages/OrthognathicSurgery';

function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [showContactForm, setShowContactForm] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const languages = [
    { code: 'pt', name: 'PT', flagClass: 'flag-pt' },
    { code: 'fr', name: 'FR', flagClass: 'flag-fr' },
    { code: 'en', name: 'EN', flagClass: 'flag-en' }
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex justify-between h-24">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="flex items-center gap-2">
                  <img 
                    src="https://i.ibb.co/P5V4vgx/logo-Ramiro-sem-fundo.png" 
                    alt="DentalCare Logo" 
                    className="h-20 w-auto"
                  />
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex md:items-center md:gap-8">
              <a href="/" className="text-gray-700 hover:text-blue-600">
                {t('home')}
              </a>
              <a href="/#services" className="text-gray-700 hover:text-blue-600">
                {t('services')}
              </a>
              <a href="/team" className="text-gray-700 hover:text-blue-600">
                {t('team')}
              </a>
              <button 
                onClick={() => setShowContactForm(true)} 
                className="text-gray-700 hover:text-blue-600"
              >
                {t('contact')}
              </button>
              <div className="flex items-center gap-4">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`flex items-center gap-2 ${
                      language === lang.code ? 'scale-110' : ''
                    } transition-transform duration-200`}
                  >
                    <div className={`w-4 h-4 rounded-full ${lang.flagClass}`} />
                    <span className={`${
                      language === lang.code ? 'text-blue-600 font-semibold' : 'text-gray-700'
                    } hover:text-blue-600`}>
                      {lang.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-200`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="/"
              onClick={handleNavClick}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              {t('home')}
            </a>
            <a
              href="/#services"
              onClick={handleNavClick}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              {t('services')}
            </a>
            <a
              href="/team"
              onClick={handleNavClick}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              {t('team')}
            </a>
            <button
              onClick={() => {
                setShowContactForm(true);
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              {t('contact')}
            </button>
            <div className="px-3 py-2">
              <div className="flex flex-wrap gap-4">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`flex items-center gap-2 ${
                      language === lang.code ? 'text-blue-600 font-semibold' : 'text-gray-700'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full ${lang.flagClass}`} />
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full m-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setShowContactForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <ContactForm onClose={() => setShowContactForm(false)} />
          </div>
        </div>
      )}
    </>
  );
}

function MainLayout() {
  const { t } = useLanguage();
  const [showContactForm, setShowContactForm] = React.useState(false);
  
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/351969564324`, '_blank');
  };

  const services = [
    {
      title: 'implantSurgery',
      description: 'implantDesc',
      image: 'https://i.ibb.co/7tnhV1F/implantes-em-3d.jpg'
    },
    {
      title: 'wisdomTeeth',
      description: 'wisdomDesc',
      image: 'https://i.ibb.co/h9R2kxx/siso-3d2.webp'
    },
    {
      title: 'cystRemoval',
      description: 'cystDesc',
      image: 'https://i.ibb.co/MVF0N2t/Imagem-33.jpg'
    },
    {
      title: 'oralSurgery',
      description: 'oralDesc',
      image: 'https://i.ibb.co/28jrwH2/raiox.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
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

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full m-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setShowContactForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <ContactForm onClose={() => setShowContactForm(false)} />
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <header id="home" className="relative h-[90vh] mt-24">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80"
              alt="Modern dental clinic"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">{t('heroTitle')}</h1>
              <p className="text-xl mb-8">{t('heroSubtitle')}</p>
              <button 
                onClick={() => setShowContactForm(true)}
                className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
              >
                {t('contactUs')}
              </button>
            </div>
          </div>
        </header>

        {/* Main Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">{t('servicesTitle')}</h2>
            
            {/* Orthognathic Surgery - Featured Service */}
            <div className="mb-16 bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('orthognathicSurgery')}</h3>
                  <p className="text-gray-600 mb-6">{t('orthognathicDesc')}</p>
                  <a href="/orthognathic-surgery" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                    {t('learnMore')} <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
                <div className="h-64 md:h-auto">
                  <img
                    src="https://i.ibb.co/BBC0Md8/exemplo-esqueleto.webp"
                    alt="Orthognathic Surgery"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Other Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-48">
                    <img
                      src={service.image}
                      alt={t(service.title)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{t(service.title)}</h3>
                    <p className="text-gray-600">{t(service.description)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Health Tourism Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block p-3 bg-green-100 rounded-lg mb-4">
                  <Globe2 className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold mb-6">{t('healthTourism')}</h2>
                <p className="text-gray-600 mb-6">{t('tourismDesc')}</p>
                <ul className="space-y-3">
                  {[
                    'accommodation',
                    'multilingualTeam',
                    'treatment',
                    'followUp'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <ChevronRight className="w-5 h-5 text-green-600 mr-2" />
                      {t(item)}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80"
                  alt="Health Tourism"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://i.ibb.co/P5V4vgx/logo-Ramiro-sem-fundo.png" 
                  alt="DentalCare Logo" 
                  className="h-12 w-auto bg-white"
                />
              </div>
              <p className="text-gray-400">{t('specialists')}</p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('contactInfo')}</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-400">
                  <Phone className="h-4 w-4" />
                  <span>+351 969 564 324</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Mail className="h-4 w-4" />
                  <span>info@dentalcare.pt</span>
                </div>
              </div>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('address')}</h3>
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Av. da Liberdade 123<br />1250-147 Lisboa<br />Portugal</span>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('hours')}</h3>
              <div className="flex items-start gap-2 text-gray-400">
                <Clock className="h-4 w-4 mt-1" />
                <div>
                  <p>{t('weekdays')}</p>
                  <p>{t('saturday')}</p>
                  <p>{t('sunday')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/team" element={<Team />} />
        <Route path="/orthognathic-surgery" element={<OrthognathicSurgery />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
export { Navbar };