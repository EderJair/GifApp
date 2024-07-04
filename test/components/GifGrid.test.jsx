import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

// mockeamos el hook useFetchGifs
jest.mock('../../src/hooks/useFetchGifs')

describe('Preubas en GifGrid', () => {

    const category = 'One Punch'

    test('debe mostrar el loading inicialmente', () => {
        
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true 
        })


        // renderizamos el componente
        render(<GifGrid category={category}/>)

        // comprobamos que se muestre el mensaje de cargando
        expect(screen.getByText('Cargando...'))

        // comprobamos que se muestre el titulo de la categoria
        expect(screen.getByText(category))



    })


    test('Debe de mostrar items cuando se carga las imagenes useFetchGifs', () => {


        // creamos un arreglo de gifs para simular la respuesta de useFetchGifs
        const gifs = [{
            id: 'ABC',
            title: 'Title',
            url: 'https://localhost/image.jpg'
        },
        {
            id: '123',
            title: 'Title21',
            url: 'https://localhost/image.jpg'
        }] 


        // mockeamos el hook useFetchGifs y retornamos un arreglo de gifs y isLoading en true
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true 
        })

        // renderizamos el componente
        render(<GifGrid category={category}/>)

        // comprobamos que el numero de gifs sea igual al numero de gifs que se pasaron
        expect(screen.getAllByRole('img').length).toBe(2)


    })








})