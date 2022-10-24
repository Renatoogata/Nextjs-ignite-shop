import { useContext } from "react"
import { PurchaseContext } from "../context/purchase"


export const HeaderNumber = () => {
    const { cart } = useContext(PurchaseContext)

    return (
        <>
            {cart.length > 0 && <span>{cart.length}</span>}
        </>
    )
}