
import { useReducer, useEffect} from 'react';
import { Flex, Text, Link, Box, Divider } from '@chakra-ui/react';
import { ExternalLinkIcon ,Search2Icon} from '@chakra-ui/icons'

import SearchUserFilters from './components/SearchUserFilters';
import SearchUserList from './components/SearchUserList';
import { searchUserReducer, searchUserInitialState } from './state/searchUser.Reducer';
import { loadUserData } from './state/searchUser.Actions';
//import api from './api';

function SearchUserView() {

  const [searchUserState, searchUserDispatch] = useReducer(searchUserReducer, searchUserInitialState);

  useEffect(() => {
    // api.loadUserData()
    //   .then(({ status, data }) => {

    //     if (!status) {
    //       searchUserDispatch(errorLoadingData("Something wrong with the API"))
    //     }

    //     const usersWithNormalizedName = data.users.map(user => ({ ...user, normalizedName: user.firstName.toLowerCase() }))
        
    //     searchUserDispatch(loadUserData(usersWithNormalizedName))
    //   })
    //   .catch(error => searchUserDispatch(errorLoadingData(error)))      

      const data = require('./data.json')
      console.log(data)
      const usersWithNormalizedName = data.users.map(user => ({ ...user, normalizedName: user.firstName.toLowerCase() }))
        
      searchUserDispatch(loadUserData(usersWithNormalizedName))

  }, [])

  return (
    <Flex direction="column" m={4} align="center"  maxWidth="lg" >
      <SearchUserFilters searchUserState={searchUserState} searchUserDispatch={searchUserDispatch} />
      <SearchUserList searchUserState={searchUserState} searchUserDispatch={searchUserDispatch} />
      <Divider mt={2} />
      <Box mt={10} mb={3}>
        <Text fontSize="xl">What is this?</Text>
        <Text fontSize="sm" mt={2}>
          Project made to demonstrate my skills with React, useReducer, pagination and project organization.
        </Text>
        <Text fontSize="sm" mt={2}>
          Current behavior is to call <Link href="https://random-persons.herokuapp.com/users" isExternal>an external API <ExternalLinkIcon mx="2px" /></Link> that returns 100k user objects and to paginate, search and display the results in a list manner. My solution include the usage of a debouncer hook to only filter the in-memory content at 250ms intervals.
        </Text>
        <Text fontSize="sm" mt={2}>
          <Link href="https://github.com/pedr/people-search-100k" isExternal>Source code <Search2Icon mx="2px" /></Link>
        </Text>
      </Box>

    </Flex>
  );
}

export default SearchUserView;