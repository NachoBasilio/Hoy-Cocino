import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  position: relative;
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
  padding: 20px;
  background-color: #ffffff;
`;

const StyledInput = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const StyledSubmitButton = styled.input`
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default function Formulario({ setComidas }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const comida = e.target.comida.value;
    setComidas((prevComidas) => [...prevComidas, comida]);
    e.target.comida.value = "";
  };

  return (
    <FormContainer>
      <DiagonalBorder />
      <StyledForm onSubmit={(e) => handleSubmit(e)}>
        <StyledInput type="text" name="comida" id="comida" />
        <StyledSubmitButton type="submit" value="Guardar Comida" />
      </StyledForm>
    </FormContainer>
  );
}

