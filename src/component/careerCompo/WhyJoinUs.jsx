import { Rocket, Heart, Users, Lightbulb } from 'lucide-react';

const benefits = [
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Growth Opportunities",
    description: "Continuous learning and career advancement paths"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Great Benefits",
    description: "Comprehensive health coverage and flexible time off"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Inclusive Culture",
    description: "Diverse, supportive work environment"
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation",
    description: "Work with cutting-edge technologies"
  }
];

export default function WhyJoinUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Join GNT?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-block p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}