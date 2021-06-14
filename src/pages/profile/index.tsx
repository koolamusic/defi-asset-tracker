import React, { useEffect, useState } from 'react'
import { destroyCookie } from 'nookies'
import { CompoundLayout, SubmitButton } from '@components/Layout'
import { ProfileList } from '@components/List'
import { Avatar, Text, Box, VStack } from '@chakra-ui/react'
import { useAuth } from '@lib/auth'
import * as NextUser from '@utils/user'
import { config, TPageProps } from '@lib/constants'
import { NextPageContext } from 'next'
import { NotificationCard } from '@components/notifications'

interface UserProfileInfoProps {
  'account name': string
  username: string
  'join date': string
  'main address': string
  [x: string]: string
}

export default function Page(props: TPageProps): JSX.Element {
  const [profile, setProfile] = useState<UserProfileInfoProps>({
    'account name': 'user.name',
    username: 'user.username',
    'join date': 'user.createdAt',
    'main address': 'user.ethAddress',
  })
  const { logout } = useAuth()

  useEffect(() => {
    const user = props.user

    const profile: UserProfileInfoProps = {
      'account name': user.name,
      username: user.username,
      'join date': user.createdAt,
      'main address': user.ethAddress,
    }
    setProfile(profile)
    console.log(user)
  }, [props.user])

  const handleLogout = async () => {
    try {
      // const cookies = nookies.get(null)
      await destroyCookie(null, config.profileKey)

      await logout()
    } catch (error) {
      alert(JSON.stringify(error))
    }
  }

  return (
    <CompoundLayout>
      <VStack w="100%">
        <VStack p="2" width="100%">
          <Avatar size="md" name={props.user.name} src="#" />
          <Text pt={3}>{props.user.name}</Text>
        </VStack>
        <Box py={4} />

        {/* /////////////// Render the User Profile list ///////////// */}
        <Box w="100%" my={6}>
          {Object.keys(profile).map((entry, index) => {
            // const { symbol, name, tokenAddress, contractType, balance } = entry

            return <ProfileList key={[entry, index].join('-')} propertyNode={entry} value={profile[entry]} />
          })}
        </Box>
        {/* /////////////// Render the User Profile list  ///////////// */}
        <Box py={8} />

        <NotificationCard />

        <SubmitButton onClick={() => handleLogout()} type="button" mt={8} withIcon buttonName="Logout" />
      </VStack>
    </CompoundLayout>
  )
}

export async function getServerSideProps(ctx: NextPageContext) {
  const userInfo = await NextUser.handleAuthenticatedRequest(ctx)

  /* Manage Nextjs screams!!! */
  if (!userInfo)
    return {
      props: {
        user: null,
      },
    }
  return userInfo
}
