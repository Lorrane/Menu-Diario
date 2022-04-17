import React, { useState } from "react";
import "./styles.css";
import Card from "../../components/Card";

function Receitas() {
  const [receitas, setReceitas] = useState([
    {
      id: 11,
      nome: "Queijo Quente",
      url: "/cafe",
      image:
        "https://conteudo.imguol.com.br/c/entretenimento/ff/2022/01/12/cafe-da-manha-1642012355257_v2_450x450.jpg",
    },
    {
      id: 12,
      nome: "Tapioca",
      url: "/cafe",
      image:
        "https://conteudo.imguol.com.br/c/entretenimento/ff/2022/01/12/cafe-da-manha-1642012355257_v2_450x450.jpg",
    },
    {
      id: 13,
      nome: "Crepioca",
      url: "/cafe",
      image:
        "https://conteudo.imguol.com.br/c/entretenimento/ff/2022/01/12/cafe-da-manha-1642012355257_v2_450x450.jpg",
    },
    {
      id: 14,
      nome: "Salada de Frutas",
      url: "/cafe",
      image:
        "https://conteudo.imguol.com.br/c/entretenimento/ff/2022/01/12/cafe-da-manha-1642012355257_v2_450x450.jpg",
    },
    {
      id: 15,
      nome: "Cuzcuz",
      url: "/cafe",
      image: "https://i.ytimg.com/vi/UYxz8WUXyqw/mqdefault.jpg"
    }
  ]);

  return (
    <>
      {receitas.map((receita) => (
        <Card prop={receita} key={receita.id} />
      ))}
    </>
  );
}

export default Receitas;
