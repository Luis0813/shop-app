import { useEffect, useState } from "react";
import "../styles/AdminView.css"
import ApiService from "../libs/ApiService";
import { useNavigate } from "react-router-dom";
const ContentAdmin = () => {
  const [products, setProduct] = useState(null)
  useEffect(() => {
    fetchProducts();
  }, []);

  const navigate = useNavigate()

  const cambiarRuta = (ruta) => {
    navigate(ruta)
  }


  const fetchProducts = async () => {
    const { data } = await ApiService.get("/product");
    setProduct(data);
    console.log(data);
  };
  const deleteProduct = async (id)=>{
    try {
      const response = await ApiService.delete(`/product/${id}`)
       fetchProducts()
    } catch (error) {
        console.log(error);
        
    }
  }

  if (products == null) {
    return <p>cargando ...</p>
  }
  return (
    <>
      <div className="dashboard-container">
        <aside className="sidebar">
          <h2>Admin.</h2>
          <ul>
            <li>Dashboard</li>
            <li>Chat</li>
            <li>Email</li>
            <li>Productos</li>
            <ul>
              <li onClick={() => cambiarRuta('/adminCreated')}>Crear</li>
              <li>Actualizar</li>
            </ul>
            <li>Configuración</li>
          </ul>
        </aside>

        <main className="contentAdmin">
          <header>
            <h1>Productos</h1>
            <div className="stats">
              <div>Total Productos: {products.length}</div>
              <div>Pendientes: {products.filter(p => p.status === 'Agotado').length}</div>
            </div>
          </header>

          <section className="table-section">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>precio</th>
                  <th>descuento</th>
                  <th>Creado</th>
                  <th>Actualizado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.discount_price}%</td>
                    <td>{product.created_at}</td>
                    <td>{product.updated_at}</td>
                    <td>
                      <button>Editar</button>
                      <button onClick={()=>deleteProduct(product.id)}>Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>

    </>
  )
};

export default ContentAdmin;
