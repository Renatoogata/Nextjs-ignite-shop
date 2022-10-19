import { styled } from "..";

export const HomeContainer = styled('main', {
    display: 'flex',
    //gap: '3rem',
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))', // caulculando a largura da tela e adicionando mais uma das bordas ao valor de width
    marginLeft: 'auto', //jogando a tela para direita (ou seja ele sempre vai pegar a parte central e jogar para direita independente do tamanho da tela)
    minHeight: 656,
});

export const Product = styled('div', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)', //faz efeitio degrade
    borderRadius: 8,
    //padding: '0.25rem',
    cursor: 'pointer',
    position: 'relative', // porque o footer vai ter um position absolute
    overflow: 'hidden', //esconder quando tirar o mouse da imagem da camiseta para que o foorter nao desça para fora do container

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover',
    },

    footer: {
        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',
        padding: '2rem',

        borderRadius: 6,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        backgroundColor: 'rgba(0, 0, 0, 0.6)',

        transform: 'translateY(110%)', //transform, opacity e transition para fazer animação do footer
        opacity: 0,
        transition: 'all 0.2s ease-in-out',

        'strong': {
            fontSize: '$lg',
            color: '$gray100',

        },

        span: {
            fontSize: '$xl',
            fontWheight: 'bold',
            color: '$green300',
        },
    },

    '&:hover': {
        footer: {
            transform: 'translateY(0%)', //animação do footer
            opacity: 1,
        }
    }
})