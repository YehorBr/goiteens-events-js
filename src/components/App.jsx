import { GlobalStyle } from "../GlobalStyle";
import { PageBoard } from "./PageBoard/PageBoard";
import events from "../upcoming-events.json"
import { Title } from "./Title/Title";
import { Container } from "./Container/Container";

export const App = () => {
  return <>
  <Container>
  <Title/>
  <PageBoard events = {events}/>
  </Container>
  <GlobalStyle/>
  </>
};
