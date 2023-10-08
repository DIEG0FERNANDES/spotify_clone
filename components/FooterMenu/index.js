import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Div, Footer, TitleMenu } from "./styles";
import {
  faHouse,
  faMagnifyingGlass,
  faSwatchbook,
} from "@fortawesome/free-solid-svg-icons";

const FooterMenu = () => {
  return (
    <>
      <Footer>
        <Div>
          <FontAwesomeIcon icon={faHouse} color="white" size={30} />
          <TitleMenu>Início</TitleMenu>
        </Div>
        <Div>
          <FontAwesomeIcon icon={faMagnifyingGlass} color="white" size={30} />
          <TitleMenu>Buscar</TitleMenu>
        </Div>
        <Div>
          <FontAwesomeIcon icon={faSwatchbook} color="white" size={30} />
          <TitleMenu>Sua Biblioteca</TitleMenu>
        </Div>
      </Footer>
    </>
  );
};

export default FooterMenu;