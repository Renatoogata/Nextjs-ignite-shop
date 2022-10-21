import { styled } from "..";


export const CartContainer = styled('nav', {
    position: 'absolute',
    right: 0, //jogar para direita
    top: 0,
    zIndex: 100, // o carrinho sobrepos o resto da pagina

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    width: '100%',
    height: '100vh',
    maxWidth: 400,
    padding: 25,

    backgroundColor: '$gray800',
    transition: '0.4s',

    header: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        button: {
            lineHeight: 0,
            border: 0,
            backgroundColor: '$gray800',
            color: '$white',
        },
    },

    variants: {
        transform: {
            hidden: {
                transform: 'translateX(110%)',
            },
            show: {
                transform: 'translateX(0%)',
            },
        },
    },


})