import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([])

  

  const onAddCategory = (NewCategory) => {
    
    if(categories.includes(NewCategory)) return alert('Ya existe la categoria');
    setCategories([...categories, NewCategory])
  }


  return (
    <>
      <h2>GifExpertApp</h2>

      <AddCategory onNewCategory={onAddCategory}/>



      {
      categories.length === 0 ? 
        <p style={{fontSize: '1.5rem'}}>No hay búsquedas</p> : 
        categories.map((category) => (
        <GifGrid key={category} category={category} />
        
      ))
      }


    </>
  )



}
  