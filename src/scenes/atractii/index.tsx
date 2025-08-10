import { motion } from "framer-motion";
import HText from "../../shared/HText";
import { ClassType, SelectedPage } from "../../shared/types";
import Class from "./Class";

import dino from "../../assets/real-attractions/tobogan-dinozaur.jpg";
import minicastel from "../../assets/real-attractions/mini-castel-gonflabil.jpg";
import playground from "../../assets/real-attractions/complex-joaca-lemn.jpg";
import ballpit from "../../assets/real-attractions/piscina-cu-bile.jpg";
import pingpong from "../../assets/real-attractions/masa-tenis.jpg";
import carousel from "../../assets/real-attractions/carusel.jpg";
import atv from "../../assets/real-attractions/atv-electric.jpg";

const classes: Array<ClassType> = [
  {
    name: "Tobogan gonflabil Dinozaur",
    description:
      "Uriaș, cu dublă pistă și vibe tropical—favoritul micilor aventurieri.",
    image: dino,
  },
  {
    name: "Mini castel gonflabil",
    description:
      "Colorat și distractiv, perfect pentru cei mai mici copii. Situat lângă toboganul Dinozaur pentru joacă continuă.",
    image: minicastel,
  },
  {
    name: "Complex de joacă din lemn",
    description:
      "Turnuri, punți, tobogane, panou de escaladă și leagăne. Un mini-parc pentru exploratori curajoși în mijlocul naturii.",
    image: playground,
  },
  {
    name: "Piscină cu bile",
    description:
      "Zonă moale și sigură pentru cei mai mici. Culori, energie și zâmbete cât cuprinde.",
    image: ballpit,
  },
  {
    name: "Masa de ping-pong",
    description:
      "Pentru părinți și copii mai mari: meciuri amicale în aer liber, perfectă pentru pauze active.",
    image: pingpong,
  },
  {
    name: "Carusel pentru copii",
    description:
      "Clasic, vesel și colorat—rotiri blânde care aduc instant evergie pozitivă și poze reușite.",
    image: carousel,
  },
  {
    name: "ATV electric copii",
    description:
      "Aventură controlată pe trasee dedicate. Distracție în siguranță.",
    image: atv,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Atractions = ({ setSelectedPage }: Props) => {
  return (
    <section id="atracții" className="w-full bg-primary-100 py-5">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurAttractions)}
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
            <HText>🛝 Atracții disponibile acum</HText>
            <p className="py-5">
              Primele atracții au sosit și sunt gata de joacă! Mai jos găsești
              echipamentele instalate deja în teren. Paradisul Mariei prinde
              viață cu zone de distracție pentru toate vârstele – de la
              gonflabile spectaculoase și complexe de joacă din lemn, până la
              piscine cu bile, carusele și ATV-uri electrice pentru micii
              aventurieri. Toate echipamentele sunt sigure, colorate și
              pregătite să aducă zâmbete copiilor și momente de relaxare
              părinților.
            </p>
          </div>
        </motion.div>

        <div className="mt-10 h-[475px] w-full overflow-x-auto overflow-y-hidden pb-10">
          <ul className="w-[3200px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
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

export default Atractions;
