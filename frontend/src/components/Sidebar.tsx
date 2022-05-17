import { Box, Stack, Text, useColorMode } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { sections, ISection } from "../utils/sections";

interface Props {
  section: string;
  setSection: Dispatch<SetStateAction<string>>;
}

export default function Sidebar(props: Props) {
  const { section, setSection } = props;

  const { colorMode } = useColorMode();

  return (
    <Box w="100%" display="flex" flexDirection="column" alignItems="center">
      <Stack spacing={5}>
        {sections.map((s: ISection) => (
          <Text
            key={s.id}
            textAlign="center"
            fontWeight={section === s.id ? "bold" : "medium"}
            fontSize="2xl"
            cursor="pointer"
            _hover={{ fontWeight: "bold" }}
            color={
              section === s.id
                ? "green.500"
                : colorMode === "light"
                ? "#000"
                : "#fff"
            }
            onClick={() => setSection(s.id)}
          >
            {s.name}
          </Text>
        ))}
      </Stack>
    </Box>
  );
}
