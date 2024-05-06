import MealItem from "./meal-item";

const MealsList = () => {
  const foodsList = [
    {
      id: "1",
      image: "/assets/strawberry.jpg",
      name: "Arroz",
      portion: 100,
      nutrients: {
        carbo: 22.5,
        protein: 2,
        fat: 0.25,
      },
    },
    {
      id: "2",
      image: "/assets/apple.jpg",
      name: "Feijão",
      portion: 100,
      nutrients: {
        carbo: 10,
        protein: 3.5,
        fat: 0.5,
      },
    },
    {
      id: "3",
      image: "/assets/banana.jpg",
      name: "Frango Grelhado",
      portion: 100,
      nutrients: {
        carbo: 0,
        protein: 25,
        fat: 3.6,
      },
    },
    {
      id: "4",
      image: "/assets/strawberry.jpg",
      name: "Batata Doce",
      portion: 100,
      nutrients: {
        carbo: 18.5,
        protein: 1,
        fat: 0.1,
      },
    },
    {
      id: "5",
      image: "/assets/apple.jpg",
      name: "Banana",
      portion: 100,
      nutrients: {
        carbo: 22,
        protein: 1.1,
        fat: 0.3,
      },
    },
    {
      id: "6",
      image: "/assets/banana.jpg",
      name: "Maçã",
      portion: 100,
      nutrients: {
        carbo: 14,
        protein: 0.3,
        fat: 0.2,
      },
    },
    {
      id: "7",
      image: "/assets/strawberry.jpg",
      name: "Morango",
      portion: 100,
      nutrients: {
        carbo: 22.5,
        protein: 12.3,
        fat: 20.5,
      },
    },
  ];

  const mealsList = [
    {
      id: "1",
      foods: [...foodsList],
      time: { hour: "08", minute: "00" },
    },
    {
      id: "2",
      foods: [...foodsList],
      time: { hour: "12", minute: "30" },
    },
    {
      id: "3",
      foods: [...foodsList],
      time: { hour: "17", minute: "00" },
    },
    {
      id: "4",
      foods: [...foodsList],
      time: { hour: "20", minute: "00" },
    },
    {
      id: "5",
      foods: [...foodsList],
      time: { hour: "22", minute: "00" },
    },
  ];

  return (
    <ul className="w-full flex flex-col gap-6">
      {mealsList.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default MealsList;
