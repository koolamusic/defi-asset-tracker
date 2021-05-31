/**
 * @name Fields
 * This will be the Fields Hook that extends input functionality into chakra form fields for react-hook-form
 */

import React from 'react'
import styled from '@emotion/styled'
import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputProps,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

type RefReturnType =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | any
type RHInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string
  register: ({ required }: { required?: boolean }) => RefReturnType
  withAction?: boolean
  actionIcon?: React.ReactElement
  actionHandler?: () => void
}

const InputLabel = styled(FormLabel)<{ fsize?: string }>`
  font-size: ${(props) => (props.fsize ? props.fsize : '11px')};
  transition: ease-in 0.2s;
  padding-right: 10px;
`

const TextInput = styled(Input)<InputProps>`
  border-radius: 4px;
  min-height: 3rem;
  width: 100%;
  font-size: 16px;
  ::placeholder,
  ::-moz-placeholder {
    font-size: 16px;
    vertical-align: middle;
  }
`

export const InputField: React.FC<RHInputProps> = (props): JSX.Element => {
  const {
    type,
    name,
    placeholder,
    withAction,
    actionIcon,
    actionHandler,
    label,
    register,
    required,
    ...rest
  } = props

  return (
    <div>
      <InputLabel
        id={[name, 'label'].join('-')}
        htmlFor={[name, 'input'].join('-')}
        color="blue.600"
        mt="3"
      >
        {label}
      </InputLabel>
      <InputGroup size="lg">
        <TextInput
          {...rest}
          type={type || 'text'}
          ref={register({ required })}
          name={name}
          variant="outline"
          id={[name, 'input'].join('-')}
          placeholder={placeholder}
          focusBorderColor="blue.500"
          borderColor="blue.500"
          errorBorderColor="red.500"
          size="lg"
        />
        {withAction && (
          <InputRightElement width="4.5rem" pt="1">
            <IconButton
              variant="outline"
              mb={1}
              size="sm"
              isRound
              aria-label="Reveal Password"
              icon={actionIcon}
              onClick={actionHandler}
            />
          </InputRightElement>
        )}
      </InputGroup>
    </div>
  )
}

export const PasswordField = (props: RHInputProps): JSX.Element => {
  const { name, placeholder, label, register, required } = props
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <FormControl mt="3" position="relative">
      <InputLabel
        id={[name, 'label'].join('-')}
        htmlFor={[name, 'input'].join('-')}
        color="blue.600"
      >
        {label}
      </InputLabel>
      <InputGroup size="lg">
        <TextInput
          type={show ? 'text' : 'password'}
          variant="outline"
          ref={register({ required })}
          id={name}
          name={name}
          placeholder={placeholder}
          focusBorderColor="blue.500"
          borderColor="blue.500"
          errorBorderColor="red.500"
          size="lg"
        />
        <InputRightElement width="4.5rem" pt="1">
          <IconButton
            variant="outline"
            size="sm"
            mb={1}
            isRound
            aria-label="Reveal Password"
            icon={show ? <ViewIcon /> : <ViewOffIcon />}
            onClick={handleClick}
          />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  )
}
