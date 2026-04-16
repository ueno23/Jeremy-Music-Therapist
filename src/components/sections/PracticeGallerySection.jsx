import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import jeremyHero from "../../assets/images/jeremy-hero.JPG";
import jeremySessionHome from "../../assets/images/jeremy-session-home.jpg";
import jeremySessionGroup from "../../assets/images/jeremy-session-group.JPG";
import practiceKeyboard from "../../assets/images/practice-keyboard.jpg";
import practiceRoomDrums from "../../assets/images/practice-room-drums.jpg";
import practiceRoomGuitar from "../../assets/images/practice-room-guitar.jpg";
import instrumentCollection from "../../assets/images/instrument-collection.jpg";
import jeremyDizi from "../../assets/images/jeremy-dizi.jpg";

const galleryImages = [
  {
    src: jeremyHero,
    alt: "Jeremy Yau portrait",
    caption: "A warm, grounded therapeutic presence",
  },
  {
    src: jeremySessionGroup,
    alt: "Jeremy Yau facilitating a group session with guitar",
    caption: "Group work that builds connection and participation",
  },
  {
    src: jeremySessionHome,
    alt: "Jeremy Yau providing a home-based music therapy session",
    caption: "In-home support tailored to individual needs",
  },
  {
    src: practiceRoomDrums,
    alt: "A music therapy room with drums set up in a circle",
    caption: "Spaces designed for engagement and shared music-making",
  },
  {
    src: practiceRoomGuitar,
    alt: "Therapy room setup with guitar and music technology",
    caption: "Flexible tools for communication, learning, and regulation",
  },
  {
    src: practiceKeyboard,
    alt: "Keyboard prepared with color prompts for accessibility",
    caption: "Adapted instruments that support access and participation",
  },
  {
    src: instrumentCollection,
    alt: "A collection of therapy instruments laid out on the floor",
    caption: "A broad instrument set to meet different goals and preferences",
  },
  {
    src: jeremyDizi,
    alt: "Jeremy Yau playing the Chinese flute dizi",
    caption: "Musicianship that brings texture, culture, and expression into sessions",
  },
];

function PracticeGallerySection() {
  return (
    <section className="section-shell py-20 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Practice In Action"
          title="Real spaces, real instruments, and real therapeutic connection"
          description="These images bring Jeremy's work to life across home visits, group sessions, clinical environments, and instrument-based therapeutic practice."
          align="center"
        />
      </Reveal>

      <div className="mt-12">
        <div className="mb-4 flex items-center justify-between gap-4">
          <p className="text-sm text-ink-700 dark:text-white/65">
            Scroll to explore Jeremy's practice and session environments.
          </p>
          <p className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-ink-700/70 sm:block dark:text-white/45">
            Swipe horizontally
          </p>
        </div>

        <div className="practice-scroll flex gap-5 overflow-x-auto pb-4">
        {galleryImages.map((image, index) => (
          <Reveal
            key={image.alt}
            delay={index * 0.04}
            className="min-w-[16rem] max-w-[16rem] flex-none sm:min-w-[17rem] sm:max-w-[17rem]"
          >
            <figure className="glass-panel group h-full overflow-hidden rounded-[2rem] p-3">
              <img
                src={image.src}
                alt={image.alt}
                className="h-52 w-full rounded-[1.5rem] object-cover transition duration-500 group-hover:scale-[1.02]"
              />
              <figcaption className="px-2 pb-2 pt-4 text-sm leading-7 text-ink-700 dark:text-white/72">
                {image.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
        </div>
      </div>
    </section>
  );
}

export default PracticeGallerySection;
