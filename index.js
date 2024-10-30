import React, { useState } from 'react';
import { Globe, Clock, Award, ArrowRight, Download, UserPlus, Star, Smartphone, Mail, Phone, Facebook, Twitter, Instagram } from 'lucide-react';

const EnglishCourseLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    { icon: Globe, title: "Lezioni globali", desc: "Interagisci con studenti da tutto il mondo" },
    { icon: Clock, title: "Flessibilità", desc: "Studia quando e dove vuoi" },
    { icon: Award, title: "Certificazione", desc: "Ottieni un attestato riconosciuto" },
    { icon: Download, title: "Materiali didattici", desc: "Accesso a lezioni registrate e risorse extra" }
  ];

  const testimonials = [
    {
      name: "Giulia Rossi",
      role: "Libera professionista",
      text: "Grazie a questo corso ho finalmente acquisito fiducia e scioltezza nella conversazione inglese. È stato un investimento che ha cambiato la mia carriera!",
      rating: 5
    },
    {
      name: "Marco Bianchi",
      role: "Ingegnere informatico",
      text: "I docenti sono preparatissimi e sanno davvero come motivare gli studenti. Consigliatissimo a chiunque voglia migliorare il proprio inglese in modo efficace.",
      rating: 4
    },
    {
      name: "Francesca Verdi",
      role: "Studentessa universitaria",
      text: "Un corso completo e ben strutturato. Ho raggiunto il livello C1 in soli 6 mesi, ora mi sento pronta per il mondo del lavoro internazionale.",
      rating: 5
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gestione del form
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navbar */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Smartphone className="text-blue-600 w-8 h-8 mr-2" />
              <span className="font-bold text-xl">EnglishPro</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Caratteristiche</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Prezzi</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Testimonianze</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105">
                Inizia ora
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-28 pb-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-10"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Impara l'inglese in modo <span className="text-yellow-400">semplice e divertente</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-100">
              Il miglior corso online per raggiungere la fluenza in inglese
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 flex items-center">
                Iscriviti subito <ArrowRight className="ml-2" />
              </button>
              <button className="bg-white bg-opacity-20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-30 transition-all">
                Scopri di più
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Perché scegliere EnglishPro</h2>
            <p className="text-xl text-gray-600">Impara l'inglese in modo rapido ed efficace</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <feature.icon className="text-blue-600 w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 bg-blue-600 text-white text-center">
              <h2 className="text-3xl font-bold mb-2">Abbonamento premium</h2>
              <p className="text-xl opacity-90">Tutto ciò che ti serve per imparare l'inglese</p>
            </div>
            <div className="p-8">
              <div className="flex justify-center items-baseline mb-8">
                <span className="text-5xl font-bold">€14,90</span>
                <span className="text-xl text-gray-500 ml-2">/mese</span>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Accesso illimitato alle lezioni online",
                  "Materiale didattico esclusivo",
                  "Supporto personalizzato dei docenti",
                  "Certificato di completamento",
                  "Garanzia soddisfatti o rimborsati"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <UserPlus className="text-green-500 mr-3" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-bold text-lg">
                Iscriviti ora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Storie di successo</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current w-5 h-5" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 text-lg italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="bg-blue-100 rounded-full p-2 mr-4">
                    <UserPlus className="text-blue-600 w-12 h-12" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-center mb-8">Inizia il tuo percorso</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Nome</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Cognome</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-bold text-lg"
              >
                Iscriviti subito
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Smartphone className="text-blue-400 w-8 h-8 mr-2" />
                <span className="font-bold text-xl">EnglishPro</span>
              </div>
              <p className="text-gray-400">
                Impara l'inglese in modo semplice ed efficace con il miglior corso online
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contatti</h3>
              <div className="space-y-3">
                <p className="flex items-center text-gray-400">
                  <Mail className="mr-2" /> info@englishpro.it
                </p>
                <p className="flex items-center text-gray-400">
                  <Phone className="mr-2" /> +39 123 456 7890
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Link utili</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Termini di servizio</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Social media</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EnglishPro. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EnglishCourseLanding;
