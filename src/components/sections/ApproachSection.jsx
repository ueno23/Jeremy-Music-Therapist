import { CirclePlay, Guitar, MicVocal, Piano, Waves } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import practiceRoomDrums from "../../assets/images/practice-room-drums.jpg";
import practiceRoomGuitar from "../../assets/images/practice-room-guitar.jpg";

const approachItems = [
  { icon: MicVocal, label: "Voice and singing" },
  { icon: Guitar, label: "Guitar and accompaniment" },
  { icon: Piano, label: "Piano and melodic support" },
  { icon: CirclePlay, label: "Percussion and ethnographic instruments" },
  { icon: Waves, label: "Clarinet and Chinese flute (dizi)" },
];

function ApproachSection() {
  return (
    <section className="section-shell py-20 sm:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Instruments & Approach"
            title="A flexible musical toolkit shaped around therapeutic goals"
            description="Sessions are tailored using a variety of instruments to meet therapeutic goals in an engaging and meaningful way. Jeremy adapts the music, pace, and therapeutic focus to support communication, regulation, participation, reminiscence, self-expression, and connection."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass-panel overflow-hidden rounded-[2rem] p-3">
                <img
                  src={practiceRoomDrums}
                  alt="Music therapy room arranged with drums and instruments"
                  className="h-56 w-full rounded-[1.4rem] object-cover"
                />
              </div>
              <div className="glass-panel overflow-hidden rounded-[2rem] p-3">
                <img
                  src={practiceRoomGuitar}
                  alt="Therapy room setup with guitar, keyboard, and visual supports"
                  className="h-56 w-full rounded-[1.4rem] object-cover"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {approachItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="glass-panel rounded-[1.8rem] p-5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ocean-50 text-ocean-700 dark:bg-ocean-500/15 dark:text-ocean-100">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <p className="mt-4 text-sm font-semibold leading-7 text-ink-900 dark:text-white">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ApproachSection;
