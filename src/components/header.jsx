import {
  Flex,
  Heading,
  View,
  Image,
  TooltipTrigger,
  ToggleButton,
  Tooltip,
} from "@adobe/react-spectrum";
import Light from "@spectrum-icons/workflow/Light";
import Moon from "@spectrum-icons/workflow/Moon";
import { useAirportsContext } from "../context/airportsContext";

function AirportHeader() {
  const { isDarkTheme, handleDispatch } = useAirportsContext();

  const toggleTheme = () => handleDispatch("setIsDarkTheme", !isDarkTheme);

  return (
    <View gridArea="header" paddingY="size-100" paddingX="size-250">
      <Flex direction="row" justifyContent="space-between" alignItems="center">
        <Heading marginY="0" level={1}>
          havai havai
        </Heading>
        <Flex direction="row" gap="size-200" alignItems="center">
          <TooltipTrigger delay={0}>
            <ToggleButton
              aria-label="Toggle Theme"
              onChange={toggleTheme}
              isSelected={isDarkTheme}
              //   staticColor={isDarkTheme ? "white" : "black"}
            >
              {isDarkTheme ? <Light /> : <Moon />}
            </ToggleButton>
            <Tooltip>Toggle Theme</Tooltip>
          </TooltipTrigger>
          <Image
            src="/profile_pic.png"
            alt="Profile picture"
            width="size-450"
            height="size-450"
          />
        </Flex>
      </Flex>
    </View>
  );
}

export default AirportHeader;
