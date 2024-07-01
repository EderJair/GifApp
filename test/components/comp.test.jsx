import { render, screen } from '@testing-library/react'
import {GifItem} from '../../src/components/GifItem'

describe('GifItem', () => {

  const title = 'Title'
  const url = "https://localhost/image.jpg"
  
  test('Debe coincidir el snapshot', () => {
      
    const { container } = render(<GifItem title={title} url={url} />)
    expect( container ).toMatchSnapshot()
  
  })

  test('mostrar imagen con el url y el alt indicado', () => {
    render(<GifItem title={title} url={url} />)
    screen.debug()
    const {src, alt} = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)
  })

  test('debe de mostrar el titulo en el componente', () => {
    render(<GifItem title={title} url={url} />)
    expect(screen.getByAltText(title)).toBeTruthy()
  })

})