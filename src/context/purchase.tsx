import { createContext, ReactNode, useEffect, useReducer, useState } from "react";

import axios from 'axios';

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
    removeFromCart: (id: string) => void;
    cartCheckout: () => void;
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

                case 'REMOVE_FROM_CART': {
                    const { cart } = state;

                    const newCart = cart.filter((product: ProductType) => {
                        return product.id !== action.payload.id;
                    });

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

    const removeFromCart = (id: string) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: {
                id,
            }
        })
    }

    const cartCheckout = async () => {
        const pricesId = cart.map((product: ProductType) => {
            return {
                price: product.defaultPriceId,
                quantity: product.quantity,
            }
        })

        try {
            const response = await axios.post('/api/checkout', {
                priceId: pricesId,
            });
            const { checkoutUrl } = response.data

            window.location.href = checkoutUrl
        } catch (error) {
            alert(error.error)
        }

    }

    return (
        <PurchaseContext.Provider
            value={{ cart, addToCart, total, removeFromCart, cartCheckout }}
        >
            {children}
        </PurchaseContext.Provider>
    )
}

