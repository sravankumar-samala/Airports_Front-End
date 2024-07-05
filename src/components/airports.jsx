import { Grid, Heading, View } from "@adobe/react-spectrum";
import RenderTableView from "./renderTableView";
function Airports() {
  return (
    <View
      gridArea="content"
      paddingY="size-50"
      paddingX="size-250"
      paddingTop="size-500"
    >
      {/* <Grid
        areas={["airportsHeader  AirportsHeader", "table actions"]}
        columns={["1fr", "4fr"]}
        rows={["auto", "1fr"]}
        minHeight="100vh"
        gap="size-100"
      ></Grid> */}
      <Heading level={2}>Airports</Heading>
      <RenderTableView />
    </View>
  );
}

export default Airports;
