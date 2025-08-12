import { Mail, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Tech pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="fade-in text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Contact Us
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold text-white mb-4">
              Predictive Poolers Team
            </h3>
            
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Mail className="h-5 w-5 text-white/80" />
              <a 
                href="mailto:yogendra0800q@gmail.com" 
                className="text-lg text-white/90 hover:text-white transition-colors duration-300 underline decoration-white/50 hover:decoration-white"
              >
                yogendra0800q@gmail.com
              </a>
            </div>
            
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 font-semibold"
            >
              <a href="mailto:yogendra0800q@gmail.com">
                Get in Touch
                <Mail className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;