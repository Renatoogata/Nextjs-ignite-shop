import { createContext, ReactNode, useEffect, useReducer } from "react";


type ProductType = {
    imageUrl: string;
    name: string;
    price: string;
    id: string;
    description?: string;
    defaultPriceId?: string;
    quantity?: number;
    priceNumberType: number;
};

interface PurchaseContextProps {
    cart: ProductType[];
    total: number;
    addToCart: (product: ProductType) => void;
}

interface PurchaseContextProviderProps {
    children: ReactNode;
}

export const PurchaseContext = createContext({} as PurchaseContextProps);

export const PurchaseProvider = ({
    children,
}: PurchaseContextProviderProps) => {
    const [purchaseState, dispatch] = useReducer(
        (state: any, action: any) => {
            switch (action.type) {
                case 'ADD_TO_CART': {
                    const { cart } = state;

                    const newCart = [...cart, action.payload.product];

                    return {
                        cart: newCart,
                    }
                }

                default:
                    return state;
            }
        },
        {
            cart: [],
        }
    );

    const { cart, total } = purchaseState;

    const addToCart = (product: ProductType) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                product,
            },
        });
    };

    return (
        <PurchaseContext.Provider
            value={{ cart, addToCart, total }}
        >
            {children}
        </PurchaseContext.Provider>
    )
}

