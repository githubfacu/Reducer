import PaletaColores from "./components/PaletaColores"
import { useColor } from "./hooks/useColor"
import Fuentes from "./components/Fuentes";

function App() {

  const { cambiarBgColor, cambiarColor, cambiarFuente, propiedades } = useColor()
  

  return (
    <div className="flex flex-col items-center justify-start w-full bg-stone-500 min-h-screen">
      <h1 className="m-4 mt-12 text-neutral-100">Reducer</h1>
      <PaletaColores cambiarBgColor={cambiarBgColor} cambiarColor={cambiarColor}/>

      <article className="flex mt-8 gap-2">
        <Fuentes cambiarFuente={cambiarFuente}/>
        <p 
          style={{fontFamily: `${propiedades.fuente}`, backgroundColor: `${propiedades.bgColor}`, color: `${propiedades.color}`}} 
          className="max-w-80 min-h-64 text-center rounded-sm p-4 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maxime illo consectetur perferendis, ab doloremque qui nihil esse repudiandae delectus eius corrupti ipsum sequi laudantium obcaecati nemo deleniti beatae eum!</p>
      </article>
      
    </div>
  )
}

export default App