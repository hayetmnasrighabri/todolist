import React, { Component } from 'react'
import TodoItem from './components/TodoList/TodoItem'
import AddItem from './components/AddItem/AddItem' 
class App extends Component {
  state={
    items:[
      {id:1, name:'Hamza', Age:22},
      {id:2, name:'Mohamed', Age:23},
      {id:3, name:'Abdo', Age:24}
    ]
  }
    Deleteitem=(id)=>{
      let items= this.state.items
      let i= items.findIndex(item =>item.id===id)
      items.splice(i,1) 
      this.setState({items})

    }
   render() {
    return (
      <div>
        <h2>TodoList App</h2>
        <TodoItem items={this.state.items} Deleteitem={this.Deleteitem}/>        
        <AddItem/>
      </div>
    )
  }
}

export default App
