import styled from "styled-components/native";

// corpo do header
export const Cabeca = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 50px;
  margin-bottom: 10px;
`
// boas vindas ao app
export const Greetings = styled.Text`
  color: white;
  font-size: 25px;
  margin-left: 15px;
  font-weight: bold;
`

// menus de notificações, recents e configuraçòes
export const Menus = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
export const Botao = styled.TouchableOpacity`
  margin: 10px;
`