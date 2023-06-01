import React from 'react';
import styled, { keyframes } from 'styled-components';


const FormContainer = styled.div`
  position: relative;
  margin-top: 20px;
  width: auto;
`;

const DiagonalBorder = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-color: #ffdd8c;
  transform: skewY(-5deg);
  
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 23px;
  background-color: #ffffff;
`;

const StyledInput = styled.input`
  margin-bottom: 30px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
  height: 30px;
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

const StyledSubmitButton = styled.input`
  padding: 10px 20px;
  background-color: #f98f6f;
  color: #000000;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:active {
    animation: ${clickAnimation} 0.2s linear;
  }
`;

export default function Formulario({ setComidas, comidas}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if(e.target.comida.value == ""){
      return;
    }
    const comida = e.target.comida.value;
    setComidas((prevComidas) => [...prevComidas, comida]);
    e.target.comida.value = "";
  };

  return (
    <FormContainer>
      <DiagonalBorder />
      <StyledForm onSubmit={(e) => handleSubmit(e)}>
        <StyledInput type="text" name="comida" id="comida" placeholder='Escribir...'/>
        <StyledSubmitButton type="submit" value="Guardar Comida" />
      </StyledForm>
    </FormContainer>
  );
}

