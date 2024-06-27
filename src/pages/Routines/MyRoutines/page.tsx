import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"

import { getRoutinesList } from "@/services/http/routine/get-routine-list"

import { ArrowLeft, CirclePlus } from "lucide-react"
import { List } from "@/components/list"

export const MyRoutinesPage = () => {

  const { data: routinesList, isError } = useQuery({
    queryKey: ["routinesList"],
    queryFn: getRoutinesList,
    refetchOnMount: false,
  })

  if (isError || !routinesList) {
    return <div>Erro ao carregar rotinas</div>
  }

  return (
    <div className="h-screen bg-slate-100 px-4">
      <header className="relative flex justify-center items-center py-4 text-sky-950">
        <Link to="/">
          <ArrowLeft size={32} className="absolute top-4 left-0" />
        </Link>
        <h1 className="text-xl font-semibold">Minhas rotinas</h1>
        <Link to="/add-new-routine">
          <CirclePlus size={32} className="absolute top-4 right-0" />
        </Link>
      </header>
      <main className="flex flex-col justify-between items-center gap-4 pb-6">
        <List
          data={routinesList}
          renderItem={({ item }) => <div key={item.id}>{item.name}</div>}
        />
      </main>
    </div>
  )
}