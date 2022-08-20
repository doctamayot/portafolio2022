import bcrypt from "bcryptjs";

interface SeedTecnology {
  title: String;
  images: String;
  slug: string;
  tags: string[];
  description: string;
  clase: "frontend" | "backend" | "servicios";
}

interface SeedProject {
  title: String;
  image: String;
  slug: string;
  tags: string[];
  description: string;
  clase: "producción" | "estudio";
  web: String;
}

interface SeedUser {
  name: string;
  email: string;
  password: string;
  role: "admin" | "visitante";
}

interface SeedData {
  users: SeedUser[];
  tecnologies: SeedTecnology[];
  projects: SeedProject[];
}

export const initialData: SeedData = {
  users: [
    {
      name: "Hugo tamayo",
      email: "doctamayot@hotmail.com",
      password: bcrypt.hashSync("calimenio", 10),
      role: "admin",
    },
    {
      name: "Pipe tamayo",
      email: "doctamayot@gmail.com",
      password: bcrypt.hashSync("calimenio", 10),
      role: "visitante",
    },
  ],
  tecnologies: [
    {
      title: "React",
      images: "reactjs.png",
      slug: "react",
      tags: ["react", "reactjs"],
      description: "Skills en react js, hooks , etc",
      clase: "frontend",
    },
    {
      title: "Node",
      images: "nodejs.webp",
      slug: "Node",
      tags: ["Node", "nodejs"],
      description: "Skills en Node js, hooks , etc",
      clase: "backend",
    },
    {
      title: "firebase",
      images: "firebase.png",
      slug: "firebase",
      tags: ["Node", "nodejs"],
      description: "Skills en Node js, hooks , etc",
      clase: "servicios",
    },
    {
      title: "next",
      images: "nextjs.png",
      slug: "next",
      tags: ["react", "reactjs"],
      description: "Skills en react js, hooks , etc",
      clase: "frontend",
    },
    {
      title: "express",
      images: "express.webp",
      slug: "express",
      tags: ["Node", "nodejs"],
      description: "Skills en Node js, hooks , etc",
      clase: "backend",
    },
    {
      title: "github",
      images: "github.jpg",
      slug: "github",
      tags: ["Node", "nodejs"],
      description: "Skills en Node js, hooks , etc",
      clase: "servicios",
    },

    {
      title: "javascript",
      images: "javascript.png",
      slug: "javascript",
      tags: ["react", "reactjs"],
      description: "Skills en react js, hooks , etc",
      clase: "frontend",
    },

    {
      title: "mongo",
      images: "mongo.png",
      slug: "mongo",
      tags: ["Node", "nodejs"],
      description: "Skills en Node js, hooks , etc",
      clase: "backend",
    },

    {
      title: "aws",
      images: "aws.jpg",
      slug: "aws",
      tags: ["Node", "nodejs"],
      description: "Skills en Node js, hooks , etc",
      clase: "servicios",
    },

    {
      title: "mui",
      images: "mui.png",
      slug: "mui",
      tags: ["react", "reactjs"],
      description: "Skills en react js, hooks , etc",
      clase: "frontend",
    },

    {
      title: "mongoose",
      images: "mongoose.jpg",
      slug: "mongoose",
      tags: ["Node", "nodejs"],
      description: "Skills en Node js, hooks , etc",
      clase: "backend",
    },
    {
      title: "cloudinary",
      images: "cloudinary.jpg",
      slug: "cloudinary",
      tags: ["Node", "nodejs"],
      description: "Skills en Node js, hooks , etc",
      clase: "servicios",
    },

    {
      title: "bootstrap",
      images: "bootstrap.png",
      slug: "bootstrap",
      tags: ["react", "reactjs"],
      description: "Skills en react js, hooks , etc",
      clase: "frontend",
    },

    {
      title: "vercel",
      images: "vercel.jpg",
      slug: "vercel",
      tags: ["Node", "nodejs"],
      description: "Skills en Node js, hooks , etc",
      clase: "servicios",
    },

    {
      title: "ant",
      images: "ant.png",
      slug: "ant",
      tags: ["react", "reactjs"],
      description: "Skills en react js, hooks , etc",
      clase: "frontend",
    },
    {
      title: "netlify",
      images: "netlify.webp",
      slug: "netlify",
      tags: ["Node", "nodejs"],
      description: "Skills en Node js, hooks , etc",
      clase: "servicios",
    },

    {
      title: "tail",
      images: "tailwind.png",
      slug: "tail",
      tags: ["react", "reactjs"],
      description: "Skills en react js, hooks , etc",
      clase: "frontend",
    },

    {
      title: "heroku",
      images: "heroku.png",
      slug: "heroku",
      tags: ["Node", "nodejs"],
      description: "Skills en Node js, hooks , etc",
      clase: "servicios",
    },
  ],

  projects: [
    {
      title: "Universal Casting",
      image: "universal.png",
      slug: "universal-casting",
      tags: ["NextJS", "MUI", "Sass", "MongoDB", "Formik", "Sendgrid"],
      description:
        "Plataforma Ecommerce para empresa de casting de television en Miami",
      clase: "producción",
      web: "www.universalacting.com",
    },
    {
      title: "Reconciliemos Colombia",
      image: "recon.png",
      slug: "reconciliemos-colombia",
      tags: ["NodeJs", "Reactjs", "Redux", "Antd", "Firebase"],
      description:
        "Plataforma de gestión para centro de conciliación en Bogotá",
      clase: "producción",
      web: "www.reconciliemoscolombia.com",
    },
    {
      title: "Lex & Law",
      image: "lex.png",
      slug: "lex&law",
      tags: ["Javascript", "Html", "Bootstrap", "CSS"],
      description: "Pagina web empresa de abogados en Bogotá",
      clase: "producción",
      web: "www.lexnlaw.com",
    },
    {
      title: "Portafolio Hugo Tamayo",
      image: "hugo.png",
      slug: "hugo-tamayo",
      tags: ["NextJS", "MongoDB", "MUI", "React-Hook-Forms", "SWR", "Sass"],
      description: "Mi portafolio Web",
      clase: "producción",
      web: "www.hugotamayo.com",
    },
  ],
};
