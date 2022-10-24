import { AppProps } from "next/app"
import { Tote } from "phosphor-react";
import { globalStyles } from "../styles/global"

import logoImg from '../assets/logo.svg';
import Image from "next/future/image";

import { Cart, Container, Header } from "../styles/pages/app";
import Link from "next/link";
import { useContext, useState } from "react";
import { Nav } from "../components/cart";
import { PurchaseProvider } from "../context/purchase";
import { HeaderNumber } from "../components/headerNumber";

globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  const [showNav, setShowNav] = useState(false);

  const closeNav = () => {
    setShowNav(false);
  }

  const handleOpenNav = () => {
    setShowNav(true);
  }

  return (
    <Container>
      <PurchaseProvider>
        <Header>
          <Link href="/">
            <Image src={logoImg} alt="" />
          </Link>
          <Cart onClick={handleOpenNav}>
            <Tote size={22} />
            <HeaderNumber />
          </Cart>
          <Nav show={showNav} closeNav={closeNav} />
        </Header>

        <Component {...pageProps} />
      </PurchaseProvider>
    </Container>

  )
}

