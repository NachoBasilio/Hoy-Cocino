import styled from 'styled-components';
import './App.css';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import ComidaAleatoria from './Components/ComidaAleatoria';
import { useEffect, useState } from 'react';



const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;

  @media (min-width: 768px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
const FormularioContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
` 

function App() {
  const [comidas , setComidas] = useState(localStorage.getItem('comida') === null ? [] : JSON.parse(localStorage.getItem('comida')));  
  useEffect(() => {
    localStorage.setItem('comida', JSON.stringify(comidas));
  }, [comidas]);
  return (
    <Container>
      <Header />
      <FormularioContainer>
        <Formulario setComidas={setComidas} comidas={comidas} ></Formulario>
      </FormularioContainer>
      <ComidaAleatoria comidas={comidas} ></ComidaAleatoria>
    </Container>
  );
}

export default App;

