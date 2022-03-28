import { useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {

  const [refeicao, setRefeicao] = useState([
    {
      titulo: 'cafe',
      nome: 'Café da manhã',
      url: 'https://www.google.com/search?q=caf%C3%A9+da+manh%C3%A3',
      image: 'https://conteudo.imguol.com.br/c/entretenimento/ff/2022/01/12/cafe-da-manha-1642012355257_v2_450x450.jpg'
    },
    {
      titulo: 'brunch',
      nome: 'Brunch',
      url: 'https://www.google.com/search?q=Brunch',
      image: 'https://www.buffetkidskingdom.com.br/wp-content/uploads/2019/10/Brunch-%E2%80%93-O-que-%C3%A9-como-e-quando-fazer.jpg'
    },
    {
      titulo: 'almoco',
      nome: 'Almoço',
      url: 'https://www.google.com/search?q=Almoço',
      image: 'https://diaonline.ig.com.br/wp-content/uploads/2019/11/restaurante-aguas-lindas_capa-e1574963006966-1024x623.jpg'
    },
    {
      titulo: 'lanche',
      nome: 'Lanche',
      url: 'https://www.google.com/search?q=Lanche',
      image: 'https://diaonline.ig.com.br/wp-content/uploads/2019/11/restaurante-aguas-lindas_capa-e1574963006966-1024x623.jpg'
    },
    {
      titulo: 'janta',
      nome: 'Jantar',
      url: 'https://www.google.com/search?q=Jantar',
      image: 'https://diaonline.ig.com.br/wp-content/uploads/2019/11/restaurante-aguas-lindas_capa-e1574963006966-1024x623.jpg'
    },
    {
      titulo: 'ceia',
      nome: 'Ceia',
      url: 'https://www.google.com/search?q=Ceia',
      image: 'https://diaonline.ig.com.br/wp-content/uploads/2019/11/restaurante-aguas-lindas_capa-e1574963006966-1024x623.jpg'
    }
  ])


  return (
    <>
      <h2>Escolha sua Refeição</h2>
      <p>Para ver a lista de receitas e suas variáveis, escolha qual refeição deseja</p>

      <div className='container'>
        {refeicao.map(refeicao => (
          <Card prop={refeicao} key={refeicao.titulo} />
        ))}
      </div>

    </>
  );
}

export default App;
