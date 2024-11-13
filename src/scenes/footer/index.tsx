import Logo from "../../assets/ParadisulMarieiText (1).png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">Paradisul Mariei vă așteaptă în curând!</p>
          <p>© Paradisul Mariei All Rights Reserved.</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact</h4>
          <p className="my-5">Putem fi contactați prin email sau telefon:</p>
          <p>
            <a
              href="mailto:contact@paradisulmariei.ro"
              className="text-blue-500 hover:underline"
            >
              contact@paradisulmariei.ro
            </a>
          </p>
          <p>
            <a
              href="tel:+40740191340"
              className="text-blue-500 hover:underline"
            >
              +40 740 191 340
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
