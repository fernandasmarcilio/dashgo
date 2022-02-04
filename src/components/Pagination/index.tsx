import { Box, Stack, HStack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  siblingsCount?: number;
  onPageChange: (page: number) => void;
}

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
  siblingsCount = 1,
}: PaginationProps) {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);
  const previousPages =  currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];
  const nextPages = currentPage < lastPage
      ? generatePagesArray( currentPage, Math.min(currentPage + siblingsCount, lastPage))
      : [];

  const firstRegister = (currentPage - 1) * registersPerPage
  const lastRegister = firstRegister + registersPerPage > totalCountOfRegisters ? totalCountOfRegisters : firstRegister + registersPerPage
  

  return (
    <Stack
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
      direction={["column", "row"]}
    >
      <Box>
        <strong>{firstRegister}</strong> - <strong>{lastRegister}</strong> de <strong>{totalCountOfRegisters}</strong>
      </Box>
      <HStack spacing="2">

        { currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            { currentPage > (2 + siblingsCount) && (
              <Text color="gray.300" w="8" textAlign="center"> ...</Text>
            )}
          </>
        )}

        { previousPages.length > 0 &&
          previousPages.map((page) => <PaginationItem onPageChange={onPageChange} number={page} key={page} /> )
        }

        <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />

        { nextPages.length > 0 &&
          nextPages.map((page) => <PaginationItem onPageChange={onPageChange} number={page} key={page} />)
        }

        { currentPage + siblingsCount < lastPage && (
          <>
           { currentPage + 1 + siblingsCount < lastPage && (
            <Text color="gray.300" w="8" textAlign="center"> ...</Text>
          )}
           <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}

      </HStack>
    </Stack>
  );
}
