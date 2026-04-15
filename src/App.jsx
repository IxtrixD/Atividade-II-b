import React, { useState } from 'react';
import ProjectCard from './components/ProjectCard';
import './index.css'; 
import fotoMiku from './assets/Miku.jpg';

const meusProjetos = [
  { id: 1, titulo: "Projeto 1 - UnitOdonto", descricao: "Um aplicativo para o agendamento de consultas em clinicas.", link: "https://github.com/IxtrixD/UnitOdonto" },
  { id: 2, titulo: "Projeto 2 - Calculadora Simples", descricao: "Apenas uma calculadora.", link: "https://github.com/IxtrixD/Calculadora_Simples" }
];

function App() {
  const [temaVermelho, setTemaVermelho] = useState(false);
  const alternarTema = () => setTemaVermelho(!temaVermelho);

  const [formData, setFormData] = useState({ nome: '', email: '', msg: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nome || !formData.email) {
      alert("Preencha os campos obrigatórios!");
    } else {
      alert(`Obrigado, ${formData.nome}! Mensagem enviada.`);
      setFormData({ nome: '', email: '', msg: '' }); 
    }
  };

  return (
    <div className={`${temaVermelho ? 'temaVermelho' : 'temaAzul'}`} style={{ minHeight: '100vh' }}>
      <header>
        <h1>Cristhian Coelho</h1>
          <nav>
            <ul>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#contato">Contato</a></li>
                <li>
                  <button id="botao-tema" onClick={alternarTema}>
                    {temaVermelho ? 'Azul' : 'Vermelho'}
                  </button>
                </li>
            </ul>
        </nav>
      </header>

      <main>
        
        <section id="sobre">
            <h2>Sobre Mim</h2>
            <img
              src={temaVermelho ? fotoMiku : fotoMiku}
              alt={temaVermelho ? 'Foto Teto - tema vermelho' : 'Foto Miku - tema azul'}
            />
            <p>Meu nome é Cristhian Coelho, atualmente estudando sistemas para internet.</p>
        </section>

        <section id="projetos">
          <h2>Meus Projetos</h2>
          <div className="container-projetos">            
            {meusProjetos.map((projeto) => (
              <ProjectCard 
                key={projeto.id}
                titulo={projeto.titulo}
                descricao={projeto.descricao}
                link={projeto.link}
              />
            ))}
          </div>
        </section>
        
        <section id="contato">
          <h2>Envie uma mensagem!</h2>
          <form onSubmit={handleSubmit}>
            <div class="campo">
              <label for="nome">Nome:</label>
              <input 
                id="nome" 
                type="text" 
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
              />
            </div>
            <div class="campo">
              <label for="email">Email:</label>
              <input 
                id="email" 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div class="campo">
              <label for="msg">Mensagem:</label>
              <textarea 
                id="msg" 
                value={formData.msg}
                onChange={(e) => setFormData({...formData, msg: e.target.value})}
              />
            </div>
            <button type="submit">Enviar Mensagem</button>
          </form>
        </section>

      </main>

      <footer>
        <p>&copy; 2026 Desenvolvido por Cristhian Coelho</p>
      </footer>
    </div>
  );
}

export default App;