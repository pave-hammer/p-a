import React, { Component } from 'react';

class DataList extends Component {
  render() {
    const appList = this.props.applist
    console.log("applist", appList)
    return (
      <div>
        Hello!
      </div>
    )
  }
}

export default DataList;