import React from 'react';
import Link from 'next/link'
import { Box } from '@chakra-ui/react';
import { NextPageContext } from 'next';

import { FormLayout, SubmitButton } from '../components/Layout'
import { FormPageHeader } from '../components/Header'
import { InputField, PasswordField } from '../components/Fields';
import { useForm } from 'react-hook-form';
import * as Auth from '../utils/auth'


export default function Page(): JSX.Element {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (_data: any): Promise<void> => {
        try {

        } catch (error) {
            alert(error)
        }
    };


    return (

        <FormLayout isDefaultHeader={true}>
            <FormPageHeader
                formHeading="Welcome back seri"
                formSubHeading="Login to your account to access your profile 😀"
            />

            <form onSubmit={handleSubmit(onSubmit)}>

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

                <SubmitButton mt={8} withIcon buttonName="Login" />
                <Box mb={6} mt={3} fontSize=".9rem" color="gray.600">
                    <Link href="/signup">Dont have an account? Signup</Link>
                </Box>

            </form>
        </FormLayout>

    )
}


// export async function getServerSideProps(ctx: NextPageContext) {
Page.getInitialProps = async (ctx: NextPageContext) => {

    if (Auth.redirectIfAuthenticated(ctx, '/')) {
        return {};
    }

    return {}

}