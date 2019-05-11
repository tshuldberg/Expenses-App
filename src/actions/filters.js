// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});

// SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',

});

// SET_START_DATE
export const setStartDate = (newStartDate) => ({
  type: 'SET_START_DATE',
  newStartDate
});

// SET_END_DATE
export const setEndDate = (newEndDate) => ({
  type: 'SET_END_DATE',
  newEndDate
});
