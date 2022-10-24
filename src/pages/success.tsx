import { GetServerSideProps } from "next";
import Link from "next/link";
import { stripe } from "../../lib/stripe";
import Stripe from "stripe";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";
import Image from "next/future/image";
import Head from "next/head";

interface SuccessProps {
    customerName: string;
    products: {
        name: string;
        images: string;
    }[]
}

export default function Success({ customerName, products }: SuccessProps) {
    return (
        <>
            <Head>
                <title>Compra Efetuada | Ignite Shop</title>

                <meta name="robots" content="noindex" />
            </Head>

            <SuccessContainer>
                <h1>Compra Efetuada</h1>


                {products.map((product) => {
                    return (
                        <ImageContainer key={product.name}>
                            <Image src={product.images[0]} width={120} height={110} alt="" />
                        </ImageContainer>
                    )
                })}

                <p>
                    Uhul <strong>{customerName}</strong>, suas compras ja foram efetuadas e estão a caminho de sua casa
                </p>

                <Link href='/'>
                    Voltar ao catálogo
                </Link>
            </SuccessContainer>

        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query, params }) => {
    if (!query.session_id) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    const sessionId = String(query.session_id);

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    })

    const customerName = session.customer_details.name;
    //const product = session.line_items.data[0].price.product as Stripe.Product (para 1 item)
    const products = session.line_items.data.map((product) => {
        return product.price.product as Stripe.Product;
    });


    return {
        props: {
            customerName,
            products,
        }
    }
}