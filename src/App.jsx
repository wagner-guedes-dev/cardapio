import React, { useState } from 'react';
import './App.css';

import logo from './img/logo.png';
import arcade from './img/arcade.png';
import ps5 from './img/ps5.png';
import corrida from './img/corrida.png';
import xbox from './img/xbox.png';
import tabuleiro from './img/tabuleiro.png';

import jupter from './img/jupter.png';
import astro from './img/astro.png';
import planet from './img/planet.png';
import estrela from './img/estrela.png';
import nebulosa from './img/nebulosa.png';
import bigbang from './img/bigbang.png';

function App() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);
  const [acrescimosHamburguer, setAcrescimosHamburguer] = useState('');
  const [ingredientesAcai, setIngredientesAcai] = useState('');

  const categorias = ['Mais Pedidos', 'Jogos', 'Hamburgueres', 'Porções', 'Açai', 'Drinks', 'Café Gelado', 'Bebidas'];

  const handleSelecionarCategoria = (index) => {
    setCategoriaSelecionada(index);
  };

  const itensDoCardapio = {
    'Mais Pedidos': [
      { nome: 'item 1', foto: "", descricao: 'Descrição do Item 1', valor: 10.00 },
      { nome: 'Item 2', foto: '', descricao: 'Descrição do Item 2', valor: 12.00 },
      { nome: 'Item 3', foto: '', descricao: 'Descrição do Item 3', valor: 8.00 },
    ],
    'Jogos': [
      { nome: 'Arcade', foto: arcade, valor1:`30min: 10,00$`, valor2:"1hora: 15,00$" },
      { nome: 'Playstation', foto: ps5,  valor1: "30min: 15,00$", valor2: "1hora: 25,00" },
      { nome: 'Simulador de Corrida', foto: corrida ,  valor1: "30min: 20,00$", valor2: "1hora: 30,00$" },
      { nome: 'Xbox Series S', foto: xbox , valor1: "30min: 14,00$", valor2: "1hora: 23,00$" },
      { nome: 'Jogos de mesa', foto: tabuleiro , valor1: "10,00$", valor2: "", descricao: "Acesso ilimitado" }
      
    ],
    'Hamburgueres': [
      { nome: 'Jupter', foto: jupter, descricao: 'Pão com gergelim, burguer artesanal de 90g e cheddar americano.', valor: "14,00$" },
      { nome: 'Planet', foto: planet , descricao: 'Pão com gergelim, burger artesanal de 90g, mussarela, alface e tomate.', valor: "16,00$" },
      { nome: 'Astro', foto: astro , descricao: 'Pão brioche, burger artesanal de 90g, requeijão e bacon em cubos.', valor: "19,00$" },
      { nome: 'Estrela', foto: estrela , descricao: 'Pão brioche, burguer artesanal de 90g, cheddar americano, fatias de bacon e molho barbucue.', valor: "23,00$" },
      { nome: 'Nebulosa', foto: nebulosa , descricao: 'Pão brioche, burguer artesanal de 90g, cheddar americano, fatias de bacon, cebola caramelizada e maionese caseira.', valor: "25,00$" },
      { nome: 'BigBang', foto: bigbang , descricao: 'Pão com gergelim, 2 burguer artesanais de 90g,duplo cheddar, ovo, fatias de bacon, cebola crispy e maionese artesanal.', valor: "29,00$" },
    ],
    'Porções': [
      { nome: 'Item 10', foto: '', descricao: 'Descrição do Item 10', valor: 25.00 },
      { nome: 'Item 11', foto: '', descricao: 'Descrição do Item 11', valor: 28.00 },
      { nome: 'Item 12', foto: '', descricao: 'Descrição do Item 12', valor: 30.00 },
    ],
    'Açai': [
      { nome: 'Açai Tradicional', foto: '', descricao: 'Descrição do Açai Tradicional', valor: 15.00 },
      { nome: 'Açai Especial', foto: '', descricao: 'Descrição do Açai Especial', valor: 18.00 },
      { nome: 'Açai Premium', foto: '', descricao: 'Descrição do Açai Premium', valor: 20.00 },
    ],
    'Drinks': [
      { nome: 'Item 16', foto: '', descricao: 'Descrição do Item 16', valor: 12.00 },
      { nome: 'Item 17', foto: '', descricao: 'Descrição do Item 17', valor: 14.00 },
      { nome: 'Item 18', foto: '', descricao: 'Descrição do Item 18', valor: 16.00 },
    ],
    'Café Gelado': [
      { nome: 'Item 19', foto: '', descricao: 'Descrição do Item 19', valor: 8.00 },
      { nome: 'Item 20', foto: '', descricao: 'Descrição do Item 20', valor: 10.00 },
      { nome: 'Item 21', foto: '', descricao: 'Descrição do Item 21', valor: 9.00 },
    ],
    'Bebidas': [
      { nome: 'Item 22', foto: '', descricao: 'Descrição do Item 22', valor: 5.00 },
      { nome: 'Item 23', foto: '', descricao: 'Descrição do Item 23', valor: 7.00 },
      { nome: 'Item 24', foto: '', descricao: 'Descrição do Item 24', valor: 6.00 },
    ],
  };

  return (
    <>
      <header>
        <img src={logo} alt="Logo" width={140}/>
        <button>Solicitar atendente</button>
      </header>

      <div className='container'>
        <div className='title'>
          <h2>Menu</h2>
        </div>
        <div className='menu'>
        <nav className='options'>
          {categorias.map((categoria, index) => (
            <button
              key={index}
              onClick={() => handleSelecionarCategoria(index)}
              className={index === categoriaSelecionada ? 'botao-selecionado' : 'btn'}
            >
              {categoria}
            </button>
          ))}
        </nav>

        <div className="divs-container">
          {categorias.map((categoria, index) => (
            
            <div key={index}  style={{ display: index === categoriaSelecionada ? 'block' : 'none' }}>
              <h3>{categoria}</h3>
             
              <div>

              
              <ul className='test'>
                {itensDoCardapio[categoria].map((item, i) => (
                  <li key={i}>
                    <img src={item.foto}/>
                    <div className='info-product'>
                      <h4>{item.nome}</h4>
                      <p>{item.valor1}</p>
                      <p>{item.valor2}</p>
                      <p>{item.descricao}</p>
                      <p className='valor-hamburguer'>{item.valor}</p>
                    </div>
                    
                  </li>
                ))}
              </ul>
              {categoria === 'Hamburgueres' && (
                <div className='adicionais'>
                  <h3 className='color-purple'>Turbine seu Burguer!</h3>
                  <p>
                    Ovo _____________________R$2,00<br/>
                    Salada___________________R$2,00<br/>
                    Cebola crispy____________R$3,00<br/>
                    Cheddar 2 fatias_________R$2,00<br/>
                    Muçarela 2 fatias________R$2,00<br/>
                    cheddar cremoso__________R$4,00<br/>
                    Requeijão________________R$4,00<br/>
                    Fatias de bacon__________R$5,00<br/>
                    Bife Artesanal___________R$5,50<br/>
                  </p>
                </div>
              )}
              {categoria === 'Açai' && (
                <input
                  type="text"
                  value={ingredientesAcai}
                  onChange={(e) => setIngredientesAcai(e.target.value)}
                  placeholder="Monte seu Açai"
                />
              )}
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  )
}

export default App;
