import { useModalState } from "@/hooks/use-modal-state"
import { useRoutineContext } from "@/context/routine-context";
import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate,  } from "react-router-dom"

import { getMealsList } from "@/services/http/meal/get-meals-list";

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MealsBasket } from "../_components/meals-basket";
import { When } from "@/components/when"
import { SelectMealsCard } from "../_components/select-meals-card";
import { DefaultInput } from "@/components/default-input";

export const AddNewRoutinePage = () => {

  const { isOpen, toggleModal } = useModalState()

  const navigate = useNavigate()

  const {
    routine,
    onRoutineNameChange,
    onRoutineWaterChange,
    handleCreateRoutine,
    createRoutineStates
  } = useRoutineContext()

  const redirectToSuccess = () => {
    navigate("/my-routines")
  };

  const { data: mealsList } = useQuery({
    queryKey: ["mealsList"],
    queryFn: getMealsList,
  })

  return (
    <div className="h-screen max-h-screen flex flex-col bg-slate-100 px-4 ">
      {createRoutineStates.isPending && (
        <div className="fixed top-0 left-0 h-screen w-screen bg-black/70 flex items-center justify-center">
          <div className="h-40 w-60 bg-white flex items-center justify-center rounded-xl">
            <p className="text-2xl font-semibold">Aguarde...</p>
          </div>
        </div>
      )}
      <header className="relative flex justify-center items-center py-4 text-sky-950">
        <Link to="/my-routines">
          <ArrowLeft size={32} className="absolute top-4 left-0" />
        </Link>
        <h1 className="text-xl font-semibold">Criar uma Rotina</h1>
      </header>
      <main className="h-full flex flex-col items-center gap-4 pb-6 overflow-auto">
        <DefaultInput
          label="Dê um nome a sua rotina"
          placeholder="Dia de carbo alto"
          maxLength={30}
          value={routine.name}
          onChange={({ target }) => onRoutineNameChange(target.value)}
        />
        <DefaultInput
          label="Quantos mililitros de agua você vai beber durante o dia?"
          placeholder="3250"
          maxLength={30}
          value={routine.water}
          onChange={({ target }) => onRoutineWaterChange(target.value)}
        />
        <MealsBasket meals={routine.meals} openCardToSelectMeals={toggleModal} />
        <Button
          type="submit"
          onClick={() => handleCreateRoutine(redirectToSuccess)}
          className="w-full flex gap-2 bg-sky-700 hover:bg-sky-500"
        >
          Criar rotina
        </Button>
      </main>

      <When expr={isOpen}>
        <SelectMealsCard mealsList={mealsList} onClose={toggleModal} />
      </When>
    </div>
  )
}












