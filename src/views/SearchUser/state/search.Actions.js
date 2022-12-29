
import constants from './search.Constants';

const beginSearch = (wordToSearch) => {
  return {
    type: constants.BEGIN_SEARCH,
    value: wordToSearch
  }
}

const loadData = (datas) => {
  return {
    type: constants.LOAD_DATA,
    value: datas
  }
}

const errorLoadingData = (errors) => {
  return {
    type: constants.ERROR_LOADING_DATA,
    value: errors
  }
}

const nextPage = (level) => {
  return {
    type: constants.NEXT_PAGE,
    level:level
  }
}

const lastPage = (level) => {
  return {
    type: constants.LAST_PAGE,
    level:level
  }
}

const jumpToPage = (pageNumber,level) => {
  return {
    type: constants.JUMP_TO_PAGE,
    value: pageNumber,
    level:level
  }
}

export  {
  beginSearch,
  loadData,
  errorLoadingData,
  nextPage,
  lastPage,
  jumpToPage,
}