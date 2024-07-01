import { getGifs } from "../../src/helpers/getGifs"

describe('getGifs', () => {

    test('Debe retornar un arreglo de gifs', async() => {
        //Guardamos en la constante gifs 
        //el resultado de la función getGifs
        const gifs = await getGifs('One Punch')

        //Comprobamos que la longitud del arreglo 
        //gifs sea 10
        expect(gifs.length).toBeGreaterThan(0);
        
        //Comprobamos que el primer elemento del arreglo
        //gifs sea un objeto con las propiedades id, title
        // y url
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    })
})