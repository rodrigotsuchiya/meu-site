import { Gallery4, Gallery4Props } from "@/components/ui/gallery4"

const demoData: Gallery4Props = {
  title: "Projetos em Destaque",
  description:
    "Explore como a Tsuchiya Tech utiliza engenharia de software de ponta e automação inteligente para transformar visões em realidade digital. Cada projeto é uma solução sob medida focada em performance e impacto.",
  items: [
    {
      id: "trono-de-davi",
      title: "Comunidade Cristã Trono de Davi",
      description:
        "Desenvolvimento de ecossistema digital completo com foco em evangelização, formação teológica e gestão de comunidade. Uma plataforma moderna que une tradição e tecnologia.",
      href: "https://www.tronodedavi.com.br/",
      image:
        "/trono_de_davi.png",
    },
  ],
};

function Gallery4Demo() {
  return <Gallery4 {...demoData} />;
}

export { Gallery4Demo };
