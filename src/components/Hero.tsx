import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 hero-glow opacity-90"></div>
      </div>
      
      {/* Tech Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-75"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-150"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-white rounded-full animate-pulse delay-300"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="fade-in visible max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            🚀 <span className="block">Smarter Surveys,</span>
            <span className="block gradient-text">Real Answers,</span>
            <span className="block">Zero Fakes</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            An AI-powered survey tool that collects real, trustworthy answers — anywhere, anytime.
          </p>
          
          <Button 
            onClick={scrollToAbout}
            size="lg"
            className="hero-button bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 rounded-full shadow-glow transition-all duration-300 hover:scale-105 font-semibold"
          >
            Learn More
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;