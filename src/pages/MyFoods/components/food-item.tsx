import MacronutrientsBadge from "./macronutrient-badges";

interface FoodItemProps {
  food: Food
}

const FoodItem = ({ food }: FoodItemProps) => {
  const { image, name, portion, nutrients } = food;

  return (
    <li className="relative w-full flex gap-3 p-2 bg-white rounded-lg shadow-lg">
      <img
        className="w-20 h-20 object-cover rounded-md shadow-xl"
        src={image}
        alt="food"
      />
      <div className="w-full flex flex-col justify-between">
        <h2 className="font-semibold text-gray-800">{name}</h2>
        <MacronutrientsBadge nutrients={nutrients} />
      </div>

      <p className="absolute top-2 right-2 px-1 font-medium text-white bg-sky-800 rounded-sm ">{`${portion}g`}</p>
    </li>
  );
};

export default FoodItem;
