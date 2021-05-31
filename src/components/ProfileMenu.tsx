import React from 'react'
import nookies from 'nookies'
import { decode } from 'js-base64'
import {
  Box,
  Button,
  ButtonGroup,
  Menu,
  MenuButton,
  Image,
  MenuGroup,
  MenuList,
  useMediaQuery,
  HStack,
  Heading,
} from '@chakra-ui/react'
import { styleConstants } from 'src/theme'
import { UserAccountDict } from '@lib/constants'
import { formatAddress, formatBalance } from '@utils/helpers'

export function UserMenu(): JSX.Element {
  const [profile, setProfile] = React.useState<Partial<UserAccountDict>>({})
  const [hasProfile, setHasProfile] = React.useState<boolean>(false)
  const [isMobile] = useMediaQuery('(max-width: 480px)')

  React.useEffect(() => {
    const cookies = nookies.get(null)
    const profile = cookies['__app.user']
    if (profile) {
      setProfile(JSON.parse(decode(profile)))
      setHasProfile(true)
    }
  }, [])

  return (
    <Box
      position={['fixed', 'fixed']}
      justifyContent={['flex-end', 'flex-end']}
      top={[0, 2]}
      right={[0, 0]}
      width="max-content"
      padding={styleConstants.paddingWrapper}
      zIndex="9999999"
    >
      {hasProfile && (
        <Menu closeOnSelect colorScheme="blue">
          <ButtonGroup
            size={isMobile ? 'sm' : 'md'}
            rounded={['md', 'xl']}
            border={styleConstants.altBorder}
            variant="solid"
            colorScheme="pink"
            alignItems="center"
            pr={2}
          >
            <MenuButton
              rounded={['md', 'lg']}
              bg="blue.700"
              as={Button}
              pr={10}
              mr={-8}
            >
              {`${profile.ethBalance?.symbol} ${formatBalance(
                profile.ethBalance?.balance
              ).toFixed(4)}`}
            </MenuButton>
            <MenuButton rounded={['md', 'lg']} as={Button}>
              {formatAddress(profile.ethAddress)}
            </MenuButton>
            <Image w="20px" h="20px" src="/metamask.svg" alt="MetaMask" />
          </ButtonGroup>
          <MenuList minW={['200px', '260px']} py={0}>
            <MenuGroup title="Connected with MetaMask">
              <Box m={4} border={styleConstants.altBorder} p={4} rounded="md">
                <small>On the Ethereum Network</small>
                <HStack>
                  <Heading size="md">
                    {formatAddress(profile.ethAddress)}
                  </Heading>
                  <Image w="20px" h="20px" src="/metamask.svg" alt="MetaMask" />
                </HStack>
              </Box>
            </MenuGroup>
            <Box borderTop={styleConstants.tableBorder} py={2} bg="gray.100">
              <MenuGroup title="Accounts across chain">
                <Box m={4} border={styleConstants.altBorder} p={4} rounded="md">
                  <small>On the Binance Chain</small>
                  <HStack>
                    <Heading size="md">
                      {`${profile.bnbBalance?.symbol} ${formatBalance(
                        profile.bnbBalance?.balance
                      ).toFixed(4)}`}
                    </Heading>
                    <Image
                      w="20px"
                      h="20px"
                      src="/metamask.svg"
                      alt="MetaMask"
                    />
                  </HStack>
                </Box>
              </MenuGroup>
            </Box>
          </MenuList>
        </Menu>
      )}
    </Box>
  )
}

export const ProfileMenu = React.memo(UserMenu)
