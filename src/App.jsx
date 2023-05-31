import styled from 'styled-components';
import './App.css';
import Header from './Components/Header';

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

function App() {
  return (
    <Container>
      <Header />
      <p>Este es tu selector aleatorio de comida</p>
      <form action="">
        <input type="text" name="comida" id="comida" />
        <input type="submit" value="Guardar Comida" />
      </form>
      <button>Comida Aleatoria</button>
      <p>Su comida es:</p>
      <p>Comida Aleatoria</p>
    </Container>
  );
}

export default App;

