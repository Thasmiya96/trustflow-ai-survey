import { Shield, Zap, Globe } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="fade-in max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            Powered by Next-Gen Technology
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-16 leading-relaxed">
            Our toolkit uses <strong>Artificial Intelligence</strong>, <strong>Satellite Images</strong>, and <strong>Blockchain</strong> to make sure surveys are:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="tech-card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">✅ Real</h3>
              <p className="text-muted-foreground">
                AI-powered verification ensures authentic responses from real people
              </p>
            </div>
            
            <div className="tech-card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">✅ Fast</h3>
              <p className="text-muted-foreground">
                Lightning-quick data collection and processing with real-time insights
              </p>
            </div>
            
            <div className="tech-card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">✅ Secure</h3>
              <p className="text-muted-foreground">
                Blockchain technology ensures data integrity and tamper-proof records
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;