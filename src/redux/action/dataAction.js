import { GET_ERROR, GET_PRODUCT } from '../type'
import axios from 'axios'

export const getproduct = () => async (dispatch) => {
  try {
    const product = await axios.get('/product')
    dispatch({ type: GET_PRODUCT, payload: product.data.data })
    return
  } catch (err) {
    if (err.response === undefined) {
      dispatch({ type: GET_ERROR, payload: 'Network Error' })
      return null
    }
    dispatch({ type: GET_ERROR, payload: err.response.data.message })
  }
}
