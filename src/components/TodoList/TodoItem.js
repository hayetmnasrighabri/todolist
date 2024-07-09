import React from 'react'

function TodoItem(props) {
    const {items, Deleteitem}=props
    const ListItems = items.map(item =>{
       return (
        <div key={item.id}>
          <span>{item.name}</span>
          <span>{item.Age}</span>
          <span onClick={()=>Deleteitem(item.id)}>&times;</span>
        </div>
       )
})
  return (
    <div>
     <h2>List items</h2>
     {ListItems}
     
    </div>
  )
}

export default TodoItem
