import { useState, useEffect } from 'react';
import { Input, Text, Grid ,InputGroup,InputLeftElement,Box} from '@chakra-ui/react';
import { Search2Icon} from '@chakra-ui/icons'
import { beginSearchName } from '../state/searchUser.Actions';
import useDebounce from './useDebeounce'
import ClassificationFilters from './ClassificationFilters';
import DarkMode from './DarkMode';

const SearchInputFilters = ({ searchUserDispatch }) => {

  const [name, setName] = useState("");

  const debouncedSearchTerm = useDebounce(name, 250)

  useEffect(() => {
    searchUserDispatch(beginSearchName(debouncedSearchTerm));
  }, [debouncedSearchTerm, searchUserDispatch])



    return  (    
    <Box w='97%'mt={2} mb={2} >
      <Grid  templateColumns='1.5fr 2fr' >
          <Text  fontSize='4xl' bgGradient='linear(to-r, teal.500, blue.600)' bgClip='text' as='b'>พุทธสุภาษิต</Text>
          <Box  align='end'>
          <DarkMode/>
          </Box>
      </Grid>
      <Grid templateColumns='1fr 7fr' gap={2} mt={2} mb={2}>
          <ClassificationFilters/>
          <InputGroup >
            <InputLeftElement pointerEvents='none' children={<Search2Icon color='gray.300' />} />
            <Input type='text' placeholder='อตฺตา หิ ...' focusBorderColor='teal.300' value={name} onChange={e => setName(e.target.value)}/>
          </InputGroup>

      </Grid>
    </Box>
  )
}

export default SearchInputFilters;