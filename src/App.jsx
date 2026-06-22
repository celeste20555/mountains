import './App.css'

function App(){
  return(
    
    <>
  <nav>
    <img src="" alt="logo" className="logo" />

    <input
      type="text"
      placeholder="Buscar productos..."
    />

    <div className="iconos">
      <img src="" alt="carrito" />
      <img src="" alt="usuario" />
      <img src="" alt="menu" />
    </div>
  </nav>

  <div className="ofertas">
    <h2>🏷️ Nuestros productos imperdibles al 50% OFF</h2>
  </div>

  <section className="filtros">

    <button className="categoria">
      TODAS LAS CATEGORÍAS
    </button>

    <div className="derecha">

      <select>
        <option>MAS VENDIDOS</option>
      </select>

      <select>
        <option>Todas las categorías</option>
      </select>

      <select>
        <option>Filtrar</option>
      </select>

    </div>

  </section>
</>
    
  )
}
export default App