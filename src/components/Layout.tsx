import React from 'react';
import { Main } from './Main'
import { Wrapper } from './Container'
import { Header } from './Header';
import { styleConstants } from '../theme'
import { Button, ButtonProps } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons'


export interface IPageLayout {
    children: React.ReactNode;
    wrapperBox?: string | number;
    isDefaultHeader?: boolean;
}


interface ISubmitButton extends ButtonProps {
    buttonName?: string;
    analyticName?: string;
    type: 'submit' | 'button' | 'reset';
    isLoading?: boolean;
    withIcon?: boolean | undefined;
}



export const FormLayout = (props: IPageLayout): JSX.Element => {
    return (
        <React.Fragment>
            {/* <Header isDefault={props.isDefaultHeader} /> */}
            <Wrapper
                marginTop={styleConstants.fixedMarginTop}
                padding={props.wrapperBox || styleConstants.paddingWrapper}
                width="100%"
                alignItems="flex-start"
                height="100%"
            >
                {/* === section to render the form ==== */}
                <Main
                    width={["100%", "30rem"]}
                    bg={['inherit', 'white']}
                    margin={'auto'}
                    my="10"
                    px={[2, 10]}
                    py={8}
                    alignItems="center"
                    border={["none", styleConstants.defaultBorder]}
                    justifyContent="center"
                    boxShadow={["none", styleConstants.lightShadow]}
                    borderRadius={styleConstants.defaultRadius}
                >
                    {props.children}
                </Main>
            </Wrapper>
        </React.Fragment>
    );
};


export const SubmitButton: React.FC<ISubmitButton> = (props) => {
    const { withIcon, isLoading, type, buttonName, ...rest } = props;
    return (
        <Button
            borderRadius="4px"
            fontWeight="700"
            alignContent="center"
            minH="3rem"
            justifyContent={props.withIcon ? 'space-between' : 'center'}
            colorScheme="blue"
            type={type ?? "submit"}
            isLoading={isLoading}
            rightIcon={(withIcon && <ArrowForwardIcon />) || <ArrowForwardIcon />}
            width="100%"
            {...rest}
        >
            {buttonName}
        </Button>
    );
};