import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {
    
    const [InputValue, setInputValue] = useState('')

    const handleInputChange = ({target}) => {
       setInputValue(target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(InputValue.trim().length <= 1) return; 
        onNewCategory( InputValue.trim() )
        setInputValue('')
    }
    

    return (
        <form onSubmit={onSubmit}>
            <input 
            type="text"
            placeholder="Find your gif"
            value={InputValue}
            onChange={handleInputChange}
            />
        </form>
        
    )
}
