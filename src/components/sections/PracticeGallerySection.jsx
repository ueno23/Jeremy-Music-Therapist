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
    className: "md:col-span-5 md:row-span-2",
  },
  {
    src: jeremySessionGroup,
    alt: "Jeremy Yau facilitating a group session with guitar",
    caption: "Group work that builds connection and participation",
    className: "md:col-span-4",
  },
  {
    src: jeremySessionHome,
    alt: "Jeremy Yau providing a home-based music therapy session",
    caption: "In-home support tailored to individual needs",
    className: "md:col-span-3",
  },
  {
    src: practiceRoomDrums,
    alt: "A music therapy room with drums set up in a circle",
    caption: "Spaces designed for engagement and shared music-making",
    className: "md:col-span-4",
  },
  {
    src: practiceRoomGuitar,
    alt: "Therapy room setup with guitar and music technology",
    caption: "Flexible tools for communication, learning, and regulation",
    className: "md:col-span-4",
  },
  {
    src: practiceKeyboard,
    alt: "Keyboard prepared with color prompts for accessibility",
    caption: "Adapted instruments that support access and participation",
    className: "md:col-span-4",
  },
  {
    src: instrumentCollection,
    alt: "A collection of therapy instruments laid out on the floor",
    caption: "A broad instrument set to meet different goals and preferences",
    className: "md:col-span-6",
  },
  {
    src: jeremyDizi,
    alt: "Jeremy Yau playing the Chinese flute dizi",
    caption: "Musicianship that brings texture, culture, and expression into sessions",
    className: "md:col-span-6",
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

      <div className="mt-12 grid gap-5 md:grid-cols-12">
        {galleryImages.map((image, index) => (
          <Reveal key={image.alt} delay={index * 0.04} className={image.className}>
            <figure className="glass-panel group h-full overflow-hidden rounded-[2rem] p-3">
              <img
                src={image.src}
                alt={image.alt}
                className="h-64 w-full rounded-[1.5rem] object-cover transition duration-500 group-hover:scale-[1.02] md:h-full"
              />
              <figcaption className="px-2 pb-2 pt-4 text-sm leading-7 text-ink-700 dark:text-white/72">
                {image.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default PracticeGallerySection;
