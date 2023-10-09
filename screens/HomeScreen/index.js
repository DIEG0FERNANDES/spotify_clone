import FilterButton from "../../components/FilterButton";
import FooterMenu from "../../components/FooterMenu";
import Header from "../../components/Header";
import {
  Body,
  BoxCard,
  BoxImg,
  BoxTexto,
  Card,
  CardImg,
  CardTitle,
  Coluna,
  Container,
  HorizontalTexto,
  Lista,
  ScrollHorizontal,
  Texto,
} from "./styles";

const HomeScreen = () => {
  return (
    <>
      <Body>
        <Header />
        <FilterButton />
        <Container>
          <Lista>
            <Coluna>
              <Card>
                <CardImg/>
                <Texto>This is ASIAN KUNG-FU GENERATIONS</Texto>
              </Card>
              <Card>
                <CardImg/>
                <Texto>Chrono Trigger OST</Texto>
              </Card>
            </Coluna>
            <Coluna>
              <Card>
                <CardImg/>
                <Texto>Big in Japan</Texto>
              </Card>
              <Card>
                <CardImg/>
                <CardTitle>This is Michael Jackson</CardTitle>
              </Card>
            </Coluna>
            <Coluna>
              <Card>
                <CardImg/>
                <Texto>Minha playlist n°1</Texto>
              </Card>
              <Card>
                <CardImg/>
                <Texto>This is Akeboshi</Texto>
              </Card>
            </Coluna>
          </Lista>
          <HorizontalTexto>Suas músicas estão com saudade</HorizontalTexto>
          <ScrollHorizontal>
            <BoxCard>
              <BoxImg />
              <BoxTexto>This is Legião Urbana.</BoxTexto>
              <BoxTexto>Todos os maiores hits...</BoxTexto>
            </BoxCard>
            <BoxCard>
              <BoxImg />
              <BoxTexto>This is Led Zeppelin.</BoxTexto>
              <BoxTexto>Todos os maiores hits...</BoxTexto>
            </BoxCard>
            <BoxCard>
              <BoxImg />
              <BoxTexto>Ratattoule Playlist...</BoxTexto>
              <BoxTexto>La France hits..........</BoxTexto>
            </BoxCard>
          </ScrollHorizontal>
          <HorizontalTexto>Feito para DiegoFernandes</HorizontalTexto>
          <ScrollHorizontal>
            <BoxCard>
              <BoxImg />
              <BoxTexto>This is Legião Urbana.</BoxTexto>
              <BoxTexto>Todos os maiores hits...</BoxTexto>
            </BoxCard>
            <BoxCard>
              <BoxImg />
              <BoxTexto>This is Led Zeppelin.</BoxTexto>
              <BoxTexto>Todos os maiores hits...</BoxTexto>
            </BoxCard>
            <BoxCard>
              <BoxImg />
              <BoxTexto>Ratattoule Playlist...</BoxTexto>
              <BoxTexto>La France hits..........</BoxTexto>
            </BoxCard>
          </ScrollHorizontal>
        </Container>
        <FooterMenu />
      </Body>
    </>
  );
};

export default HomeScreen;
