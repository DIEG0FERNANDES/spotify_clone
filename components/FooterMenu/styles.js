import styled from "styled-components/native";

// menu na parte inferior do app fixa
export const Footer = styled.View`
  position: fixed;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

// organização dos icones e texto
export const Div = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  margin: 15px;
`;
export const TitleMenu = styled.Text`
  color: white;
  text-align: center;
  font-size: 10px;
  font-style: normal;
`;
