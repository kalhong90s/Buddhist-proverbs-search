
import { 
  Text, 
  Flex, 
  List,
  Grid,
  Input,
  Button,
  Divider,
  ListItem, 
} from '@chakra-ui/react';

import { nextPage, lastPage, jumpToPage} from '../state/searchUser.Actions';

function SearchUserList({ searchUserState, searchUserDispatch }) {

  const forward = () => {
    searchUserDispatch(nextPage())
  }

  const backward = () => {
    searchUserDispatch(lastPage())
  }

  const handleCurrentPageInput = e => {
    const pageNumber = e.target.value;

    searchUserDispatch(jumpToPage(pageNumber))
  }

  const handleToLastPage = () => {
    searchUserDispatch(jumpToPage(searchUserState.pagination.maxPage))
  }

  return (
    <Grid templateRows="1fr" mt={2}>
      <List spacing={1}>
        {
          searchUserState.pagination.data.map(user => {
            return (
              <ListItem key={`${user.firstName}${user.age}`}>
                <Text>
                  {user.firstName}   {user.lastName}
                </Text>
                <Text>
                  {user.firstName}   {user.lastName}
                </Text>
                <Flex align="center">
                  <Text fontSize="xs" m={1} opacity={0.5}>Age: </Text>
                  <Text fontSize="sm" opacity={0.8}>{user.age}</Text>
                </Flex>
                <Flex align="center">
                  <Text fontSize="xs" m={1} opacity={0.5}>Age: </Text>
                  <Text fontSize="sm" opacity={0.8}>{user.age}</Text>
                </Flex>
                <Flex align="center">
                  <Text fontSize="xs" m={1} opacity={0.5}>Age: </Text>
                  <Text fontSize="sm" opacity={0.8}>{user.age}</Text>
                </Flex>
                <Divider />
            </ListItem>
            );
          })
        }
      </List>
      <Grid templateColumns="1fr 3fr 2fr 1fr" gap={1} mt={3}>
        <Button size="xs" colorScheme="teal" onClick={backward}>ย้อนกลับ</Button>
        <Flex align="center" justify="center">
          <Text fontSize="xs" opacity={0.8} mr={1}>หน้าปัจจุบัน: </Text>
          <Input 
            maxWidth={50}
            size="xs"
            type="number"
            minvalue={searchUserState.pagination.minPage}
            maxvalue={searchUserState.pagination.maxPage}
            value={searchUserState.pagination.currentPage}
            onChange={handleCurrentPageInput}
          />
        </Flex>
        <Flex align="center" justify="end">
          <Text fontSize="xs" opacity={0.8} mr={1}>หน้าทั้งหมด:</Text>
          <Button 
            onClick={handleToLastPage}
            size="xs"
            minWidth="50" 
          >{searchUserState.pagination.maxPage}</Button>
        </Flex>
        <Button size="xs" colorScheme="teal" onClick={forward}>หน้าถัดไป</Button>
      </Grid>
    </Grid>
  )
}

export default SearchUserList;