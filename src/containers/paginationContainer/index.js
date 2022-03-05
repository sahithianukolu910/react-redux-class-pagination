import React, { Component } from "react";
import { connect } from "react-redux";

import Pagination from "../../components/pagination";
import TableComponent from "../../components/table";
import { actions } from "../../actions";
//  import "./App.css";

class PaginationContainer extends Component {
  // increment = () => {
  //   this.props.increment();
  // };

  // decrement = () => {
  //   this.props.decrement();
  // };

  render() {
    return (
      <div className="App">
        <TableComponent />
        <Pagination />
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     number: state.sample.number,
//   };
// };

// function mapDispatchToProps(dispatch) {
//   return {
//     increment: () => {
//       dispatch(actions.increment());
//     },
//     decrement: () => {
//       dispatch(actions.decrement());
//     },
//   };
// }
export default PaginationContainer;
//export default connect(mapStateToProps, mapDispatchToProps)(PaginationContainer);
