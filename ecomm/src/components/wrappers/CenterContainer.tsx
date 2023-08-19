import { Grid } from "@mantine/core";
import { ReactNode } from "react";

const CenterContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Grid
      sx={(theme) => ({
        backgroundColor: theme.colors.grey[0],
        padding: theme.spacing.xl,
        borderRadius: theme.radius.sm,
        width: "50vw",
        height: "90vh",
      })}
    >
      {children}
    </Grid>
  );
};

export default CenterContainer;
