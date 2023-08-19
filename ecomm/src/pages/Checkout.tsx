import Shipping from "@forms/Shipping";
import { Flex } from "@mantine/core";

const Home = () => {
  return (
    <Flex
      sx={{ width: "100vw", height: "100vh" }}
      justify="center"
      align="center"
    >
      <Shipping />
    </Flex>
  );
};

export default Home;
