// ./src/screens/home/index.js
// importacões de dependencias gerais
import Header from "../../components/header";

// Importação de estilização
import { Container, Filter, Texto } from "./styles";

// conteudo pagina principal
const HomeScreen = () => {
  return (
    <Container>
      <Header />
        <Texto>Texto teste HomeScreen</Texto>
      {/* <Filter>
      </Filter> */}
    </Container>
  );
};

export default HomeScreen;
