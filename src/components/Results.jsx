import { fetchResults } from "@/lib/data";

const Results = async () => {
  const data = await fetchResults();
  return (
    <div>
      <div className="flex flex-wrap justify-center  bg-white p-2 m-2 rounded-lg border-2 border-indigo-300">
        
          {data.users.map((item, index) => (
            // card
            <div key={index} class="flex justify-center items-center py-10">
                <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-1 gap-4 space-y-4 md:space-y-0">
                    <div class="max-w-sm bg-white px-15 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                    <h3 class="mb-3 text-xl font-bold text-indigo-600">{item.company.department}</h3>
                    <div class="relative">
                        <img class="w-full rounded-xl" src={item.image} alt="Colors" />
                        <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">{item.address.city}</p>
                    </div>
                    <h1 class="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">{item.firstName} {item.lastName}</h1>
                    <div class="my-4">
                        <div class="flex space-x-1 items-center">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                        <a href="`mailto:{item.email}`">{item.email}</a>
                        </div>
                        <div class="flex space-x-1 items-center">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </span>
                        <p>{item.phone}</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
          ))}
        
        </div>
           
    
          
     
    </div>
  );
};
export default Results;
