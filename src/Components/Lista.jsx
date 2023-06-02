import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import ListElement from '../Elementos/ListElement';

const ListaContainer = styled.div`
  margin-top: 20px;
  padding: 5px;
`;

export default function Lista({ comidas, eliminarComida }) {
  return (
    <ListaContainer>
      {comidas.map((comida) => (
        <ListElement key={uuidv4()} comida={comida} eliminarComida={() => eliminarComida(comida)} />
      ))}
    </ListaContainer>
  );
}
