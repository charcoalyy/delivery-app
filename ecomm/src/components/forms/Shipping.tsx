import { Box, Button, Select, TextInput } from "@mantine/core";

const Shipping = () => {
  return (
    <form>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.colors.grey[0],
          padding: theme.spacing.xl,
          borderRadius: theme.radius.sm,
        })}
      >
        <TextInput label="First Name" placeholder="John" />
        <TextInput label="Last Name" placeholder="Doe" />
        <Select
          mt="md"
          withinPortal
          data={["Canada", "United States", "United Kingdom"]}
          placeholder="Canada"
          label="Country"
        />
        <TextInput label="State/Province" placeholder="Ontario" />
        <TextInput label="City/Town" placeholder="Toronto" />
        <TextInput label="Address" placeholder="245 Church St" />
        <TextInput label="Postal Code" placeholder="M5B 1Z4" />
        <Button>Submit</Button>
      </Box>
    </form>
  );
};

export default Shipping;
