import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        {showProfileData && (
          <>
            <Text>Fernanda Marcilio</Text>
            <Text color="gray.300" fontSize="small">
              fernandas.marcilio@gmail.com
            </Text>
          </>
        )}
      </Box>
      <Avatar size="md" name="Fernanda Marcilio" />
    </Flex>
  );
}
