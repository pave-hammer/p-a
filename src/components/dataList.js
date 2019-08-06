import React, { Component } from 'react';

class DataList extends Component {
  render() {
    const testMess = this.props.appList

    return (
      <div>
        {testMess}
      </div>
    )
  }
}

export default DataList;