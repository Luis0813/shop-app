import  { useState } from "react";
import ApiService from "../libs/ApiService";

export const AdminCreated = () => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: 0,
        discount_price: 0,
    });
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Paso 1: Crear el producto
            const { data: product } = await ApiService.post("/product", formData);

            // Paso 2: Adjuntar la imagen al producto creado (si hay una)
            if (image) {
                const imageData = new FormData();
                imageData.append("image", image);

                await ApiService.post(`/products/${product.id}/product_images`, imageData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
            }

            alert("Producto creado correctamente con su imagen.");
            setFormData({
                name: "",
                description: "",
                price: 0,
                discount_price: 0,
            });
            setImage(null);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="form-container">
            <h2>Crear Producto</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nombre del producto"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Precio</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Precio del producto"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="discount_price">Descuento (%)</label>
                    <input
                        type="number"
                        id="discount_price"
                        name="discount_price"
                        value={formData.discount_price}
                        onChange={handleChange}
                        placeholder="Descuento (opcional)"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Descripción</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Descripción del producto"
                        required
                    />
                </div>
                <div className="form-group custom-file">
                    <label htmlFor="imageAtach">Seleccionar Imagen</label>
                    <input
                        type="file"
                        id="imageAtach"
                        name="imageAtach"
                        accept="image/*"
                        onChange={handleImageChange}
                        hidden
                    />
                    <button type="button" className="custom-file-button" onClick={() => document.getElementById('imageAtach').click()}>
                         {isLoading ? "Cargando..." : "Crear Producto"}
                    </button>
                </div>

                <button type="submit" className="custom-file-button" disabled={isLoading}>
                </button>
            </form>
        </div>
    );
};

export default AdminCreated;

