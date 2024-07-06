import Proptypes from 'prop-types'

export const GifItem = ({id, title, url}) => {

  const copy = () => {
    navigator.clipboard.writeText(url)
    alert('Copiado en el portales')
  };




  return (
    <div className="card">
        <img src={url} alt={title} onClick={copy} loading='lazy'/>
        <p>{title}</p>
    </div>
  )
}

GifItem.propTypes = {
  title: Proptypes.string.isRequired,
  url: Proptypes.string.isRequired
}


