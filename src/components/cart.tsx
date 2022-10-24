import { CartContainer, ImageContainer, ProductContainer, ProductDetails } from "../styles/components/cart";
import { X } from 'phosphor-react';
import { useContext } from "react";
import { PurchaseContext } from "../context/purchase";
import Image from "next/future/image";


interface NavProps {
    show: boolean;
    closeNav: () => void;
}

export const Nav = ({ show, closeNav }: NavProps) => {

    const { cart, total } = useContext(PurchaseContext)

    const handleCloseNav = () => {
        closeNav();
    }

    return (
        <CartContainer transform={show ? 'show' : 'hidden'}>
            <header>
                <h3>Sacola de Compras</h3>
                <button onClick={handleCloseNav}>
                    <X size={20} />
                </button>
            </header>


            {cart.map((product) => (
                <Product key={product.id} {...product} />
            ))}

            <footer>
                <div>
                    <span>Quantidade</span>
                    <span>{cart.length} items</span>
                </div>
                <div>
                    <strong>Valor Total</strong>
                    <strong>{total}</strong>
                </div>
                <button><strong>Finalizar Compra</strong></button>
            </footer>

        </CartContainer>
    )
}

interface ProductProps {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
}

const Product = ({ id, imageUrl, name, price }: ProductProps) => {
    const { removeFromCart } = useContext(PurchaseContext);

    const handleRemoveItem = () => {
        removeFromCart(id)
    }

    return (
        <ProductContainer>
            <ImageContainer>
                <Image src={imageUrl} width={90} height={90} alt="" />
            </ImageContainer>
            <ProductDetails>
                <span>{name}</span>
                <h4>{price}</h4>
                <button onClick={handleRemoveItem}>Remover</button>
            </ProductDetails>

        </ProductContainer>
    )
}