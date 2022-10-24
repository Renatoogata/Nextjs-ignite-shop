import { styled } from "..";


export const CartContainer = styled('nav', {
    position: 'absolute',
    right: 0, //jogar para direita
    top: 0,
    zIndex: 100, // o carrinho sobrepos o resto da pagina

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

    width: '100%',
    height: '100vh',
    maxWidth: 400,
    padding: 25,

    backgroundColor: '$gray800',
    transition: '0.4s',

    header: {
        marginTop: '2rem',
        marginLeft: '0.5rem',
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

    footer: {
        marginTop: 'auto',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        div: {
            display: 'flex',
            width: '100%',
            height: '100%',
            justifyContent: 'space-between',
            marginBottom: '0.8rem',
        },
        button: {
            border: 0,
            padding: '1rem',
            backgroundColor: '$green300',
            borderRadius: 4,
            color: '$white',
            marginTop: '2.5rem',
            marginBottom: '1rem',
        }
    }
})

export const ProductContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: '0.5rem',
    marginTop: '1rem',
})

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 94,
    height: 94,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0.25rem',
    marginRight: '0.8rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover'
    }
})

export const ProductDetails = styled('div', {
    flexDirection: 'column',
    marginTop: '0.5rem',
    width: '100%',

    h4: {
        marginTop: '0.4rem',
    },

    button: {
        display: 'flex',
        border: 0,
        color: '$green300',
        marginTop: '1rem',
        background: 0,
    }
})