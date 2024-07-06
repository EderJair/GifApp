import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([])

  

  const onAddCategory = (NewCategory) => {
    
    if(categories.includes(NewCategory)) return alert('Ya existe la categoria');
    setCategories([...categories, NewCategory])
  }

  const handleDelete = (category) => {

    setCategories(categories.filter(cat => cat !== category))

  }


  return (
    <>
      <nav>
        <h1>Apify</h1>
        <a href="https://github.com/EderJair" target="_blank">
           <svg width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
           Jair Quispe
        </a>
      </nav>

      <h2>GifExpertApp 🚀</h2>

      <AddCategory onNewCategory={onAddCategory}/>



      {
      categories.length === 0 ? 
        <p style={{fontSize: '1.5rem'}}>No hay búsquedas 😖</p> : 
        categories.map((category) => (
        <GifGrid handleDelete={handleDelete} key={category} category={category} />
        
      ))
      }


    </>
  )



}
  