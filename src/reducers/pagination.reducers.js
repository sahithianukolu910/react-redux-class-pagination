import { PaginationConstants } from "../constants/pagination.constants";
import { date } from "./mockData";

const initialState = {
  totalrecords: date.length,
  currentPage: 1,
  pagesize: 10,
  subIndex: 1,
  data: date,
};
function pagination(state = initialState, action) {
  switch (action.type) {
    case PaginationConstants.UPADE_CURREN_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case PaginationConstants.GET_NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case PaginationConstants.GET_PREVIOUS_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    default:
      return state;
  }
}
export default pagination;
