import {
  Button,
  Grid,
  SegmentedControl,
  Select,
  TextInput,
  Title,
} from "@mantine/core";
import CenterContainer from "@templates/CenterContainer";

const Shipping = () => {
  return (
    <form>
      <CenterContainer>
        <Grid.Col span={12}>
          <SegmentedControl
            fullWidth
            data={[
              { value: "order", label: "Order Details", disabled: true },
              { value: "payment", label: "Payment", disabled: true },
              { value: "shipping", label: "Shipping" },
            ]}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <Title order={6} tt="uppercase">
            Shipping Address
          </Title>
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput label="First Name" placeholder="John" />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput label="Last Name" placeholder="Doe" />
        </Grid.Col>
        <Grid.Col span={12}>
          <Select
            withinPortal
            data={["Canada", "United States", "United Kingdom"]}
            placeholder="Canada"
            label="Country"
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput label="State/Province" placeholder="Ontario" />
        </Grid.Col>
        <Grid.Col span={6}>
          {" "}
          <TextInput label="City/Town" placeholder="Toronto" />
        </Grid.Col>
        <Grid.Col span={12}>
          <TextInput label="Address" placeholder="245 Church St" />
        </Grid.Col>
        <Grid.Col span={12}>
          <TextInput label="Postal Code" placeholder="M5B 1Z4" />
        </Grid.Col>
        <Grid.Col
          span={12}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button color="violet">Submit</Button>
        </Grid.Col>
      </CenterContainer>
    </form>
  );
};

export default Shipping;
