import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Confetti from './Confetti';

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
  background-color: #c1d9cd;
  color: #000000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:active {
    animation: ${clickAnimation} 0.2s linear;
  }
`;

const ResultText = styled.p`
  margin-top: 20px;
`;

export default function ComidaAleatoria({ comidas }) {
  const [comidaAleatoria, setComidaAleatoria] = useState('');
  const [confetti, setConfetti] = useState(false);

  const handleClick = () => {
    const numeroRandom = Math.floor(Math.random() * comidas.length);
    setComidaAleatoria(comidas[numeroRandom]);
    if(comidaAleatoria === ''){
        return;
    }
    setConfetti(true);
    setTimeout(() => {
        setConfetti(false);
        }, 4800);
    };

  return (
    <Container>
        {confetti && (
            <Confetti
            tweenDuration={3000}
            drawShape={ctx => {
            ctx.beginPath()
            for(let i = 0; i < 22; i++) {
            const angle = 0.35 * i
            const x = (0.2 + (1.5 * angle)) * Math.cos(angle)
            const y = (0.2 + (1.5 * angle)) * Math.sin(angle)
            ctx.lineTo(x, y)
            }
            ctx.stroke()
            ctx.closePath()
            }}
    />  
        )}

      <RandomButton onClick={handleClick}>¡Hoy se Cocina!</RandomButton>
      <ResultText>{comidaAleatoria === '' ? 'Comida Aleatoria' : comidaAleatoria}</ResultText>
    </Container>
  );
}
