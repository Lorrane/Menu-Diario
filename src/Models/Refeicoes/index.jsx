import { useState } from "react";


function Refeicoes () {

  const [refeicao, setRefeicao] = useState([
    {
      id: 1,
      nome: "Café da manhã",
      url: "/cafe",
      image:
        "https://conteudo.imguol.com.br/c/entretenimento/ff/2022/01/12/cafe-da-manha-1642012355257_v2_450x450.jpg",
    },
    {
      id: 2,
      nome: "Brunch",
      url: "https://www.google.com/search?q=Brunch",
      image:
        "https://www.buffetkidskingdom.com.br/wp-content/uploads/2019/10/Brunch-%E2%80%93-O-que-%C3%A9-como-e-quando-fazer.jpg",
    },
    {
      id: 3,
      nome: "Almoço",
      url: "https://www.google.com/search?q=Almoço",
      image:
        "https://diaonline.ig.com.br/wp-content/uploads/2019/11/restaurante-aguas-lindas_capa-e1574963006966-1024x623.jpg",
    },
    {
      id: 4,
      nome: "Lanche",
      url: "https://www.google.com/search?q=Lanche",
      image:
        "https://diaonline.ig.com.br/wp-content/uploads/2019/11/restaurante-aguas-lindas_capa-e1574963006966-1024x623.jpg",
    },
    {
      id: 5,
      nome: "Jantar",
      url: "https://www.google.com/search?q=Jantar",
      image:
        "https://diaonline.ig.com.br/wp-content/uploads/2019/11/restaurante-aguas-lindas_capa-e1574963006966-1024x623.jpg",
    },
    {
      id: 6,
      nome: "Sobremesa",
      url: "https://www.google.com/search?q=Sobremesa",
      image:
        "https://diaonline.ig.com.br/wp-content/uploads/2019/11/restaurante-aguas-lindas_capa-e1574963006966-1024x623.jpg",
    },
  ]);

  return (
    refeicao
  );

    // return (

    //     <Browser>
    //       <Routes>
    //         <Route path="/cafe" element={<Cafe />} />
    //         {/* <Route path="cafe" element={<Cafe />} />
    //         <Route path="cafe" element={<Cafe />} />
    //         <Route path="cafe" element={<Cafe />} />
    //         <Route path="cafe" element={<Cafe />} />
    //         <Route path="cafe" element={<Cafe />} /> */}
    //       </Routes>
    //     </Browser>
    // )
}

export default Refeicoes;