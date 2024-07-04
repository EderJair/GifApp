import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp01"

describe('Pruebas en GifExpertApp', () => {

    test('Debe de salir no hay busquedas si no se ha buscado aun ', () => {

        render(<GifExpertApp/>)
        screen.debug()

        expect(screen.getByText('No hay búsquedas')).toBeTruthy()
        
    })










})