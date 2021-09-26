import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getproduct } from '../redux/action/dataAction'

class ProductList extends Component {
  componentDidMount() {
    this.props.getproduct()
  }

  render() {
    console.log(this.props.product)
    return <div></div>
  }
}
const mapStateToProps = (state) => ({
  product: state.data,
})
const mapActionToProp = {
  getproduct,
}
export default connect(mapStateToProps, mapActionToProp)(ProductList)
