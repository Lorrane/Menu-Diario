import { Link, useParams } from "react-router-dom";
import Card from "../../components/Card";
import Receitas from "../../Models/Receitas";

export default function ListaReceita() {

  const params = useParams();
  const receitas = Receitas();
  const receitasFiltradas = receitas.filter(receita => receita.grupo == params.refId);

  return (
    <>
      {
        receitasFiltradas.map(receita => {
          return (
            <Link to={`${receita.id}`} key={receita.id}>
              <Card prop={receita}  />
            </Link>
          )
        })
      }
    </>);
}
