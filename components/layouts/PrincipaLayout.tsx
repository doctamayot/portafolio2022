import { FC } from "react";
import Head from "next/head";
import { Footer, Navbar, Principal, Resumen, Sidemenu } from "../ui";

interface Props {
  title: string;
  children: React.ReactNode;
  description: string;
}

export const PrincipaLayout: FC<Props> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
      </Head>

      <nav>
        <Navbar />
      </nav>
      <div id="particles-js"></div>
      <Sidemenu />
      <Principal />
      <Resumen />

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};
