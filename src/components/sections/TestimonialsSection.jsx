import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import TestimonialCard from "../ui/TestimonialCard";

const testimonials = [
  {
    quote:
      "Jeremy created such a calm, engaging space for our child. We saw more confidence, more communication, and genuine joy in every session.",
    name: "Parent of a primary-aged client",
    role: "Early childhood and disability support",
  },
  {
    quote:
      "His sessions are thoughtful, responsive, and deeply person-centred. Jeremy communicates clearly with families and works beautifully alongside the broader care team.",
    name: "Support Coordinator",
    role: "NDIS referral partner",
  },
  {
    quote:
      "Jeremy has a wonderful way of meeting people where they are. His music therapy sessions bring warmth, dignity, and meaningful engagement to clients in care settings.",
    name: "Aged Care Team Member",
    role: "Residential care setting",
  },
  {
    quote:
      "I felt comfortable from the first session. The music helped me express things that were hard to put into words, and I always felt listened to.",
    name: "Private Client",
    role: "Adult mental health support",
  },
];

function TestimonialsSection() {
  return (
    <section className="section-shell py-20 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Testimonials"
          title="Warm feedback from families, clients, and referral partners"
          description="Sample testimonials are included here as placeholders and can be replaced with real client or referrer feedback when ready."
          align="center"
        />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.name} delay={index * 0.06}>
            <TestimonialCard {...testimonial} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
