import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Stethoscope, Sheet as Teeth, Scale as Scalpel, Building2, Globe2, ChevronRight, Phone, Mail, Clock, MapPin, Languages, MessageCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { ContactForm } from './components/ContactForm';
import { AdminLogin } from './pages/AdminLogin';
import { AdminDashboard } from './pages/AdminDashboard';

function MainLayout() {
  const { language, setLanguage, t } = useLanguage();
  const [showContactForm, setShowContactForm] = React.useState(false);

  const languages = [
    { code: 'pt', name: 'PT' },
    { code: 'fr', name: 'FR' },
    { code: 'en', name: 'EN' }
  ];

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/351969564324`, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

      {/* Navbar */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center gap-2 cursor-pointer" onClick={scrollToTop}>
                  <Stethoscope className="h-8 w-8 text-blue-600" />
                  <span className="text-xl font-bold text-gray-900">DentalCare</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <button onClick={scrollToTop} className="text-gray-700 hover:text-blue-600">
                {t('home')}
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600">
                {t('services')}
              </button>
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
                    className={`flex items-center gap-1 ${
                      language === lang.code ? 'text-blue-600 font-semibold' : 'text-gray-700'
                    } hover:text-blue-600 cursor-pointer`}
                  >
                    {language === lang.code && <Languages className="h-4 w-4" />}
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

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <header id="home" className="relative h-[90vh] mt-20">
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
              <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
                {t('scheduleButton')}
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
                  <div className="inline-block p-3 bg-blue-100 rounded-lg mb-4">
                    <Scalpel className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('orthognathicSurgery')}</h3>
                  <p className="text-gray-600 mb-6">{t('orthognathicDesc')}</p>
                  <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700">
                    {t('learnMore')} <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
                <div className="h-64 md:h-auto">
                  <img
                    src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80"
                    alt="Orthognathic Surgery"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Other Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Teeth className="w-6 h-6" />,
                  title: 'implantSurgery',
                  description: 'implantDesc'
                },
                {
                  icon: <Stethoscope className="w-6 h-6" />,
                  title: 'wisdomTeeth',
                  description: 'wisdomDesc'
                },
                {
                  icon: <Scalpel className="w-6 h-6" />,
                  title: 'cystRemoval',
                  description: 'cystDesc'
                },
                {
                  icon: <Building2 className="w-6 h-6" />,
                  title: 'oralSurgery',
                  description: 'oralDesc'
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="inline-block p-3 bg-blue-100 rounded-lg mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t(service.title)}</h3>
                  <p className="text-gray-600">{t(service.description)}</p>
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
                <Stethoscope className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-bold">DentalCare</span>
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
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;