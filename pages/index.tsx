import type { NextPage } from "next";

import {
  Footer,
  Navbar,
  Portafolio,
  Principal,
  Resumen,
  Sidemenu,
  Skills,
} from "../components/ui";

const Home: NextPage = () => {
  return (
    <>
      <div id="particles-js"></div>
      <Navbar />
      <Sidemenu />
      <Principal />
      <Resumen />
      <Skills />
      <Portafolio />
      <Footer />
    </>
  );
};

export default Home;
