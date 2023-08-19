import Shipping from "@forms/Shipping";
import { Flex, Title } from "@mantine/core";

const Home = () => {
  return (
    <Flex direction="column" sx={{ width: "400px" }}>
      <Title order={1}>Shipping Address</Title>
      <Shipping />
    </Flex>
  );
};

export default Home;
