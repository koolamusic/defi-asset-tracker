import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { useForm } from 'react-hook-form';
import { Box } from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons'

import { FormLayout, SubmitButton } from '../components/Layout'
import { FormPageHeader } from '../components/Header'
import { InputField, PasswordField } from '../components/Fields';
import { generateRandomName } from '../utils/helpers'


export default function Page(): JSX.Element {
    const { register, handleSubmit } = useForm();
    const [randomName, setRandomName] = useState<string>('')

    useEffect(() => {
        setRandomName(generateRandomName())
        return () => {
            setRandomName('')
        };
    }, []);

    const onSubmit = async (_data: any): Promise<void> => {
        try {

        } catch (error) {

        }

    };

    return (

        <FormLayout isDefaultHeader={true}>
            <FormPageHeader
                formHeading="Create an Account"
                formSubHeading="We have created a cool name for you 😀 so you dont have to"
            />

            <form onSubmit={handleSubmit(onSubmit)}>

                <InputField
                    register={register}
                    required
                    readOnly
                    defaultValue={randomName ?? ""}
                    label="Your Cool Name"
                    placeholder={randomName}
                    name="name"
                    withAction
                    actionHandler={() => setRandomName(generateRandomName())}
                    actionIcon={<RepeatIcon />}
                />
                <InputField
                    register={register}
                    type="email"
                    required
                    label="Email Address"
                    placeholder="Your Email"
                    name="email"
                />
                <PasswordField
                    register={register}
                    required
                    label="Password"
                    placeholder="Secure Alphanumeric password"
                    name="password"
                    type="password"
                />

                {/* === form input subsection  === */}

                <SubmitButton mt={8} withIcon buttonName="Create Account" />
                <Box mb={6} mt={3} fontSize=".9rem" color="gray.600">
                    <Link href="/login">Already have an account? Login</Link>
                </Box>

            </form>
        </FormLayout>

    )
}