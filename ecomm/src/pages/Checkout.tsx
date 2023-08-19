import Shipping from "@forms/Shipping";
import Information from "@templates/Information";
import { Flex } from "@mantine/core";
import { useMemo, useState } from "react";

const Checkout = () => {
  const [submitted, setSubmitted] = useState(true);

  const body = useMemo(() => {
    switch (submitted) {
      case true:
        return <Information />;
      case false:
      default:
        return <Shipping setSubmitted={() => setSubmitted(true)} />;
    }
  }, [submitted]);

  return (
    <Flex
      sx={{ width: "100vw", height: "100vh" }}
      justify="center"
      align="center"
    >
      {body}
    </Flex>
  );
};

export default Checkout;
