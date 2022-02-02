import { Flex, useBreakpointValue } from "@chakra-ui/react"

import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header() {
  const isWideScreenVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex as="header" w="100%" maxWidth={1480} h="20" mx="auto" mt="4" px="6" align="center">
      <Logo />

      {isWideScreenVersion && <SearchBox />}
      
      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideScreenVersion} />
      </Flex>
    </Flex>
  )
}