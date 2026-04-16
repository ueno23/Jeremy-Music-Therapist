import {
  Baby,
  BrainCircuit,
  HeartHandshake,
  House,
  Sparkles,
} from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";

const services = [
  {
    title: "Early Childhood Development",
    description:
      "Support developmental milestones through engaging music sessions that build attention, communication, play, and emotional regulation.",
    icon: Baby,
  },
  {
    title: "Disability Support (NDIS)",
    description:
      "Individual and group therapy tailored to client goals, interests, strengths, and functional outcomes within an NDIS context.",
    icon: HeartHandshake,
  },
  {
    title: "Mental Health",
    description:
      "Music-based approaches to support emotional wellbeing, expression, reflection, resilience, and therapeutic connection.",
    icon: BrainCircuit,
  },
  {
    title: "Aged Care & Palliative Care",
    description:
      "Improving quality of life, comfort, connection, reminiscence, and meaningful engagement through live, responsive music-making.",
    icon: Sparkles,
  },
  {
    title: "Private Sessions",
    description:
      "Flexible home visits or clinic-based therapy for individuals and families looking for tailored, relationship-centered support.",
    icon: House,
  },
];

function ServicesSection() {
  return (
    <section id="services" className="section-shell py-20 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Services"
          title="Support designed around goals, strengths, and everyday life"
          description="Jeremy offers music therapy across a range of settings, always tailoring the session structure, instruments, and therapeutic focus to each person’s needs."
          align="center"
        />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.06}>
            <ServiceCard {...service} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
