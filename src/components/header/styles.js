import styled from "styled-components/native";

// estilização do header
export const Head = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 10px;
`;

// parte do greetings
export const Greetings = styled.Text`
  color: white;
  font-size: 15px;
  flex: 1;
  flex-direction: row;
  align-self: flex-start;
`;

// parte dos botões de menu
export const Menu = styled.div`
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`;

// aleatório
export const Titulo = styled.Text`
  color: green;
  font-size: 10px;
`;
