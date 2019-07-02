import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FILTER,
  SEARCH_TEXT
} from './productActions';

const initialState = {
  items: [],
  filtered: [],
  loading: false,
  error: null,
  text: ""
};

export default function productReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.products
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
    case SEARCH_TEXT: 
    return{
      ...state,
      text: action.payload
    }
    case FILTER: 
      return {
        ...state,
        text: state.text,
        filtered: state.items.filter((item) => item.name.toLowerCase().indexOf(state.text.toLowerCase()) !== -1 )
      }
    default:
      return state;
  }
}

