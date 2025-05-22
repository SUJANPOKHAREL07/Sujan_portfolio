const Cards = () => {
  const cardElements = [
    {
      key: 1,
      projectTitle: "Hartbazar",
      projectDescription:
        "The real life adaptaion of local market to sell and buy vegetables fresh and convient way",
      projectImg: "public/hartbazar.png",
    },
    {
      key: 2,
      projectTitle: "Ghumaari",
      projectDescription:
        "Hotel booking website with provide hotel owner to list their hotels and attract new tourist",
      projectImg: "public/ghumari.png",
    },
    {
      key: 3,
      projectTitle: "VutungTung",
      projectDescription:
        "It's a vehicle rental website where a user can rent the vehiclw he/she want and the owner send theh vehicle to the requested locqation",
      projectImg: "public/vutungtung.png",
    },
  ];
  return (
    <>
      
        <div className="py-5 px-5 sm:px-10 gap-10 w-full shadow-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
  {cardElements.map((ele, key) => (
    <div
      key={key}
      className="border text-white border-gray-100/80 rounded-xl hover:bg-zinc-900/60 w-full transition-colors overflow-hidden"
    >
      <div className="bg-purple-300/20 text-white h-full space-y-2">
        <div className="bg-gray-500">
          <img
            src={ele.projectImg}
            alt="project-Image"
            className="w-full h-[10rem] object-cover"
          />
        </div>
        <div className="justify-center">
          <h1 className="font-bold text-[#dab2ff] text-center md:text-left px-4">
            {ele.projectTitle}
          </h1>
          <p className="p-2">{ele.projectDescription}</p>
        </div>
      </div>
    </div>
  ))}
</div>

    </>
  );
};
export default Cards;
