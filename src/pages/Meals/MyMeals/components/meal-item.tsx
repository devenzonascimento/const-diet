import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToggleState } from "@/hooks/useToggleState";

import { getFoodsFromMeal } from "@/services/http/food/get-foods-from-meal";
import { deleteMeal } from "@/services/http/meal/delete-meal";
import { calculateTotalCalories } from "@/functions/calculate-total-calories";

import { ChevronButton } from "./chevron-button";
import { CaloriesBadge } from "@/components/calories-badge";
import { MealDescription } from "./meal-description";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DeleteButton } from "./delete-button";

import { Meal } from "@/types/types";

interface MealItemProps {
  meal: Meal;
}

export const MealItem = ({ meal }: MealItemProps) => {

  const { booleanExp, toggleBooleanExp } = useToggleState();
  
  const queryClient = useQueryClient()

  const { data: foods } = useQuery({
    queryKey: [`foodsFromMeal-${meal.id}`],
    queryFn: () => getFoodsFromMeal(meal.id),
  })

  const { mutateAsync: deleteMealFn } = useMutation({
    mutationFn: deleteMeal,
    onSuccess() {
      queryClient.setQueryData(
        ["mealsList"],
        (data: Meal[]) => data.filter((mealItem) => (mealItem.id !== meal.id))
      )
    },
  })

  return (
    <li
      className="w-full flex flex-col gap-2 bg-white rounded-xl shadow-xl border-4 border-sky-700"
    >
      <div className=" w-full flex gap-2 items-center py-2 px-1" onClick={toggleBooleanExp}>
        <ChevronButton isOpen={booleanExp} />
        <h2 className=" w-full text-lg font-semibold text-sky-700">
          {meal.name}
        </h2>
        <CaloriesBadge calories={calculateTotalCalories(foods)} />
      </div>

      <div
        style={{ display: booleanExp ? "flex" : "none" }}
        className="flex flex-col gap-2 p-4 border-t-2 border-gray-300"
      >
        <MealDescription foods={foods} />

        <Button className="w-full bg-white text-sky-700 border-2 border-sky-700">
          Ver mais detalhes
        </Button>

        <div className="grid grid-cols-2 gap-2">
          <Link to={`/edit-meal/${meal.id}`}>
            <Button className="w-full bg-sky-700 hover:bg-sky-500" >
              Editar refeição
            </Button>
          </Link>
          <DeleteButton onDelete={() => deleteMealFn(meal.id)} />
        </div>
      </div>
    </li>
  );
};


