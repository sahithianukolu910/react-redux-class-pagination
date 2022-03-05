import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../../actions";
import { range } from "../../utils/range";
import "./pagination.css";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paginationRanges: [],
    };
  }
  componentDidMount() {
    const paginationRanges = this.getPaginationRanges();
    this.setState({ paginationRanges });
  }
  componentDidUpdate(prevProps) {
    const { totalrecords, currentPage, pagesize, subIndex = 1 } = this.props;
    if (
      totalrecords != prevProps.totalrecords ||
      currentPage != prevProps.currentPage ||
      pagesize != prevProps.pagesize
    ) {
      const paginationRanges = this.getPaginationRanges();
      this.setState({ paginationRanges });
    }
  }
  updateCurrentPage = (pageNumber) => {
    this.props.updateCurrentPage(pageNumber);
  };

  goToPreviousPage = () => {
    this.props.goToPreviousPage();
  };

  goToNextPage = () => {
    this.props.goToNextPage();
  };
  getPaginationRanges = () => {
    const { totalrecords, currentPage, pagesize, subIndex = 1 } = this.props;
    const totalPages = Math.ceil(totalrecords / pagesize);
    if (totalPages < 5 + subIndex) {
      return range(1, totalPages);
    }
    const leftSubIndex = Math.max(1, currentPage - subIndex);
    const rightSubIndex = Math.min(totalPages, currentPage + subIndex);

    const showLeftdots = leftSubIndex > 2;

    const showRightsdots = rightSubIndex < totalPages - 2;

    if (showLeftdots && !showRightsdots) {
      const rightRanges = range(
        totalPages - (3 + 2 * subIndex) + 1,
        totalPages
      );
      return [1, -1, ...rightRanges];
    }
    if (!showLeftdots && showRightsdots) {
      const leftRanges = range(1, 3 + 2 * subIndex);
      return [...leftRanges, -1, totalPages];
    }
    const middleRanges = range(leftSubIndex, rightSubIndex);
    return [1, -1, ...middleRanges, -1, totalPages];
  };

  render() {
    const { paginationRanges } = this.state;
    const { totalrecords, currentPage, pagesize, subIndex = 1 } = this.props;
    const totalPages = Math.ceil(totalrecords / pagesize);
    return (
      <ul className="navigation-container">
        <li
          key="left"
          className={`navigation-item ${currentPage == 1 ? "diabled" : ""}`}
          onClick={this.goToPreviousPage}
        >
          &lt;
        </li>
        {paginationRanges.map((pageNumber, i) => {
          if (pageNumber == -1) {
            return (
              <li key={i} className="navigation-dots dots">
                &#8230;
              </li>
            );
          }
          return (
            <li
              key={i}
              className={`navigation-item ${
                currentPage === pageNumber ? "selected" : ""
              }`}
              onClick={() => this.updateCurrentPage(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
        <li
          key="right"
          className={`navigation-item ${
            currentPage == totalPages ? "diabled" : ""
          }`}
          onClick={this.goToNextPage}
        >
          &gt;
        </li>
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    totalrecords: state.pagination.totalrecords,
    currentPage: state.pagination.currentPage,
    pagesize: state.pagination.pagesize,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    updateCurrentPage: (pageNumber) => {
      dispatch(actions.updateCurrentPage(pageNumber));
    },
    goToPreviousPage: () => {
      dispatch(actions.goToPreviousPage());
    },
    goToNextPage: () => {
      dispatch(actions.goToNextPage());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
