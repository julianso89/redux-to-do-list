import React, { Component } from "react";
import { connect } from 'react-redux';
import { getSingleItem } from '../actions';

class ViewItem extends Component {

componentDidMount(){
    console.log('view item props:', this.props.match.params.item_id);

    this.props.getSingleItem(this.props.match.params.item_id);
}

  render() {
    console.log('Item:', this.props.item)

    return (
      <div>
        <h1 className="center">View Item</h1>
      </div>
    );
  }
}

function mapStateToProps(state){
    return {
        item: state.list.single
    }
}

export default connect(mapStateToProps, {
    getSingleItem: getSingleItem
})(ViewItem);
