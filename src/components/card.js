


const Card = (props) => {
    return (
      <div className="card">
        <p> ID del producto: {props.elemento.id}</p>
          <h4>Producto: {props.elemento.title}</h4>
          <p>Por el precio de $ {props.elemento.price}</p>
          <p>Caratcterisiticas {props.elemento.description} de estos</p>
          <p>Categoria {props.elemento.category}</p>
          <img src={props.elemento.image} alt="cloth1" />
          <p>Calificacion {props.elemento.rating.rate}</p>
          <p>Piezas adquiridas {props.elemento.rating.count}</p>
      </div>
    )
  }
  
  export default Card