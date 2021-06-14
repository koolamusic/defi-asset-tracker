import React from 'react'
import {
  Button,
  Modal,
  ModalBody,
  ModalContentProps,
  ModalOverlay,
  ModalHeader,
  Input,
  ModalCloseButton,
  FormControl,
  FormLabel,
  useDisclosure,
  ModalContent,
} from '@chakra-ui/react'

interface IFormModalProps extends ModalContentProps {
  isOpen: boolean
  modalHeading: string
  onClose: () => void
  initialRef?: React.MutableRefObject<IFormModalProps>
  component: React.FC | React.ComponentType
}

export const ModalComponent: React.FC = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef<HTMLElement>(null)
  const finalRef: React.ComponentPropsWithRef<any> = React.useRef<HTMLElement>(null)

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Button ml={4} ref={finalRef}>
        I&apos;ll receive focus on close
      </Button>

      <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input placeholder="First name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export const FormModal = (props: IFormModalProps): JSX.Element => {
  const { isOpen, onClose, modalHeading, component: Component } = props

  const initialRef = React.useRef(null)

  return (
    <Modal
      // preserveScrollBarGap
      // isCentered
      initialFocusRef={initialRef}
      isOpen={isOpen}
      isCentered
      size="lg"
      scrollBehavior="outside"
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent borderRadius="10px" width="max-content">
        <ModalHeader as="h1" fontSize="1.4rem" fontFamily="heading" fontWeight="500">
          {modalHeading}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Component {...props} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
