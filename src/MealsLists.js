import { useMealsListContext } from "./MealsProviders"


const MealsLists = () => {
  const {meals} = useMealsListContext()
  return (
    <div>
        <h1>Meals list using context API</h1>
        {meals.map((meal, index)=> (
            <h2 key={index}>{}meal</h2>
        ))}
    </div>
  )
}

export default MealsLists