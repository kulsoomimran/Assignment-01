export default function Loading(){
    return(
        <div className="flex flex-col items-center justify-center h-screen bg-slate-400">
           <div className="flex flex-col items-center space-y-4">
           <h1 className="text-3xl text-white font-bold animate-pulse">Loading...</h1>
           <p>Please wait, this might take a while</p>
           </div>
        </div>
    )
}