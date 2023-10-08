import styled from "styled-components/native";

// menu na parte inferior do app fixa
export const Footer = styled.View`
  position: fixed;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 55px;
  padding-right: 55px;
`;

// organização dos icones e texto
export const Div = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
`;
export const TitleMenu = styled.Text`
  color: white;
  text-align: center;
  font-size: 10px;
  font-style: normal;
`;
