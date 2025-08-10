type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex
  h-full w-full flex-col items-center justify-center
  whitespace-normal bg-primary-500 text-center text-white
  opacity-0 transition duration-500 hover:opacity-90 rounded-lg`;

  return (
    <li className="relative mx-5 inline-block w-[450px] aspect-[4/3] overflow-hidden rounded-lg">
      <div className={overlayStyles}>
        <p className="text-2xl font-bold">{name}</p>
        {description && <p className="mt-5">{description}</p>}
      </div>
      <img
        src={image}
        alt={name}
        className="h-full w-full object-cover object-center"
        loading="lazy"
      />
    </li>
  );
};

export default Class;
