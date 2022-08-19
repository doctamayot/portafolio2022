export interface IProject {
  title: String;
  image: String;
  slug: string;
  tags: string[];
  description: string;
  clase: "Producción" | "Estudio";
  web: string;
}
