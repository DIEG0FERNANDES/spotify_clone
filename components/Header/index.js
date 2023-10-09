import { StatusBar } from "expo-status-bar";
import { Botao, Cabeca, Greetings, Menus } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell, faClock } from "@fortawesome/free-regular-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <StatusBar />
      <Cabeca>
        <Greetings>Boa tarde</Greetings>
        <Menus>
          <Botao>
            <FontAwesomeIcon icon={faBell} color="white" size={22} />
          </Botao>
          <Botao>
            <FontAwesomeIcon icon={faClock} color="white" size={22} />
          </Botao>
          <Botao>
            <FontAwesomeIcon icon={faGear} color="white" size={22} />
          </Botao>
        </Menus>
      </Cabeca>
    </>
  );
};

export default Header;
