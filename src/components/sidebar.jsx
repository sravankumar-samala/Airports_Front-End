import {
  Flex,
  Item,
  ListBox,
  View,
  Text,
  Section,
} from "@adobe/react-spectrum";
import Home from "@spectrum-icons/workflow/Home";
import ViewGrid from "@spectrum-icons/workflow/ViewGrid";

function Sidebar() {
  return (
    <View
      width="100%"
      gridArea="sidebar"
      paddingY="size-50"
      paddingX="size-100"
    >
      <Flex direction="column" width="size-2000" gap="size-200">
        <ListBox aria-label="Nav Items" marginTop="size-150">
          <Item textValue="Home" href="/">
            <Home size="S" />
            <Text>Home</Text>
          </Item>
          <Item textValue="Dashboard" flex="1">
            <ViewGrid size="S" />
            <Text>Dashboard</Text>
          </Item>
        </ListBox>
        <ListBox aria-label="Menu Items">
          <Section title="Services" selectedKeys="Airports">
            <Item key="Airports" href="/">
              Airports
            </Item>
            <Item key="Videos">Videos</Item>
          </Section>
        </ListBox>
        <ListBox aria-label="Lists Items">
          <Section title="Others">
            <Item key="List 1">List 1</Item>
            <Item key="List 2">List 2</Item>
            <Item key="List 3">List 3</Item>
          </Section>
        </ListBox>
      </Flex>
    </View>
  );
}

export default Sidebar;
