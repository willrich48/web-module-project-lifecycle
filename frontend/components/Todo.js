import React from 'react'

export default class Todo extends React.Component {
  render() {
    return(
      <div>
      <a href='#' onClick={()=>this.props.onClick(this.props.id)}>
        {this.props.name}{this.props.completed === true ? '===completed' : null}</a>
      </div>
  
     )
  }
}
