import { useEffect } from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { useQuery } from "react-query";

import { Header } from "../../components/Header";
import { Heading } from "../../components/Heading";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  const { data, isLoading, error } = useQuery("users", async () => {
    const response = await fetch("http://localhost:3000/api/users");
    const data = await response.json();

    return data;
  });

  const isWideScreenVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading>Usuários</Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                lineHeight="0"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>
                Falha ao obter dados dos usuários. Tente novamente mais tarde.
              </Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={["4", "4", "6"]} color="gray.300" w="8">
                      <Checkbox colorScheme="pink" />
                    </Th>
                    <Th>Usuários</Th>
                    {isWideScreenVersion && <Th>Data de cadastro</Th>}
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td px={["4", "4", "6"]}>
                      <Checkbox colorScheme="pink" />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold">Fernanda Marcilio</Text>
                        <Text fontSize="sm" color="gray.300">
                          fernandas.marcilio@gmail.com
                        </Text>
                      </Box>
                    </Td>
                    {isWideScreenVersion && <Td>04 de Abril, 2021</Td>}
                  </Tr>

                  <Tr>
                    <Td px={["4", "4", "6"]}>
                      <Checkbox colorScheme="pink" />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold">Fernanda Marcilio</Text>
                        <Text fontSize="sm" color="gray.300">
                          fernandas.marcilio@gmail.com
                        </Text>
                      </Box>
                    </Td>
                    {isWideScreenVersion && <Td>04 de Abril, 2021</Td>}
                  </Tr>

                  <Tr>
                    <Td px={["4", "4", "6"]}>
                      <Checkbox colorScheme="pink" />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold">Fernanda Marcilio</Text>
                        <Text fontSize="sm" color="gray.300">
                          fernandas.marcilio@gmail.com
                        </Text>
                      </Box>
                    </Td>
                    {isWideScreenVersion && <Td>04 de Abril, 2021</Td>}
                  </Tr>
                </Tbody>
              </Table>

              <Pagination />
            </>
          )}
          
        </Box>
      </Flex>
    </Box>
  );
}
