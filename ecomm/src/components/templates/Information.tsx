import { getShipping } from "@api/shipping";
import useRequest from "@hooks/useRequest";
import { Grid, Title, Text, Button } from "@mantine/core";
import CenterContainer from "@wrappers/CenterContainer";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const Information = () => {
  let navigate = useNavigate();

  const { data } = useRequest({
    request: getShipping,
    requestByDefault: true,
  });

  const displayData = useMemo(() => {
    if (data) {
      return (
        <Grid.Col span={12}>
          <Title mb="16px" order={6} tt="uppercase">
            Order Completion
          </Title>
          <Title order={2}>Your parcel is on its way!</Title>
          <Text>
            Thanks for ordering from cart.it, we hope you love what you receive.
          </Text>
          <Text mt="32px" fz="xs">
            Estimated Delivery Date
          </Text>
          <Text>TBD</Text>
          <Text mt="32px" fz="xs">
            Tracking Number
          </Text>
          <Text>TBD</Text>
        </Grid.Col>
      );
    }
    return null;
  }, [data]);

  return (
    <CenterContainer>
      {displayData}
      <Grid.Col
        span={12}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <Button color="violet" onClick={() => navigate("/home")}>
          Keep Shopping
        </Button>
      </Grid.Col>
    </CenterContainer>
  );
};

export default Information;
