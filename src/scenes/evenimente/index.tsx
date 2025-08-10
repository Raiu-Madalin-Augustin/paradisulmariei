import { motion } from "framer-motion";
import HText from "../../shared/HText";
import { ClassType, SelectedPage } from "../../shared/types";
import Class from "./Class";

// Importă pozele cortului (redenumite .jpg/.webp dacă erau .jfif)
import cortExterior from "../../assets/events/cort-exterior.jpg";
import cortExterior2 from "../../assets/events/cort-exterior-2.jpg";
import cortExterior3 from "../../assets/events/cort-exterior-3.jpg";
import cortInterior1 from "../../assets/events/cort-interior-1.jpg";
import cortInterior2 from "../../assets/events/cort-interior-2.jpg";
import cortPriveliste from "../../assets/events/cort-interior-priveliste.jpg";
import pozeExtra from "../../assets/events/poze.jpg";

const events: Array<ClassType> = [
  {
    name: "Cort exterior",
    description:
      "Cort spațios, amplasat în mijlocul naturii, perfect pentru evenimente în aer liber.",
    image: cortExterior,
  },
  {
    name: "Cort exterior",
    description:
      "Structură solidă, cu ferestre arcuite, care aduce lumină naturală și eleganță.",
    image: cortExterior2,
  },
  {
    name: "Cort exterior",
    description:
      "Acces facil și spațiu generos, pregătit să găzduiască petreceri de neuitat.",
    image: cortExterior3,
  },
  {
    name: "Interior cort",
    description:
      "Mese rotunde și scaune elegante, aranjate pentru confort și atmosferă prietenoasă.",
    image: cortInterior1,
  },
  {
    name: "Interior cort",
    description:
      "Spațiu aerisit, cu decor personalizabil pentru diferite tipuri de evenimente.",
    image: cortInterior2,
  },
  {
    name: "Interior cort",
    description: "Ferestre mari pentru o conexiune directă cu natura din jur.",
    image: cortPriveliste,
  },
  {
    name: "Detalii eveniment",
    description:
      "Decor, accesorii și echipamente foto pentru capturarea momentelor speciale.",
    image: pozeExtra,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const EventsSection = ({ setSelectedPage }: Props) => {
  return (
    <section id="evenimente" className="w-full bg-primary-100 py-5">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Events)}>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-6/7">
            <HText>🎉 Evenimente la Paradisul Mariei</HText>
            <p className="py-5">
              Cortul nostru de evenimente este locul perfect pentru aniversări,
              petreceri private, întâlniri de familie și evenimente tematice.
              Fiecare detaliu este gândit pentru a oferi confort, eleganță și o
              experiență memorabilă, în mijlocul naturii. Pentru petreceri și
              evenimente, colaborăm cu{" "}
              <a
                href="https://haracatering.com/index.php"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Hara Catering
              </a>{" "}
              — ca momentele voastre să fie memorabile.
            </p>
          </div>
        </motion.div>

        <div className="mt-10 h-[475px] w-full overflow-x-auto overflow-y-hidden pb-10">
          <ul className="inline-flex whitespace-nowrap">
            {events.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default EventsSection;
