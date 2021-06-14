import React from 'react'
import Link from 'next/link'
import {
  Box,
  Avatar,
  Heading,
  Flex,
  Tooltip,
  Divider,
  Badge,
  Text,
  AvatarBadge,
  Stack,
  Button,
  ButtonGroup,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { config } from '@lib/constants'
import { styleConstants } from '../theme'
import nookies from 'nookies'
import { decode } from 'js-base64'
import { useRouter } from 'next/router'

const HeaderBox = styled(Box)`
  background-color: ${styleConstants.background};
  display: flex;
  justify-content: space-between;
  min-height: ${styleConstants.headerHeight};
  padding: ${styleConstants.paddingWrapper};
  position: fixed;
  top: 0;
  z-index: ${styleConstants.topZindex};
`

const HeaderDefault = styled(HeaderBox)`
  background-color: white;
  border-bottom: 1px solid #dddddd;
`

export const HeaderElement: React.FC = () => {
  const [profile, setProfile] = React.useState<string>('')
  const [hasProfile, setHasProfile] = React.useState<boolean>(false)

  React.useEffect(() => {
    const cookies = nookies.get(null)
    const profile = cookies[config.profileKey]
    if (profile) {
      setProfile(decode(profile))
      setHasProfile(true)
    }
  }, [])

  return (
    <>
      {hasProfile && (
        <Stack isInline alignItems="center" justifyContent="flex-end" width={['120px', '120px', '130px']}>
          <Tooltip bg="blue.600" hasArrow label={profile} placement="bottom">
            <Avatar cursor="pointer" name={profile} size="sm">
              <AvatarBadge p={1} bg="blue.500" />
            </Avatar>
          </Tooltip>

          <Link href="/logout">
            <Badge
              _hover={{
                opacity: '0.7',
              }}
              cursor="pointer"
              fontSize=".85rem"
              colorScheme="red"
            >
              Logout
            </Badge>
          </Link>
        </Stack>
      )}
    </>
  )
}

export const Header: React.FC<{ isDefault?: boolean; isBordered?: boolean }> = ({
  isDefault,
  isBordered,
}): JSX.Element => {
  return (
    <header>
      {isDefault ? (
        <HeaderDefault display="flex" bg="white" width="100%" alignItems="center">
          <HeaderElement />
        </HeaderDefault>
      ) : (
        <HeaderBox
          display="flex"
          borderBottom={isBordered ? '1px solid #dddddd' : 'none'}
          width="100%"
          alignItems="center"
        >
          <HeaderElement />
        </HeaderBox>
      )}
    </header>
  )
}

export const FormPageHeader: React.FC<{
  formHeading?: string
  formSubHeading?: string
}> = (props): JSX.Element => {
  const { formHeading, formSubHeading } = props
  return (
    <VStack align="flex-start">
      <Heading as="h3" colorScheme="blue" size="lg">
        {formHeading}
      </Heading>
      {formSubHeading && (
        <Flex my="2" mb={4}>
          <Text colorScheme="blue" fontSize="sm">
            {formSubHeading}
          </Text>
        </Flex>
      )}
      <Divider mb={12} pb={2} display={['none', 'block']} />
    </VStack>
  )
}

export const Footer: React.FC = (): JSX.Element => {
  const router = useRouter()
  const [isMobile] = useMediaQuery('(max-width: 480px)')

  return (
    <Flex
      position={['fixed', 'absolute']}
      justifyContent={['center', 'center', 'flex-start', 'center']}
      bottom={[0, 0, 'inherit']}
      width="100vw"
      padding={styleConstants.paddingWrapper}
      zIndex="9999"
      bg={['inherit', 'white']}
      border={['none', styleConstants.altBorder]}
      py={2}
    >
      <Box
        // bg="gray.100"
        // colorScheme="white"
        zIndex="9999"
        p={2}
        bg={['white', 'white']}
        width={['100%', 'max-content', 'max-content']}
        // border={[styleConstants.altBorder, styleConstants.defaultBorder]}
        borderRadius="lg"
      >
        <ButtonGroup
          size={isMobile ? 'sm' : 'md'}
          variant="solid"
          borderRadius="lg"
          display="flex"
          justifyContent="space-between"
        >
          <Button border={styleConstants.tableBorder} onClick={(_e) => router.push('/tokens')} mr="-px">
            Tokens
          </Button>
          <Button border={styleConstants.tableBorder} onClick={(_e) => router.push('/nfts')} mr="-px">
            NFTs
          </Button>
          <Button border={styleConstants.tableBorder} onClick={(_e) => router.push('/transactions')} mr="-px">
            Transactions
          </Button>
          <Button border={styleConstants.tableBorder} onClick={(_e) => router.push('/profile')} mr="-px">
            Profile
          </Button>
        </ButtonGroup>
      </Box>
    </Flex>
  )
}
