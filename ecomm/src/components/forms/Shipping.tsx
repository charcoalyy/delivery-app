import {
  Button,
  Grid,
  SegmentedControl,
  Select,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import CenterContainer from "@templates/CenterContainer";
import { useMemo } from "react";
import { formConfig, initialValues, validate } from "./constants";

const Shipping = () => {
  const form = useForm({
    initialValues: initialValues,
    validate: validate,
  });

  const formElements = useMemo(
    () =>
      formConfig.map((config) => {
        switch (config.type) {
          case "select":
            return (
              <Grid.Col span={config.col} key={config.formProps}>
                <Select
                  withinPortal
                  data={config.options || []}
                  placeholder={config.placeholder}
                  label={config.label}
                  {...form.getInputProps("country")}
                />
              </Grid.Col>
            );
          case "text":
          default:
            return (
              <Grid.Col span={config.col} key={config.formProps}>
                <TextInput
                  label={config.label}
                  placeholder={config.placeholder}
                  {...form.getInputProps(config.formProps)}
                />
              </Grid.Col>
            );
        }
      }),
    [form]
  );

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
        {formElements}
        <Grid.Col
          span={12}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button color="violet" type="submit">
            Submit
          </Button>
        </Grid.Col>
      </CenterContainer>
    </form>
  );
};

export default Shipping;
