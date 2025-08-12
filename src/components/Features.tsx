import { 
  Brain, 
  Globe, 
  Satellite, 
  Shield, 
  UserX, 
  Download, 
  Lock, 
  BarChart3 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      emoji: "🧠",
      title: "AI Smart Questions",
      description: "AI-generated questions that adapt to your answers."
    },
    {
      icon: Globe,
      emoji: "🌍",
      title: "Any Language, Any Device",
      description: "Works on phone, web, voice calls, and WhatsApp (wide reach)."
    },
    {
      icon: Satellite,
      emoji: "🛰",
      title: "Satellite Checks",
      description: "Verifies farming and land claims from space."
    },
    {
      icon: Lock,
      emoji: "🔒",
      title: "Blockchain Safety",
      description: "Data is stored in a diary that no one can erase."
    },
    {
      icon: UserX,
      emoji: "🎭",
      title: "Fake-Buster",
      description: "Eliminates fake/bot responses before they contaminate datasets."
    },
    {
      icon: Download,
      emoji: "📶",
      title: "Offline Data Sync",
      description: "Capture data offline and sync later without losing information."
    },
    {
      icon: Shield,
      emoji: "🛡",
      title: "Enhanced Security",
      description: "Uses biometric verification like voice liveness for extra trust."
    },
    {
      icon: BarChart3,
      emoji: "📊",
      title: "Bias Correction",
      description: "Reduces errors through automated AI cross-checks."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="fade-in text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            Powerful Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced AI and blockchain technology working together to revolutionize survey data collection
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="tech-card p-6 text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl">
                    {feature.emoji}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;