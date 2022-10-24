import { styled } from "..";

export const Container = styled('div', {
    display: "flex",
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '100vh', //ocupar a tela inteira
})

export const Header = styled('header', {
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto', //para centralizar
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})

export const Cart = styled('div', {
    backgroundColor: '$gray800',
    borderRadius: 4,
    padding: '0.6rem',
    display: 'flex',
    justifyContent: 'center',

    '&:hover': {
        opacity: 0.6
    },

    span: {
        position: 'absolute',
        marginTop: '-1rem',
        marginLeft: '2rem',
        borderRadius: '50%',
        border: '2px solid $gray900',
        backgroundColor: '$green500',
        padding: 5,
        lineHeight: 0.5,
        fontSize: 'small',
    },
})