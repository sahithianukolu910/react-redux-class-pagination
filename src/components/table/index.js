import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../../actions";
import "./dataTable.css";

class DataTable extends Component {
  render() {
    const { data, currentPage, pagesize } = this.props;
    const pageStartIndex = (currentPage - 1) * pagesize;
    const derivedData = data.slice(pageStartIndex, pageStartIndex + pagesize);
    return (
      <div>
        <table className="table-container">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>MobileNumber</th>
            </tr>
          </thead>
          <tbody>
            {derivedData.map((dataItem) => {
              return (
                <tr>
                  <td>{dataItem.name}</td>
                  <td>{dataItem.email}</td>
                  <td>{dataItem.mobileNumber}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.pagination.data,
    currentPage: state.pagination.currentPage,
    pagesize: state.pagination.pagesize,
  };
};

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

export default connect(mapStateToProps)(DataTable);
