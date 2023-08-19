import { Flex, Title, Text } from "@mantine/core";

const NotFound = () => {
  return (
    <Flex direction="column" sx={{ width: "400px" }}>
      <Title order={1}>Not found</Title>
      <Text>That page doesn't exist.</Text>
    </Flex>
  );
};

export default NotFound;
