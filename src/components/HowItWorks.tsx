import { CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1️⃣",
      title: "Survey Creation",
      description: "Easy-to-use no-code builder with AI question generator."
    },
    {
      number: "2️⃣",
      title: "Survey Distribution", 
      description: "Online/offline via WhatsApp, Web, App, or Call."
    },
    {
      number: "3️⃣",
      title: "Adaptive AI Interaction",
      description: "Adaptive questions, multilingual support, and enumerator assistance."
    },
    {
      number: "4️⃣",
      title: "Multi-layer Verification",
      description: "Paradata checks, device attestation, biometric security, GPS & sensors, satellite/admin data."
    },
    {
      number: "5️⃣",
      title: "Real-time Integrity Scoring",
      description: "DLT-lite blockchain logging with audit-proof records."
    },
    {
      number: "6️⃣", 
      title: "Offline Data Capture",
      description: "Data stored safely even without internet and synced later."
    },
    {
      number: "7️⃣",
      title: "Supervisor Dashboard",
      description: "Maps, trust scores, flagged entries, bias correction, and scalability for health, education, and agriculture surveys."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="fade-in text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seven simple steps to transform your survey data collection process
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block"></div>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="relative flex items-start group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-6 w-5 h-5 bg-primary rounded-full items-center justify-center border-4 border-background group-hover:scale-125 transition-transform duration-300">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="tech-card p-6 ml-0 md:ml-20 w-full">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl font-bold flex-shrink-0">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;