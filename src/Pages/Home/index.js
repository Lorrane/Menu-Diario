import Refeicoes from "../../Models/Refeicoes";
import Card from "../../components/Card";
import { Link } from "react-router-dom";

export default function Home() {

    const refeicao = Refeicoes();

    return (
        <>
            {refeicao.map(refeicao => (
                <Link to={`/refeicao/${refeicao.id}`} key={refeicao.id}>
                    <Card prop={refeicao}  />
                </Link>
            ))}
        </>
    );
}