import { StatusBar } from "expo-status-bar";
import { Greetings, Head, Menu, Titulo } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

/* Aplicação do header"cabeçalho" do aplicativo */

const Header = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Head>
        <Greetings>Bom dia!</Greetings>
        <Menu>
          <FontAwesomeIcon icon={faBell} color="#ffffff" />
          <Titulo>icone recents</Titulo>
          <Titulo>icone configuração</Titulo>
        </Menu>
      </Head>
    </>
  );
};

export default Header;
