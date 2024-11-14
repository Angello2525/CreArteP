import {useState} from 'react';

const useCart = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
        console.log(`Producto añadido al carrito ${product}`);
    }
    return{ cart, addToCart};
}

export default useCart;