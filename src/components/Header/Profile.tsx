import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Fernanda Marcilio</Text>
        <Text color="gray.300" fontSize="small">
          fernandas.marcilio@gmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Fernanda Marcilio" />
    </Flex>
  );
}
