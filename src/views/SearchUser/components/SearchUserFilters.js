import { useState, useEffect } from 'react';
import { Input, Text, Grid ,InputGroup,InputLeftElement,Select,Box} from '@chakra-ui/react';
import { Search2Icon} from '@chakra-ui/icons'

import { beginSearchName } from '../state/searchUser.Actions';
import useDebounce from './useDebeounce'

const SearchUserFilters = ({ searchUserDispatch }) => {

  const [name, setName] = useState("");

  const debouncedSearchTerm = useDebounce(name, 250)

  useEffect(() => {
    searchUserDispatch(beginSearchName(debouncedSearchTerm));
  }, [debouncedSearchTerm, searchUserDispatch])

  return  (    
    <Box w='95%'>
      <Grid  templateColumns='.7fr 1.6fr 5fr' >
          <Text  fontSize='xl' >ค้นหา</Text>
          <Text  fontSize='xl' bgGradient='linear(to-r, teal.500, green.500)'  fontWeight='extrabold' bgClip='text'>พุทธสุภาษิต</Text>
      </Grid>
      <Grid templateColumns='6fr 2fr' gap={2}  mt={2} mb={2}>
          <InputGroup >
            <InputLeftElement pointerEvents='none' children={<Search2Icon color='gray.300' />} />
            <Input type='text' placeholder='อตฺตาหิ ...' focusBorderColor='teal.300' value={name} onChange={e => setName(e.target.value)}/>
          </InputGroup>
          <Select placeholder='ทั้งหมด ' fontSize='1rm' borderRadius={0}>
            <option value='option1'>ตรี</option>
            <option value='option2'>โท</option>
            <option value='option3'>เอก</option>
          </Select>
      </Grid>
    </Box>
  )
}

export default SearchUserFilters;