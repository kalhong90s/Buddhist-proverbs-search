import { useState, useEffect } from 'react';
import { Input, Text, Grid ,InputGroup,InputLeftElement,Box} from '@chakra-ui/react';
import { Search2Icon} from '@chakra-ui/icons'

import { beginSearchName } from '../state/searchUser.Actions';
import useDebounce from './useDebeounce'
import SerchClassificationFilters from './SerchClassificationFilters';
const SearchUserFilters = ({ searchUserDispatch }) => {

  const [name, setName] = useState("");

  const debouncedSearchTerm = useDebounce(name, 250)

  useEffect(() => {
    searchUserDispatch(beginSearchName(debouncedSearchTerm));
  }, [debouncedSearchTerm, searchUserDispatch])



    return  (    
    <Box w='97%'mt={2} mb={2}>
      <Grid  templateColumns='1.5fr 2fr' >
          <Text  fontSize='4xl' bgGradient='linear(to-r, teal.500, green)'  fontWeight='extrabold' bgClip='text'>พุทธสุภาษิต</Text>
      </Grid>
      <Grid templateColumns='1fr' gap={2}  mt={2} mb={2}>
          <InputGroup >
            <InputLeftElement pointerEvents='none' children={<Search2Icon color='gray.300' />} />
            <Input type='text' placeholder='อตฺตาหิ ...' focusBorderColor='teal.300' value={name} onChange={e => setName(e.target.value)}/>
          </InputGroup>
          <SerchClassificationFilters/>

      </Grid>
    </Box>
  )
}

export default SearchUserFilters;