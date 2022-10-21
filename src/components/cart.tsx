import { CartContainer } from "../styles/components/cart";
import { X } from 'phosphor-react'

interface NavProps {
    show: boolean;
    closeNav: () => void;
}

export const Nav = ({ show, closeNav }: NavProps) => {

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
        </CartContainer>
    )
}