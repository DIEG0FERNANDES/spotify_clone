// ./src/screens/home/index.js
// importacões de dependencias gerais
import Header from "../../components/header";

// Importação de estilização
import { Container, Texto } from "./styles";

// conteudo pagina principal
const HomeScreen = () => {
  return (
    <Container>
      <Header />
      <Texto>Texto teste HomeScreen</Texto>
    </Container>
  );
};

export default HomeScreen;
