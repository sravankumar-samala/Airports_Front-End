/* eslint-disable react/prop-types */
import { Grid } from "@adobe/react-spectrum";

function AppLayout({ children }) {
  return (
    <Grid
      areas={["header  header", "sidebar content"]}
      columns={["1fr", "4fr"]}
      rows={["auto", "1fr"]}
      height="100vh"
      gap="size-100"
    >
      {children}
    </Grid>
  );
}

export default AppLayout;
