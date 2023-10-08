import styled from "styled-components/native";

// corpo do header
export const Cabeca = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 40px;
  margin-bottom: 15px;
`
// boas vindas ao app
export const Greetings = styled.Text`
  color: white;
  font-size: 25px;
  margin-left: 12px;
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