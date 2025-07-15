export default function Abort(){
    return (
        <div className="min-w-ful ">
            <h1 className="text-5xl text-center text-red-700 mb-6 font-Kode_Mono mt-12">Abort</h1>
            <div className="max-md:flex max-md:flex-wrap grid grid-cols-2 mx-auto min-w-full justify-between  space-x-4 space-y-4 ">
            
            <div className="space-y-4 flex flex-col w-full space-x-4 font-Kode_Mono text-white">
                <h1 className="text-center text-2xl  ">Presonal Details</h1>
                <div className="flex space-x-2 text-xl"><h5 className="font-bold text-red-700">Name: </h5><span>Kittinan  Kunnahong</span></div>
                <div className="flex space-x-2 text-xl"><h5 className="font-bold text-red-700">Nick Name: </h5><span>Tii</span></div>
                <div className="flex space-x-2 text-xl"><h5 className="font-bold text-red-700">Born: </h5><span>September 19 2001</span></div>
                <div className="flex space-x-2 text-xl"><h5 className="font-bold text-red-700">Age: </h5><span>23 years</span></div>
                <div className="flex space-x-2 text-xl"><h5 className="font-bold text-red-700">Sex: </h5><span>Male</span></div>
                <div className="flex space-x-2 text-xl"><h5 className="font-bold text-red-700">Marital Status: </h5><span>Single</span></div>
                <div className="flex space-x-2 text-xl"><h5 className="font-bold text-red-700">Nationality: </h5><span>Thai</span></div>
                
            </div>
            <div className="space-y-4 flex flex-col font-Kode_Mono text-white ">
                <h1 className="text-center text-2xl ">Education</h1>
                <h5 className="text-xl">Bachelor of Computer Engineering Khon Kaen University ( 2020 - 2024)</h5>
            </div>
        </div>
        </div>
    )
}