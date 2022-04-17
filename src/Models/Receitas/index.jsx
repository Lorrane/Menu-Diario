import { useState } from "react";

export default function Receitas() {

  
  const [receitas, setReceitas] = useState([
    {
      id: 11,
      grupo:1,
      nome: "Queijo Quente",
      url: `/cafe/1`,
      image:
        "https://conteudo.imguol.com.br/c/entretenimento/ff/2022/01/12/cafe-da-manha-1642012355257_v2_450x450.jpg",
    },
    {
      id: 12,
      grupo:1,
      nome: "Tapioca",
      url: "/cafe",
      image:
        "https://conteudo.imguol.com.br/c/entretenimento/ff/2022/01/12/cafe-da-manha-1642012355257_v2_450x450.jpg",
    },
    {
      id: 21,
      grupo:2,
      nome: "Crepioca",
      url: "/cafe",
      image:
        "https://conteudo.imguol.com.br/c/entretenimento/ff/2022/01/12/cafe-da-manha-1642012355257_v2_450x450.jpg",
    },
    {
      id: 22,
      grupo:2,
      nome: "Salada de Frutas",
      url: "/cafe",
      image:
        "https://conteudo.imguol.com.br/c/entretenimento/ff/2022/01/12/cafe-da-manha-1642012355257_v2_450x450.jpg",
    },
    {
      id: 31,
      grupo:3,
      nome: "Cuzcuz",
      url: "/cafe",
      image: "https://i.ytimg.com/vi/UYxz8WUXyqw/mqdefault.jpg",
    },
  ]);

  return receitas

  
}
