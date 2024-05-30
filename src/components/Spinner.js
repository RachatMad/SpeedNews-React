import React, { Component } from 'react'
import loading from './loading.gif'

export class spinner extends Component {
  render() {
    return (
      <div className='text-center '>
       <img src={loading} alt="loading" width="10%" height="10%"  />
      </div>
    )
  }
}

export default spinner
