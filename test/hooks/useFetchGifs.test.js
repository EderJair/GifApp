import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas useFetchGifs', () => {

    test('debe de regreasar el estado inicial', () => {

        // renderizamos el hook useFetchGifs con la categoria 'One Punch' y 
        // guardamos el resultado en la constante result
        const { result } = renderHook(() => useFetchGifs('One Punch'))

        // desestructuramos el resultado y guardamos las imagenes y el isLoading
        const { images, isLoading } = result.current

        console.log(images, isLoading)

        // comprobamos que el arreglo de imagenes este vacio y que isLoading sea true
        expect(images.length).toBe(0)
        expect(isLoading).toBe(true)

    })

    test('Debe de retornar un arreglo de imagenes y el isLoading en false', async() => {

        // renderizamos el hook useFetchGifs con la categoria 'One Punch' y
        // guardamos el resultado en la constante result
        const { result } = renderHook(() => useFetchGifs('One Punch'))

        // importamos la función waitFor de @testing-library/react que nos permite esperar
        // a que se resuelva una promesa en este caso, esperamos a que el arreglo de imagenes 
        // tenga una longitud mayor a 0 para continuar con las pruebas
        await waitFor(
            // comprobamos que el arreglo de imagenes tenga una longitud mayor a 0
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        // desestructuramos el resultado y guardamos las imagenes y el isLoading
        const { images, isLoading } = result.current

        // comprobamos que el arreglo de imagenes tenga una longitud de 10 y que isLoading sea false
        expect(images.length).toBe(10)
        expect(isLoading).toBe(false)




    })










})