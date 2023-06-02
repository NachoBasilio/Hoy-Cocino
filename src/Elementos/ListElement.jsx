import React from 'react';
import styled from 'styled-components';

const ListElementContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const ComidaText = styled.div`
  flex-grow: 1;
`;

const DeleteButton = styled.button`
  background-color: #f98f6f;
  color: black;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
`;

export default function ListElement({ comida, eliminarComida }) {
  return (
    <ListElementContainer>
      <ComidaText>{comida}</ComidaText>
      <DeleteButton onClick={eliminarComida}>Eliminar</DeleteButton>
    </ListElementContainer>
  );
}
