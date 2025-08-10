import { motion } from "framer-motion";
import HText from "../../shared/HText";
import { ClassType, SelectedPage } from "../../shared/types";
import Class from "../atractii/Class";

import pajiste from "../../assets/location-images/pajiste-flori.jpg";
import trandafiri from "../../assets/location-images/trandafiri-gradina.jpg";
import pasari from "../../assets/location-images/gospodarie-pasari.jpg";
import capsuni from "../../assets/location-images/capsuni-gradina.jpg";
import capsunaMacro from "../../assets/location-images/capsuna-salb-macro.jpg";
import privelisteVerde from "../../assets/location-images/video1_green_space.jpg";
import panouriSolare from "../../assets/location-images/panouri-solare.jpg";

const surroundings: Array<ClassType> = [
  {
    name: "Pajiște cu flori sălbatice",
    description:
      "Verde cât vezi cu ochii și flori de câmp – locul perfect pentru joacă în aer curat.",
    image: pajiste,
  },
  {
    name: "Trandafiri de grădină",
    description: "Aer curat și culori vii pentru o plimbare relaxantă.",
    image: trandafiri,
  },
  {
    name: "Gospodăria cu păsări",
    description:
      "Viață autentică la țară: copii curioși, părinți liniștiți, natură peste tot.",
    image: pasari,
  },
  {
    name: "Căpșuni din grădină",
    description: "Gust de copilărie: căpșuni coapte culese direct din grădină.",
    image: capsuni,
  },
  {
    name: "Căpșună de pădure",
    description:
      "Detalii mici care fac locul special – natură vie, la propriu.",
    image: capsunaMacro,
  },
  {
    name: "Priveliște verde",
    description: "Un colț de liniște.",
    image: privelisteVerde,
  },
  {
    name: "Energie verde – panouri solare",
    description:
      "Suntem alimentați responsabil. Folosim panouri solare pentru a reduce amprenta de carbon și a menține locul prietenos cu natura.",
    image: panouriSolare,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const SurroundingsSection = ({ setSelectedPage }: Props) => {
  return (
    <section id="împrejurimi" className="w-full bg-primary-100 py-5">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.LocationPhotos)}
      >
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
            <HText>🌿 Împrejurimile noastre: natură, liniște, aer curat</HText>
            <p className="py-5">
              La <strong>Paradisul Mariei</strong>, joaca se întâmplă în
              mijlocul naturii. Pajiști cu flori sălbatice, grădini cu
              trandafiri și căpșuni, gospodărie cu păsări și mult verde cât vezi
              cu ochii. E locul unde copiii se bucură în siguranță, iar părinții
              respiră liniște. În plus, susținem acest spațiu cu{" "}
              <strong>energie verde</strong> din panouri solare — pentru un
              viitor mai curat.
            </p>
          </div>
        </motion.div>

        <div className="mt-10 h-[475px] w-full overflow-x-auto overflow-y-hidden pb-10">
          <ul className="inline-flex whitespace-nowrap">
            {surroundings.map((item, i) => (
              <Class
                key={`${item.name}-${i}`}
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

export default SurroundingsSection;
