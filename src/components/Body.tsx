import React from 'react';
import Link from 'next/link';
import { Box, Avatar, Heading, Flex, Tooltip, Divider, Badge, Text, AvatarBadge, Stack, Button, ButtonGroup, IconButton } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { styleConstants } from '../theme';
import nookies from 'nookies'
import { decode } from 'js-base64'
import { AddIcon } from '@chakra-ui/icons';

const HeaderBox = styled(Box)`
    background-color: ${styleConstants.background};
    display: flex;
    justify-content: space-between;
    min-height: ${styleConstants.headerHeight};
    padding: ${styleConstants.paddingWrapper};
    position: fixed;
    top: 0;
    z-index: ${styleConstants.topZindex};
`;

const HeaderDefault = styled(HeaderBox)`
    background-color: white;
    border-bottom: 1px solid #dddddd;
`;

export const HeaderElement: React.FC = () => {
    const [profile, setProfile] = React.useState<string>('')
    const [hasProfile, setHasProfile] = React.useState<boolean>(false)

    React.useEffect(() => {
        const cookies = nookies.get(null)
        const profile = cookies["__app.user"]
        if (profile) {
            setProfile(decode(profile))
            setHasProfile(true)
        }

    }, []);

    return (
        <>
            <Link href="/">
                <Heading
                    as="h1"
                    cursor="pointer"
                    bgGradient="linear(to-l, #07522c,#FF0080)"
                    bgClip="text"
                    letterSpacing="0.2rem" fontFamily="Dosis" size="sm">ALXSERI</Heading>
            </Link>

            {hasProfile &&
                <Stack isInline alignItems="center" justifyContent="flex-end" width="130px">
                    <Tooltip bg="blue.600" hasArrow label={profile} placement="bottom">
                        <Avatar cursor="pointer" name={profile} size="sm">
                            <AvatarBadge p={1} bg="blue.500" />
                        </Avatar>
                    </Tooltip>

                    <Link href="/logout">
                        <Badge
                            _hover={{
                                opacity: '0.7'
                            }}
                            cursor="pointer"
                            fontSize=".85rem"
                            colorScheme="red">Logout</Badge>
                    </Link>
                </Stack>
            }
        </>
    );
};

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
    );
};

export const FormPageHeader: React.FC<{ formHeading: string; formSubHeading?: string }> = (props): JSX.Element => {
    const { formHeading, formSubHeading } = props;
    return (
        <React.Fragment>
            <Heading as="h3" colorScheme="blue" fontWeight="500" size="lg">
                {formHeading}
            </Heading>
            {formSubHeading && (
                <Flex my="2" mb={4} justifyContent="flex-start">
                    <Text colorScheme="blue" fontSize="sm">{formSubHeading}</Text>
                </Flex>
            )}
            <Divider mb={12} pb={2} />
        </React.Fragment>
    );
};


export const Footer: React.FC = (): JSX.Element => {
    return (
        <Flex
            position="fixed"
            justifyContent="center"
            bottom="0"
            width="100%"
            padding={styleConstants.paddingWrapper}
            pb={2}

        >
            <Box
                // bg="gray.100"
                // colorScheme="white"
                p={1}
                // width="max-content"
                width={['max-content', "max-content", "max-content"]}
                border={styleConstants.altBorder}
                borderRadius="lg"

            >

                <ButtonGroup
                    size="sm"
                    variant="solid"
                    borderRadius="lg"
                    display="flex"
                    justifyContent="space-between"
                >
                    <Button mr="-px">Tokens</Button>
                    <Button mr="-px">NFTs</Button>
                    <Button mr="-px">Transactions</Button>
                    <Button mr="-px">Profile</Button>
                    {/* <IconButton aria-label="Add to friends" icon={<AddIcon />} /> */}
                </ButtonGroup>
            </Box>
        </Flex>
    )
}