import { ModalOverlay, Button ,Modal,ModalContent,ModalHeader,ModalCloseButton,ModalBody,ModalFooter,Text,useDisclosure,Link} from '@chakra-ui/react';
import { useState} from 'react';


function BackdropDetail({ object }) {
    const OverlayOne = () => (
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )

  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = useState(<OverlayOne />)


    return (
      <>
        <Link fontSize="xs" opacity={0.8} color="teal.500" _hover={{ color: "teal.700", textDecoration :'underline' }}  onClick={() => {
            setOverlay(<OverlayOne />)
            onOpen()
          }}>รายละเอียด...
          </Link>

        <Modal scrollBehavior="inside" isCentered isOpen={isOpen} onClose={onClose}  size="lg">
          {overlay}
          <ModalContent>
            
            <ModalHeader bgGradient='linear(to-r, teal.500, blue.600)' bgClip='text' > {object.proverbs.toString()} </ModalHeader>
            <ModalHeader fontSize="md">{object.meaning}</ModalHeader>

            <ModalCloseButton />
            <ModalBody>
              <Text>{object.details}</Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default BackdropDetail;