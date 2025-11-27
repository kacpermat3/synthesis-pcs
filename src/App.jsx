import React, { useState, useEffect } from 'react';
import { Monitor, Cpu, Wind, ChevronRight, Menu, X, ShieldCheck, Zap, Speaker, ShoppingBag, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-neutral-900 rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-neutral-900' : 'text-neutral-900'}`}>
            SYNTHESIS<span className="font-light text-neutral-500 ml-1">PCs</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#collections" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">Collections</a>
          <a href="#philosophy" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">Philosophy</a>
          <a href="#specs" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">Specs</a>
          <button className="bg-neutral-900 text-white px-5 py-2.5 rounded-sm text-sm font-medium hover:bg-neutral-800 transition-colors flex items-center group">
            Configure Yours
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-neutral-900">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-neutral-100 p-6 md:hidden flex flex-col space-y-4 shadow-xl">
          <a href="#collections" className="text-lg font-medium text-neutral-900">Collections</a>
          <a href="#philosophy" className="text-lg font-medium text-neutral-900">Philosophy</a>
          <a href="#specs" className="text-lg font-medium text-neutral-900">Specs</a>
          <button className="bg-neutral-900 text-white w-full py-3 rounded-sm font-medium">Configure Build</button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-neutral-50">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neutral-200/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 z-10">
          <div className="inline-flex items-center space-x-2 bg-white border border-neutral-200 px-3 py-1 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wide text-neutral-600 uppercase">Now Shipping RTX 50-Series</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-neutral-900 leading-[1.1] tracking-tight">
            Performance,<br />
            <span className="text-amber-700">Synthesized.</span>
          </h1>
          
          <p className="text-lg text-neutral-600 max-w-lg leading-relaxed">
            The bridge between the professional workspace and the gaming enthusiast. 
            Sleek Scandinavian design on the outside. Uncompromising power on the inside.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-neutral-900 text-white px-8 py-4 rounded-sm font-medium hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center">
              Explore Collections
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="bg-white text-neutral-900 border border-neutral-200 px-8 py-4 rounded-sm font-medium hover:bg-neutral-50 transition-colors flex items-center justify-center">
              Watch The Film
              <div className="w-6 h-6 rounded-full border border-neutral-900 flex items-center justify-center ml-2">
                <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-neutral-900 border-b-4 border-b-transparent ml-0.5"></div>
              </div>
            </button>
          </div>
          
          <div className="pt-8 flex items-center space-x-8 text-neutral-400">
            <div className="flex items-center space-x-2">
              <Wind className="w-5 h-5" />
              <span className="text-sm font-medium">Silent Acoustics</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-sm font-medium">3-Year Warranty</span>
            </div>
          </div>
        </div>

        {/* Visual Representation of the PC */}
        <div className="relative z-10 lg:h-[800px] flex items-center justify-center">
          {/* Main Case Graphic using CSS/SVG since we can't load external images reliably */}
          <div className="relative w-80 h-[500px] md:w-96 md:h-[600px] bg-white rounded-xl shadow-2xl border border-neutral-200 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500 group">
             {/* Side Panel (Glass Reflection) */}
             <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent z-20 pointer-events-none"></div>
             
             {/* Interior "Dark Void" */}
             <div className="absolute inset-4 bg-neutral-900 rounded-lg flex flex-col p-6 overflow-hidden">
                {/* Top Fans */}
                <div className="flex justify-center space-x-4 mb-8">
                  <div className="w-20 h-4 bg-neutral-800 rounded-full animate-pulse opacity-50"></div>
                  <div className="w-20 h-4 bg-neutral-800 rounded-full animate-pulse opacity-50 delay-75"></div>
                </div>
                
                {/* CPU Cooler */}
                <div className="w-32 h-32 mx-auto bg-neutral-800 rounded-lg border border-neutral-700 relative mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 border-4 border-neutral-700 rounded-full border-t-neutral-500 animate-spin-slow"></div>
                  </div>
                </div>
                
                {/* GPU */}
                <div className="mt-auto mb-12">
                   <div className="w-full h-16 bg-neutral-800 border-l-4 border-l-amber-600 rounded-r-md flex items-center px-4">
                      <span className="text-neutral-500 text-xs tracking-widest font-bold">GEFORCE RTX</span>
                   </div>
                </div>
             </div>

             {/* Front Panel (Wood Slats) - The Signature Look */}
             <div className="absolute top-0 right-0 w-8 h-full bg-neutral-100 flex flex-col justify-between py-2 border-l border-neutral-200 z-30 shadow-lg">
                {/* Simulating wood slats */}
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="w-full h-[3%] bg-amber-700/90 mb-1 shadow-sm"></div>
                ))}
             </div>
             
             {/* Floating Badge */}
             <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur px-4 py-2 rounded shadow-lg z-30 border border-neutral-100">
               <p className="text-xs font-bold text-neutral-900">THE EQUINOX</p>
               <p className="text-[10px] text-neutral-500">Walnut & Obsidian Build</p>
             </div>
          </div>
          
          {/* Background Decorative Elements */}
          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%] h-[80%] border border-neutral-200 rounded-full opacity-30"></div>
          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[60%] border border-neutral-200 rounded-full opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="bg-white p-8 rounded-sm border border-neutral-100 shadow-sm hover:shadow-md transition-shadow group">
    <div className="w-12 h-12 bg-neutral-50 rounded-sm flex items-center justify-center mb-6 group-hover:bg-neutral-900 transition-colors">
      <Icon className="w-6 h-6 text-neutral-900 group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-xl font-bold text-neutral-900 mb-3">{title}</h3>
    <p className="text-neutral-600 leading-relaxed text-sm">{desc}</p>
  </div>
);

