import Proptypes from 'prop-types'
import '../styles/gifItem.css'

export const GifItem = ({id, title, url}) => {

  const copy = () => {
    //para copiar al portapapeles
    // navigator.clipboard.writeText(url) es una funcion que permite copiar al portapapeles
    // el texto que se le pase como argumento en este caso url
    navigator.clipboard.writeText(url)
    alert('Copiado en el portales')
  };




  return (
    <div className="card">
        <img src={url} alt={title} onClick={copy}/>
        <p>{title}</p>
    </div>
  )
}

GifItem.propTypes = {
  title: Proptypes.string.isRequired,
  url: Proptypes.string.isRequired
}


