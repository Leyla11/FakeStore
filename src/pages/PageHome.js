import Card from "../components/card";
import productos from "../productos";

const PageHome = () => {

  return (
    <div className="containerCards">

      {productos.map(producto=>(

        <Card key={producto.title} elemento={producto}/>

      ))}

    </div>
  )
}

export default PageHome;