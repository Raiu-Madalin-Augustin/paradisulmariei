import { SelectedPage, ClassType } from "../../shared/types";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import { motion } from "framer-motion";
import HText from "../../shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Castel gonflabil",
    description:
      "Un castel gonflabil plin de culoare, perfect pentru copiii care vor să sară, să se joace și să se distreze.",
    image: image1,
  },
  {
    name: "Corturi pentru evenimente",
    description:
    "Corturi decorate cu gust, gata pentru o aniversare sau o reuniune de familie. Setarea include mese aranjate cu accesorii de petrecere și bannere festive. Acest spațiu este ideal pentru a crea amintiri de neuitat într-o atmosferă caldă și prietenoasă.",
    image: image2,
  },
  {
    name: "Tiroliană",
    description:
      "O tiroliană distractivă și sigură, proiectată pentru copii, oferind o experiență palpitantă într-un mediu controlat.",
    image: image3,
  },
  {
    name: "ATV electrice",
    description:
      "O atracție cu ATV electric prietenoasă pentru copii, care combină distracția cu siguranța. Acest mini vehicul de aventură este perfect pentru micii exploratori, amplasat într-un mediu de joacă animat, cu suficient spațiu deschis pentru ca cei mici să se plimbe și să se joace liber.",
    image: image4,
  },
  {
    name: "Carusel",
    description:
    "Un carusel vesel și colorat, perfect pentru a aduce zâmbete și bucurie copiilor. Această atracție clasică, cu scaune confortabile și o atmosferă jucăușă, adaugă un strop de magie de parc de distracții în locul de joacă, oferind momente de încântare pentru toți cei mici.",
    image: image5,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Atractions = ({ setSelectedPage }: Props) => {
  return (
    <section id="atracțiilenoastre" className="w-full bg-primary-100 py-5">
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
          <div className="md:w-3/4">
            <HText>Atracțiile noastre</HText>
            <p className="py-5">
              Descoperă un loc unde joaca și relaxarea se îmbină perfect!
              Complexul nostru oferă activități și atracții pentru toate
              vârstele – de la terenuri de joacă și castele gonflabile, la
              ATV-uri electrice, tiroliană și carusel. Totul este gândit pentru
              siguranța și bucuria copiilor, inclusiv a celor cu dizabilități.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[475px] w-full overflow-x-auto overflow-y-hidden pb-10">
          <ul className="w-[2800px] whitespace-nowrap">
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
