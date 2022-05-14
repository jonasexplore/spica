import type { NextPage } from "next";
import { Container, SearchForm } from "../components";

const Home: NextPage = () => {
  const onFinish = (props: any) => {
    console.log(props);
  };

  return (
    <Container>
      <h2>Calcular valor do investimento</h2>
      <SearchForm onFinish={onFinish} />
    </Container>
  );
};

export default Home;
