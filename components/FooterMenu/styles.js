import styled from "styled-components/native";

// menu na parte inferior do app fixa
export const Footer = styled.View`
  position: fixed;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 55px;
  padding-right: 55px;
  margin-bottom: 6px;
`;

// organização dos icones e texto
export const Div = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const TitleMenu = styled.Text`
  color: white;
  text-align: center;
  font-size: 12px;
  font-weight: 300;
`;
