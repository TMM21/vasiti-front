import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import NavBar from '../component/nav'
import ProductList from '../component/ProductList'

const style = (theme) => ({
  image: {
    background: 'url(../asset/back.jpg)',
  },
})

function Home(props) {
  const { classes } = props
  return (
    <>
      {' '}
      <NavBar />
      <ProductList />
    </>
  )
}

export default withStyles(style)(Home)
