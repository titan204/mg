
import { useNavigate } from "react-router-dom"

export default function Win({ time, moves , reset}) {
    const navigate = useNavigate()
    return (
        <div className="cover top-0 left-0 h-full w-full bg-stone-900/25 absolute flex justify-center items-center  ">
            <div className="w-4/5 h-3/4 backdrop-blur-lg rounded-xl border-stone-100 border-2 flex flex-col items-center  sm:w-1/2 sm:p-5  lg:w-[500px] lg:p-10 2xl:w-[500px] ">
                <p className="text-[150px] ">🏆</p>
                <p className="text-2xl text-center font-black text-indigo-950 my-5" >AMAZING! YOU'ARE A MEMORY MASTER</p>
                <div className="w-1/2 h-1 bg-indigo-950 rounded-xl my-5 lg:"></div>
                <div className="flex w-full px-7">
                    <div className="text-center mr-auto text-lg font-bold">
                        <p className="">FINAL TIME </p>
                        {time} s
                    </div>
                    <div className="text-center  text-lg font-bold">
                        <p className="">TOTAL MOVES</p>
                        {moves} 
                    </div>

                </div>
                <div className="flex justify-evenly items-center w-full p-5">
                    <button className="mr-auto p-2  bg-cyan-300  m-1 rounded-xl inset-xl text-stone-100  font-bold" onClick={()=>{reset()}}>🔄 PLAY AGAIN</button>
                    <button className="    p-2 bg-violet-500 m-1 rounded-xl inset-xl text-stone-100  font-bold" onClick={()=>{ navigate("/")}}>🏠 MAIN MENU</button>
                </div>
            </div>
        </div>
    )
}