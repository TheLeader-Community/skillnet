import { Brain } from "lucide-react";

export default function Logo() {
    return (
        <div className=" flex items-center gap-1">
            <Brain color="blue"></Brain>
            <h1 className=' font-extrabold text-xl lg:text-2xl '>
                <sup className=" text-3xl text-blue-500">.</sup>
                <span className=' text-blue-500'>SKILL</span>
                NET
                <span className=' text-blue-500'>.</span>
            </h1>
        </div>
    )
}
