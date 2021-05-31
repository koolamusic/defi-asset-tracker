import React from "react";
import nookies from 'nookies'
import { decode } from 'js-base64'
import { Button, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList } from "@chakra-ui/react";

export default function ProfileMenu(): JSX.Element {
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
        <React.Fragment>
            {hasProfile &&
                <Menu>
                    <MenuButton as={Button} colorScheme="pink">
                        Profile
            </MenuButton>
                    <MenuList>
                        <MenuGroup title="Profile">
                            <MenuItem>My Account</MenuItem>
                            <MenuItem>Payments </MenuItem>
                        </MenuGroup>
                        <MenuDivider />
                        <MenuGroup title="Help">
                            <MenuItem>Docs</MenuItem>
                            <MenuItem>FAQ</MenuItem>
                        </MenuGroup>
                    </MenuList>
                </Menu>
            }
        </React.Fragment>
    )
}