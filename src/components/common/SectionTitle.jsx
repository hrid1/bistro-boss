const SectionTitle = ({ heading, subheading }) => {
  return (
    <div className="mb-12 w-full md:w-4/12 mx-auto text-center">
      <p className="text-xl text-[#D99904] mb-4"> ---{subheading}--- </p>
      <h3 className="text-4xl border-y-2 py-6 uppercase"> {heading} </h3>
    </div>
  );
};

export default SectionTitle;
