import styled from 'styled-components';
import './App.css';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import { useState } from 'react';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;

  @media (min-width: 768px) {
    justify-content: center;
    align-items: flex-start;
    text-align: left;
  }
`;
const FormularioContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
` 

function App() {
  const [comidas, setComidas] = useState([]);
  console.log(comidas)
  return (
    <Container>
      <Header />
      <FormularioContainer>
        <Formulario setComidas={setComidas}></Formulario>
      </FormularioContainer>
      <button>Comida Aleatoria</button>
      <p>Su comida es:</p>
      <p>Comida Aleatoria</p>
    </Container>
  );
}

export default App;

