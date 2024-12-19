import { useEffect, useState } from "react";
import { ContentAdmin } from "../components/ContentAdmin";
import { HeaderAdmin } from "../components/layout/HeaderAdmin";
import { Sidebar } from "../components/Sidebar";
import { RegisteredProducts } from "../components/RegisteredProducts";
import ApiService from "../libs/ApiService"
import "../styles/Admin.css"


export const Admin = () => {
    const [theme, setTheme] = useState('dark')
    const [product, setProduct] = useState(null)
    useEffect(() => {
        user()
    }, [])

    const user = async () => {
        const { data } = await ApiService.get("/product")
        setProduct(data)
        console.log(data);
        
    }
    if (product == null) {
        return <p>cargando....</p>
    }
    return (
        <>
            <div className="cajaAdmin">
                <Sidebar />
                <div className={`app ${theme}`}>
                    <HeaderAdmin setTheme={setTheme} theme={theme} />
                    <h4>Title</h4>
                    <ContentAdmin />
                    <div className="contentUser">
                        {product.map(product => {
                            return <RegisteredProducts product={product} key={product.id}/> 
                        })}
                    </div>
                </div>
            </div>

        </>
    );
};
