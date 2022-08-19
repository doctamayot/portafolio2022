import type { NextPage } from "next";

import { PrincipaLayout } from "../components/layouts";

import { Portafolio, Principal, Resumen, Skills } from "../components/ui";

const Home: NextPage = () => {
  //

  return (
    <PrincipaLayout
      title="Hugo Tamayo - Web Developer"
      description="Desarrollador Web Stack Mern"
    >
      <Skills />
      <Portafolio project={[]} />
      {/* <Footer /> */}
    </PrincipaLayout>
  );
};

export default Home;
