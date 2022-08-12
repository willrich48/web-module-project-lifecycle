import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    console.log(this.props.theData)
    return (
      <>
            {
              this.props.theData.map(e => 
             {return !this.props.displayCompleted || !e.completed ? <Todo
                  key={e.id}
                  id={e.id}
                  name= {e.name}
                  completed={e.completed}
                  onClick={this.props.onClick}
                /> : <div key={e.id}></div>}
              )

                }
      </>
    )}} 
  

