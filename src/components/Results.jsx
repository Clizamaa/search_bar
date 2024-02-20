import { fetchResults } from "@/lib/data"

const Results = async () => {
    const data = await fetchResults()
  return (
    <div>
        <div className="flex justify-center  bg-white p-2 m-2 rounded-lg border-2 border-indigo-300">
            <div className="w-full p-2 m-2 rounded-lg">
                <ul>
                    {data.users.map((user) => {
                        return (
                            <li key={user.id} className="flex justify-between border-b-2 border-indigo-300 p-2 m-2">
                                <div>
                                    <p className="font-bold">{user.firstName}</p>
                                    <p>{user.lastName}</p>
                                </div>
                                <div>
                                    <p> Edad: {user.age}</p>
                                    <p> Correo: {user.email}</p>
                                </div>
                            </li>
                        )
                    })}
                    
                </ul>
            </div>
        </div>
    </div>
  )
}
export default Results