
import React from 'react'
const MealsContext = React.createContext()
const todayMeals = ['baked beans','baked sweet potatos','baked potatos']
const MealsProviders = ({children}) => {
    const [meals, setMeaList] = React.useState(todayMeals)
    return (
    <MealsContext.Provider value={meals}>
       {children}
    </MealsContext.Provider>
  )
}
export const useMealsListContext =()=>React.useContext(MealsContext)
export default MealsProviders


