import { PaginationConstants } from "../constants/pagination.constants";

export const PaginationActions = {
  updateCurrentPage,
  goToPreviousPage,
  goToNextPage,
};

function updateCurrentPage(pageNumber) {
  return { type: PaginationConstants.UPADE_CURREN_PAGE, payload: pageNumber };
}

function goToPreviousPage() {
  return { type: PaginationConstants.GET_PREVIOUS_PAGE };
}

function goToNextPage() {
  return { type: PaginationConstants.GET_NEXT_PAGE };
}
