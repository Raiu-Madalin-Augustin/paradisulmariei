import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import HText from "../../shared/HText";
import { SelectedPage } from "../../shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-white`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}>
        {/* HEADER */}
        <motion.div
          className="md:w-6/7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">
              Te Așteptăm la Paradisul Mariei!
            </span>
          </HText>
          <p className="my-5">
            Intră în contact cu noi pentru a rezerva o zi de distracție sau
            pentru a afla mai multe despre activitățile și facilitățile noastre!
            Fie că organizezi o petrecere aniversară, un eveniment special, sau
            vrei doar să petreci o zi relaxantă cu familia, echipa noastră este
            aici să te ajute. Completează formularul și te vom contacta cât mai
            curând posibil.
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          {/* Form Section */}
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/contact@paradisulmariei.ro"
              method="POST"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NUME"
                {...register("nume", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <input
                className={inputStyles}
                type="text"
                placeholder="TELEFON"
                {...register("telefon", {
                  required: true,
                  pattern: /^[0-9]{10,15}$/,
                })}
              />
              {errors.phone && (
                <p className="mt-1 text-primary-500">
                  {errors.phone.type === "required" &&
                    "This field is required."}
                  {errors.phone.type === "pattern" && "Invalid phone number."}
                </p>
              )}

              <textarea
                className={inputStyles}
                placeholder="MESAJ"
                rows={4}
                cols={50}
                {...register("mesaj", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                >
                  TRIMITE
                </button>
              </div>
            </form>
          </motion.div>

          {/* Right Side Image or Content */}
          <motion.div
            className="mt-10 md:mt-0 basis-2/5 bg-primary-300 p-5 rounded-lg shadow-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5434.367755838435!2d23.74094019801607!3d47.0758576412528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4749ba0da3899de5%3A0xa40ebef8932d2195!2sCorneni!5e0!3m2!1sro!2sro!4v1731511467046!5m2!1sro!2sro"
              width="100%"
              height="400"
              style={{ border: "0", borderRadius: "8px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
