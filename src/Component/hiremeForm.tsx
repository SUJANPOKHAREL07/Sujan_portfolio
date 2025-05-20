import { useForm } from "@formspree/react"


const Hireme=()=>{
 const [hireme,hiresubmit]=useForm("xnndrdzj")
 if(hireme.succeeded){
    alert("message sent")
 }
    return(
        <>
        <form action="" className="flex justify-center  " onSubmit={hiresubmit}>
         <div className="space-y-3 ">
              <div className="space-x-3">
             <label htmlFor="" className="font-bold text-purple-900/80">Name</label> <br />
            <input type="text" name="name" placeholder="Enter your name" className="border w-[16rem]   border-purple-900 rounded-md" required/>
           </div>
            <div className="space-x-4 ">
             <label htmlFor="" className="font-bold text-purple-900/80">Email</label><br />
            <input type="text" name="name" placeholder="Enter your email" className="border w-[16rem]  border-purple-900 rounded-md" required/>
           </div>
           <div className="space-x-3">
             <label htmlFor="" className="font-bold text-purple-900/80">Work</label> <br />
            <input type="text" name="name" placeholder="Work" className="border w-[16rem]   border-purple-900 rounded-md" required/>
           </div>
           <div className="space-x-4">
             <label htmlFor="" className="font-bold text-purple-900/80">Minimum Pay</label><br />
            <input type="number"  placeholder="Enter amount in dollars" name="name" className="border w-[16rem]  border-purple-900 rounded-md" required/>
           </div>
           <div className="space-x-4">
             <label htmlFor="" className="font-bold text-purple-900/80">Maximum Pay</label><br />
            <input type="number" name="name" placeholder="Enter amount in dollars" className="border w-[16rem]  border-purple-900 rounded-md" required/>
           </div> 
            <div className="flex ml-5 justify-center font-bold text-white bg-purple-500 w-[13rem]  rounded-md h-8 border-b-4 border-purple-300 hover:border-purple-300 hover:bg-purple-100 hover:text-purple-500"> <button type="submit" className="">Send</button></div>
          
         </div>
       
        </form>
        </>
    )
}
export default Hireme