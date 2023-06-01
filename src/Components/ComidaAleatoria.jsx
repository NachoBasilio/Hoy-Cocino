import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  text-align: center;
`;


const clickAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
`;

const RandomButton = styled.button`
  padding: 10px 20px;
  background-color: #8ab382;
  color: #000000;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:active {
    animation: ${clickAnimation} 0.2s linear;
  }
`;

const ResultText = styled.p`
  margin-top: 20px;
`;

export default function ComidaAleatoria({comidas}) {
    const [comidaAleatoria, setComidaAleatoria] = useState('');

    const handleClick = () => {
        const numeroRandom = Math.floor(Math.random() * comidas.length);
        setComidaAleatoria(comidas[numeroRandom]);
    }
    return (
        <Container>
        <RandomButton onClick={()=>{handleClick()}}>Comida Aleatoria</RandomButton>
        <ResultText>Su comida es:</ResultText>
        <ResultText>{comidaAleatoria == "" ? "Comida Aleatoria" : comidaAleatoria}</ResultText>
        </Container>
    );
}

