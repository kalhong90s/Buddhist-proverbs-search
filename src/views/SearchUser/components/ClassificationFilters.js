import { Menu ,MenuButton,IconButton,MenuList,MenuItem,Grid} from '@chakra-ui/react';
import { HamburgerIcon} from '@chakra-ui/icons'


const ClassificationFilters = () => {


  const classifications = ["อัตตวรรค","ทุกขวรรค","วาจาวรรค","อัปปมาทวรรค","ธัมมวรรค","วิริยวรรค","กัมมวรรค","ปกิณกวรรค","เวรวรรค","กิเลสวรรค","ปัญญาวรรค","สัจจวรรค","โกธวรรค","ปมาทวรรค","สติวรรค","ขันติวรรค","ปาปวรรค","สัทธาวรรค","จิตตวรรค","ปุคคลวรรค","สันตุฏฐิวรรค","ชยวรรค","ปุญญวรรค","สมณวรรค","ทานวรรค","มัจจุวรรค","สามัคคีวรรค","มิตตวรรค","สีลวรรค","ยาจนาวรรค","สุขวรรค","ราชวรรค","เสวนาวรรค"]

  return  (    
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon />}
        variant='outline'
      />
      <MenuList >
        <Grid templateColumns='repeat(3, 1fr)'>
          {classifications.map(classification=>{
            return(
              <MenuItem key={classification} fontSize="sm"  onClick={() => {
              }}>{classification}
              </MenuItem>                  
            )                  

          })}
        </Grid>
      </MenuList>
    </Menu>
  )
}

export default ClassificationFilters;