import { StatusBar } from "expo-status-bar";
import { Greetings, Head, Titulo } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell } from "@fortawesome/free-regular-svg-icons";

/* Aplicação do header"cabeçalho" do aplicativo */

const Header = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Head>
        <Greetings>Bom dia!</Greetings>
        <FontAwesomeIcon icon={faBell} />
        <Titulo>icone recents</Titulo>
        <Titulo>icone configuração</Titulo>
      </Head>
    </>
  );
};

export default Header;
