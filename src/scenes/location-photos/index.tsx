import { motion } from "framer-motion";
import image1 from "../../assets/location-images/video1_clear_frame_2.jpg";
import image2 from "../../assets/location-images/video1_green_space.jpg";
import image7 from "../../assets/location-images/video2_clear_frame_10.jpg";
import image3 from "../../assets/location-images/video2_clear_frame_3.jpg";
import image4 from "../../assets/location-images/video2_clear_frame_7.jpg";
import image5 from "../../assets/location-images/video2_clear_frame_8.jpg";
import image6 from "../../assets/location-images/video2_clear_frame_9.jpg";
import image8 from "../../assets/location-images/video4_clear_frame_1.jpg";
import image11 from "../../assets/location-images/video6_clear_frame_1.jpg";
import image12 from "../../assets/location-images/video6_clear_frame_3.jpg";
import image13 from "../../assets/location-images/video7_cand_se_facea_drumul_clear_frame_1.jpg";
import image14 from "../../assets/location-images/video7_cand_se_facea_drumul_clear_frame_2.jpg";
import image16 from "../../assets/location-images/video7_drumul_catre_zona_de_amenajare_clear_frame_10.jpg";
import image15 from "../../assets/location-images/video7_drumul_catre_zona_de_amenajare_clear_frame_7.jpg";
import image20 from "../../assets/location-images/video8_parcul_unde_va_fi_amenajat_locul_de_joaca_pt_copii_clear_frame_10.jpg";
import image17 from "../../assets/location-images/video8_parcul_unde_va_fi_amenajat_locul_de_joaca_pt_copii_clear_frame_2.jpg";
import image18 from "../../assets/location-images/video8_parcul_unde_va_fi_amenajat_locul_de_joaca_pt_copii_clear_frame_3.jpg";
import image19 from "../../assets/location-images/video8_parcul_unde_va_fi_amenajat_locul_de_joaca_pt_copii_clear_frame_7.jpg";
import HText from "../../shared/HText";
import { ClassType, SelectedPage } from "../../shared/types";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "În Curând...",
    description: "Un loc de poveste pentru cei mici, în curs de amenajare...",
    image: image1,
  },
  {
    name: "În Curând...",
    description: "Un loc de poveste pentru cei mici, în curs de amenajare...",
    image: image2,
  },
  {
    name: "În Curând...",
    description: "Un loc de poveste pentru cei mici, în curs de amenajare...",
    image: image3,
  },
  {
    name: "În Curând...",
    description: "Un loc de poveste pentru cei mici, în curs de amenajare...",
    image: image4,
  },
  {
    name: "În Curând...",
    description: "Un loc de poveste pentru cei mici, în curs de amenajare...",
    image: image5,
  },
  {
    name: "În Curând...",
    description: "Un loc de poveste pentru cei mici, în curs de amenajare...",
    image: image6,
  },
  {
    name: "În Curând...",
    description: "Un loc de poveste pentru cei mici, în curs de amenajare...",
    image: image7,
  },
  {
    name: "În Curând...",
    description: "Un loc de poveste pentru cei mici, în curs de amenajare...",
    image: image8,
  },
  {
    name: "În Curând...",
    description: "Un loc de poveste pentru cei mici, în curs de amenajare...",
    image: image11,
  },
  {
    name: "În Curând...",
    description: "Un loc de poveste pentru cei mici, în curs de amenajare...",
    image: image12,
  },
  {
    name: "În Curând...",
    description: "Un loc de poveste pentru cei mici, în curs de amenajare...",
    image: image13,
  },
  {
    name: "În Curând...",
    description: "Un loc de poveste pentru cei mici, în curs de amenajare...",
    image: image14,
  },
  {
    name: "În Curând...",
    description: "Un loc de poveste pentru cei mici, în curs de amenajare...",
    image: image15,
  },
  {
    name: "În Curând...",
    description: "Un loc de poveste pentru cei mici, în curs de amenajare...",
    image: image16,
  },
  {
    name: "În Curând...",
    description: "Un loc de poveste pentru cei mici, în curs de amenajare...",
    image: image17,
  },
  {
    name: "În Curând...",
    description: "Un loc de poveste pentru cei mici, în curs de amenajare...",
    image: image18,
  },
  {
    name: "În Curând...",
    description: "Un loc de poveste pentru cei mici, în curs de amenajare...",
    image: image19,
  },
  {
    name: "În Curând...",
    description: "Un loc de poveste pentru cei mici, în curs de amenajare...",
    image: image20,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const LocationPhotos = ({ setSelectedPage }: Props) => {
  return (
    <section id="încurând" className="w-full bg-primary-100 py-5">
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
            <HText>👷 În curs de amenajare... 🌳</HText>
            <p className="py-5">
              În mijlocul naturii, pe acest tărâm retras și rustic, se
              pregătește un loc special pentru bucuria celor mici. 🌳 Aici,
              copiii se vor putea bucura de spații de joacă în aer liber,
              înconjurați de liniștea pădurii și cântecul greierilor. 🌞 Departe
              de agitația orașului, acest peisaj idilic va prinde viață cu
              activități și atracții speciale, toate amenajate cu grijă și
              atenție pentru cei mici. 🎠 Curând, acest loc de poveste va fi
              transformat într-un paradis de aventură pentru copii, unde natura
              se întâlnește cu distracția. Vă așteptăm să reveniți pentru
              noutăți și să descoperiți surprizele pe care le pregătim! ✨
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

export default LocationPhotos;
