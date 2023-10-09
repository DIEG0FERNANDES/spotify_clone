import styled from "styled-components/native";
// corpo da pagina
export const Body = styled.View`
  flex: 1;
  background-color: #121212;
`;
// conteudo de scroll container
export const Container = styled.ScrollView`
  flex: 1;
  margin: 15px;
`;
// lista com 6 box card retangulares
export const Lista = styled.View`
  margin-bottom: 10px;
`;
export const Coluna = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 2px;
`;
export const Card = styled.TouchableOpacity`
  height: 50px;
  width: 50%;
  margin-right: 10px;
  border-radius: 4px;
  flex-direction: row;
  background-color: #2a2a2a;
`;
export const CardImg = styled.View`
  background-color: blue;
  height: 50px;
  width: 50px;
`;
export const CardTitle = styled.Text`
  color: white;
  justify-content: flex-start;
`;
// Horizontal ScrollCards Conteudo
export const HorizontalTexto = styled.Text`
  color: white;
  font-weight: 500;
  font-size: 22px;
  margin-bottom: 10px;
`;
export const ScrollHorizontal = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const BoxCard = styled.TouchableOpacity`
  border-radius: 4px;
  flex-direction: column;
  margin-right: 2px;
`;
export const BoxImg = styled.View`
  background-color: blue;
  border-radius: 5px;
  height: 150px;
  width: 150px;
`;
export const BoxTexto = styled.Text`
  font-size: 15px;
  font-weight: 200;
  color: #ffffff;
`;
// resto
export const Texto = styled.Text`
  color: white;
`;
