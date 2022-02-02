import { Box, Button, HStack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return (
    <HStack mt="8" justify="space-between" align="center" spacing="6">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing="2">
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
      </HStack>
    </HStack>
  );
}
