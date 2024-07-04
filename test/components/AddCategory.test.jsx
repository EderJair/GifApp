import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"



describe('AddCategory', () => {

    test('debe de cambiar el valor de la caja de texto', () => {

        // renderizamos el componente
        render(<AddCategory  onNewCategory={() => {}} />)

        // obtenemos el input
        const input = screen.getByRole('textbox')

        // simulamos el cambio en el input
        fireEvent.change(input, {target: {value: 'Hola Mundo'}})
        
        // comprobamos que el valor del input sea 'Hola Mundo'
        expect(input.value).toBe('Hola Mundo')        
    })

    test('debe de llamar onNewCategory si el input tiene un valor', () => {

        const InputValue = 'Hola Mundo'
        const onNewCategory = jest.fn()

        render(<AddCategory onNewCategory={onNewCategory} />)

        // obtenemos el input
        const input = screen.getByRole('textbox')
        // obtenemos el formulario
        const form = screen.getByRole('form')

        // simulamos el cambio en el input
        fireEvent.change(input, {target: {value: InputValue}})
        // simulamos el submit del formulario
        fireEvent.submit(form)

        // comprobamos que el onNewCategory se haya llamado
        // con el valor del input
        expect(input.value).toBe('')

        // comprobamos que el onNewCategory se haya llamado
        expect(onNewCategory).toHaveBeenCalled()
        expect(onNewCategory).toHaveBeenCalledTimes(1)

        // comprobamos que el onNewCategory se haya llamado 
        // con el valor del input  
        expect(onNewCategory).toHaveBeenCalledWith(InputValue)

    })

    test('No debe de llamr el onNewCategory si el input esta vacio', () => {

        const onNewCategory = jest.fn()

        render(<AddCategory onNewCategory={onNewCategory} />)

        // obtenemos el formulario
        const form = screen.getByRole('form')

        // simulamos el cambio en el input 
        fireEvent.submit(form)

        // comprobamos que el onNewCategory no se haya llamado
        expect(onNewCategory).toHaveBeenCalledTimes(0)


    })



})