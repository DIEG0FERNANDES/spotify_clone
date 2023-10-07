import { StatusBar } from "expo-status-bar";
import { Greetings, Head, Menu, Titulo } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell, faGear, faRotateRight } from "@fortawesome/free-solid-svg-icons";

/* Aplicação do header"cabeçalho" do aplicativo */

const Header = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Head>
        <Greetings>Bom dia!</Greetings>
        <Menu>
          <FontAwesomeIcon icon={faBell} />
          <FontAwesomeIcon icon={faRotateRight} />
          <FontAwesomeIcon icon={faGear} />
        </Menu>
      </Head>
    </>
  );
};

export default Header;
