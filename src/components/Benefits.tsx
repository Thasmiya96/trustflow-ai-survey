import { Target, TrendingUp, Clock } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Target,
      title: "More Accurate & Trusted Data",
      description: "Advanced AI verification and blockchain security ensure the highest quality survey responses with unprecedented accuracy.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "National-Level Scalability", 
      description: "Scales seamlessly to support national-level health, education, and agriculture programs with enterprise-grade infrastructure.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Clock,
      title: "Time & Cost Efficiency",
      description: "Saves significant time, money, and effort while ensuring complete privacy and compliance with data protection regulations.",
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="fade-in text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            Key Benefits
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your data collection with measurable improvements in quality, scale, and efficiency
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index} 
                className="tech-card p-8 text-center group relative overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;