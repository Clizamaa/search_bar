import Results from "@/components/Results";
import { FcSearch } from "react-icons/fc";

export default function Home() {
  return (
    <div className="container mx-auto min-h-screen bg-white">
        <h1 className="text-4xl font-bold text-center">Búsqueda</h1>
          <div className="relative flex justify-center">
            <FcSearch className="absolute top-0 left-0 text-3xl m-4" />
            <input type="text" className="border-2 rounded-lg border-indigo-300 p-2 m-2 w-full pl-10" placeholder="Buscar" />
          </div>
        {/* cuadro de resultado */}
        <div>
            <Results />    
        </div>
    </div>
  );
}


