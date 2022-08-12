import React from 'react'

export default class Form extends React.Component {
  render() {
    return(
      <>
      <form onSubmit={this.props.onSubmit}>
        <input
        type='text'
        value={this.props.text} 
        onChange={this.props.onChange}
        />
        <button>Submit</button>
      </form>
      <button onClick={this.props.hideCompleted}>{this.props.displayCompleted ? 'show' : 'hide'}</button>
      </>
    )
  }
}
