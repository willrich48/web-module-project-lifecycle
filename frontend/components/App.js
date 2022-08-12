import React from 'react'
import axios from 'axios'
import Form from './Form'
import TodoList from './TodoList'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      text: '',
      displayCompleted: true
    }
  }

  componentDidMount() {
    axios.get(URL)
      .then(res => this.setState({ ...this.state, data: res.data.data })
      )
      .catch(err => console.log(err))
  }

  onSubmit = e => {
    e.preventDefault()
    const payloadToSend = { name: this.state.text, completed: this.state.data.completed }
    axios.post(URL, payloadToSend)
    .then(res => {
      this.setState({...this.state, data: [...this.state.data, res.data.data]})
    })
  }

  onClick = id => {
    axios.patch(`${URL}/${id}`)
    .then(res => {
      this.setState({...this.state, data: this.state.data.map(e => {
        if(e.id !== id ) return e
        return res.data.data
      }) })
    })
  }

  onChange = e => {
    this.setState({...this.state, text: e.target.value})
  }

  filterCompleted = () => {
    this.setState({
      ...this.state, data: this.state.data.filter(e => !e.completed
      )
    })
  }

  hideCompleted = () => {
    this.setState({ ...this.state, displayCompleted: !this.state.displayCompleted })
  }
  render() {
    return (
      <div>
        <h1>Chores &#128543;</h1>
        <TodoList
          theData={this.state.data} 
          onClick={this.onClick}
          displayCompleted={this.state.displayCompleted}
          />
        <Form
          theData={this.state.data}
          innerText={this.state.text}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          hideCompleted={this.hideCompleted}
          displayCompleted={this.state.displayCompleted}
          />
      </div>
    )
  }
  }

