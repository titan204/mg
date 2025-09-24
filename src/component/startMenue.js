import { useContext } from "react"
import { context } from "../context/defficulty"
import { useNavigate } from "react-router-dom"

export default function Start() {
    const [def , setdef] = useContext(context)
    const navigate = useNavigate()
    return (
        <div className="text-center p-5 backdrop-blur-md bg-white/30 w-10/12 rounded-3xl shadow-xl lg:w-1/2 2xl:w-[700px]" >
            <p className='self-start m-10 text-2xl font-bold font-sans mx-auto'>READY TO CHALLENGE YOUR MEMORY ?</p>
            <p className="m-6 text-lg "> select the difficulty</p>

            <div className='grid w-full '>
                <button className="p-4 text-lg bg-green-400 w-2/3 mx-auto rounded-3xl my-2 text-blue-50 align-middle " onClick={() => { setdef(12); navigate("/game") }}>easy 🙂</button>
                <button className="p-4 text-lg bg-orange-500 w-2/3 mx-auto rounded-3xl my-2 text-blue-50 align-middle " onClick={() => { setdef(18) ;navigate("/game") }}>mediam 😐</button>
                <button className="p-4 text-lg bg-red-600 w-2/3 mx-auto rounded-3xl my-2 text-blue-50 align-middle " onClick={() => { setdef(28) ; navigate("/game") }}>hard 🙁</button>
                <button className="p-4 text-lg bg-slate-900 w-2/3 mx-auto rounded-3xl my-2 text-blue-50 align-middle " onClick={() => { setdef(36) ; navigate("/game") }}>very hard💣</button>
            </div>
            
        </div >
    )
}