const USP = () => {
  return (
    <section id="philosophy" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber-700 font-bold tracking-wider text-sm uppercase mb-2 block">Our Philosophy</span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Designed for the Silent Professional</h2>
          <p className="text-neutral-600">We don't build toys. We build workstations that dominate the boardroom during the day and the leaderboard at night.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={Speaker}
            title="Stealth Acoustics"
            desc="Engineered with noise-dampening materials and premium Noctua airflow optimization. Your PC should be seen, not heard."
          />
          <FeatureCard 
            icon={Zap}
            title="Raw Power"
            desc="Equipped with the latest NVIDIA RTX 50-Series architecture and high-frequency DDR5 memory for uncompromising performance."
          />
          <FeatureCard 
            icon={Monitor}
            title="Nordic Aesthetic"
            desc="Natural walnut and oak finishes meet tempered glass. A PC designed to complement your interior, not clash with it."
          />
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ title, tagline, price, features, accent, dark = false }) => (
  <div className={`relative group h-[500px] flex flex-col justify-between p-8 rounded-sm border transition-all duration-300 ${dark ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-neutral-50 border-neutral-200 text-neutral-900'} hover:shadow-xl`}>
    <div>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-2xl font-bold">{title}</h3>
        {dark ? <ShieldCheck className="text-neutral-600" /> : <ShoppingBag className="text-neutral-400" />}
      </div>
      <p className={`text-sm mb-8 ${dark ? 'text-neutral-400' : 'text-neutral-500'}`}>{tagline}</p>
      
      {/* Abstract Representation of the PC Look */}
      <div className="w-full h-40 mb-8 relative flex items-center justify-center">
         <div className={`w-32 h-40 border-2 rounded ${dark ? 'border-neutral-700 bg-neutral-800' : 'border-neutral-300 bg-white'} relative overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-500`}>
            {/* Front Panel Accent */}
            <div className={`absolute right-0 top-0 bottom-0 w-6 ${accent}`}></div>
            {/* Interior Fan Hint */}
            <div className={`absolute top-4 left-4 w-16 h-16 rounded-full border-2 ${dark ? 'border-neutral-700' : 'border-neutral-100'} opacity-50`}></div>
         </div>
      </div>

      <ul className="space-y-3">
        {features.map((feat, i) => (
          <li key={i} className="flex items-center text-sm font-medium">
            <div className={`w-1.5 h-1.5 rounded-full mr-3 ${accent.replace('bg-', 'bg-')}`}></div>
            {feat}
          </li>
        ))}
      </ul>
    </div>

    <div className="mt-8 flex items-center justify-between border-t pt-6 border-opacity-20 border-gray-500">
      <span className="text-lg font-bold">{price}</span>
      <button className={`px-4 py-2 text-sm font-medium rounded-sm transition-colors ${dark ? 'bg-white text-neutral-900 hover:bg-neutral-200' : 'bg-neutral-900 text-white hover:bg-neutral-800'}`}>
        Customize
      </button>
    </div>
  </div>
);

const Collections = () => {
  return (
    <section id="collections" className="py-24 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-amber-700 font-bold tracking-wider text-sm uppercase mb-2 block">The Collection</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Curated Builds</h2>
          </div>
          <a href="#" className="hidden md:flex items-center text-neutral-900 font-medium hover:text-amber-700 transition-colors mt-4 md:mt-0">
            View Comparison Table <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ProductCard 
            title="The Equinox"
            tagline="The Perfect Balance. Wood & White."
            price="From $2,499"
            accent="bg-amber-700"
            features={["Fractal North (Oak)", "RTX 4070 Ti Super", "Core i7 / Ryzen 7", "Air Cooled Silence"]}
          />
          <ProductCard 
            title="The Obsidian"
            tagline="Stealth Performance. All Black."
            price="From $2,899"
            accent="bg-neutral-800"
            dark={true}
            features={["Fractal North (Charcoal)", "RTX 5080 Ready", "Core i9 / Ryzen 9", "Dark Tint Glass"]}
          />
          <ProductCard 
            title="The Vanguard"
            tagline="Uncompromised Power. Studio Grade."
            price="From $4,299"
            accent="bg-neutral-400"
            features={["Custom Loop Option", "RTX 5090", "Threadripper Pro", "128GB DDR5 RAM"]}
          />
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-2 mb-6">
             <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <span className="text-neutral-900 font-bold text-sm">S</span>
             </div>
             <span className="text-xl font-bold tracking-tight">SYNTHESIS PCs</span>
          </div>
          <p className="text-neutral-400 max-w-sm mb-6">
            Hand-assembled in the UK. We bridge the gap between high-performance gaming rigs and sophisticated office furniture.
          </p>
          <div className="flex space-x-4">
             {/* Social placeholders */}
             <div className="w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 cursor-pointer">
               <span className="text-xs">IG</span>
             </div>
             <div className="w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 cursor-pointer">
               <span className="text-xs">X</span>
             </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-sm text-neutral-400">
            <li><a href="#" className="hover:text-white transition-colors">Configure System</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Business Orders</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Warranty Info</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-neutral-400">
            <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-white transition-colors">The Lab</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
        <p>© 2024 Synthesis PCs. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="font-sans antialiased text-neutral-900 bg-white selection:bg-amber-100">
      <Navbar />
      <Hero />
      <USP />
      <Collections />
      
      {/* CTA Section */}
      <section className="bg-neutral-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to upgrade your workspace?</h2>
          <p className="text-neutral-400 text-lg mb-10 max-w-2xl mx-auto">
            Experience the synthesis of silence and speed. Build your custom workstation today.
          </p>
          <button className="bg-white text-neutral-900 px-10 py-4 rounded-sm font-bold text-lg hover:bg-amber-50 transition-colors shadow-lg shadow-white/10">
            Start Your Build
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default App;