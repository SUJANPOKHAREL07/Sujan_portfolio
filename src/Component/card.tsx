const Cards=()=>{
    const cardElements=[
        {
            key:1,
            projectTitle:"Hartbazar",
            projectDescription:"The real life adaptaion of local market to sell and buy vegetables fresh and convient way",
            projectImg:"public/hartbazar.png"
        },
         {
            key:2,
            projectTitle:"Ghumaari",
            projectDescription:"Hotel booking website with provide hotel owner to list their hotels and attract new tourist",
              projectImg:"public/hartbazar.png"
        }
        ,
         {
            key:3,
            projectTitle:"VutungTung",
            projectDescription:"It's a vehicle rental website where a user can rent the vehiclw he/she want and the owner send theh vehicle to the requested locqation",
            projectImg:"public/hartbazar.png"
        },
    ]
    return(
      
        <>
          <div className=" gap-10 w-fit shadow-2xl grid grid-cols-3 ">
            {
                cardElements.map((ele,key)=>(
            <div  key={key} className="border text-white border-gray-100/80 rounded-2xl hover:bg-zinc-900/60 w-full transistion-color  ">
               <div className="">
               <div className="flex justify-center">
                 <img src={ele.projectImg} alt="project-Image" className="w-[9rem]"/>
               </div>
                <div className="flex justify-center">
                    <h1 className="font-bold">{ele.projectTitle}</h1>
                </div>
                <p className="p-2">{ele.projectDescription}</p>
               </div>
            </div>
                ))
            }
        </div>
        </>
    )
}
 export default Cards