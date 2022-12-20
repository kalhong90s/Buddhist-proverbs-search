import { Grid ,Link,Box,Accordion,AccordionItem,AccordionButton,AccordionPanel} from '@chakra-ui/react';
import { AddIcon,MinusIcon} from '@chakra-ui/icons'


const SerchClassificationFilters = () => {

  const classifications = ["อัตตวรรค","ทุกขวรรค","วาจาวรรค","อัปปมาทวรรค","ธัมมวรรค","วิริยวรรค","กัมมวรรค","ปกิณกวรรค","เวรวรรค","กิเลสวรรค","ปัญญาวรรค","สัจจวรรค","โกธวรรค","ปมาทวรรค","สติวรรค","ขันติวรรค","ปาปวรรค","สัทธาวรรค","จิตตวรรค","ปุคคลวรรค","สันตุุฏฐิวรรค","ชยวรรค","ปุญญวรรค","สมณวรรค","ทานวรรค","มัจจุวรรค","สามัคคีวรรค","มิตตวรรค","สีลวรรค","ยาจนาวรรค","สุขวรรค","ราชวรรค","เสวนาวรรค"]

  return  (    
    <Accordion allowMultiple>
    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                วรรค
              </Box>
              {isExpanded ? (
                <MinusIcon fontSize='12px' />
              ) : (
                <AddIcon fontSize='12px' />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Grid templateColumns='repeat(5, 1fr)'>
                {classifications.map(classification=>{
                  return(
                    <Link key={classification} fontSize="sm" _hover={{ color: "teal.700", textDecoration :'underline' }} onClick={() => {
                      console.log(classification)
                      
                    }}>{classification}
                    </Link>
                    
                  )                  

                })}
            </Grid>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  </Accordion>
  )
}

export default SerchClassificationFilters;