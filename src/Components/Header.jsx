import { Helmet } from 'react-helmet';
import styled from 'styled-components';


const FontImport = () => (
  <Helmet>
    <link
      href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
      rel="stylesheet"
    />
  </Helmet>
);

const HeaderContainer = styled.div`
  position: relative;
  font-family: 'Quicksand', sans-serif;
  padding: 5px;

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

const LogoImage = styled.img`
  width: 90px;
  height: 90px;
  margin: 10px;
`;

const Heading = styled.h1`
  color: #333;
  font-size: 24px;
  text-align: center;
  margin-top: 10px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <FontImport />
      <DiagonalBorder />
      <LogoImage src="https://static.vecteezy.com/system/resources/previews/011/835/431/original/crossed-knife-and-fork-png.png" alt="" />
      <Heading>Hoy Toca</Heading>
    </HeaderContainer>
  );
}
