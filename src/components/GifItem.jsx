import Proptypes from 'prop-types'

export const GifItem = ({id, title, url}) => {
  return (
    <div className="card">
        <img src={url} alt={title}/>
        <p>{title}</p>
    </div>
  )
}

GifItem.propTypes = {
  title: Proptypes.string.isRequired,
  url: Proptypes.string.isRequired
}


