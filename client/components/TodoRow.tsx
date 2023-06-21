import { useState, useEffect } from 'react'

function TodoRow(props) {
  const [completed, setCompleted] = useState(props.rowObject.completed)

  useEffect(() => {})

  return (
    <>
      <div
        className="block"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        key={props.rowObject.id}
      >
        <div
          onClick={() => {
            props.handleUpdateTodo(props.rowObject.id, !completed)
            setCompleted(!completed)
          }}
          style={{
            height: '20px',
            width: '20px',
            backgroundColor: `${completed ? 'blue' : 'red'}`,
          }}
          className="check"
        ></div>

        <p style={{ display: 'inline-block' }}>{props.rowObject.todo}</p>
        <button
          className="delete is-medium"
          onClick={() => props.handleDeleteTodo(props.rowObject.id)}
          style={{ display: 'inline-block' }}
        >
          x
        </button>
      </div>
    </>
  )
}

export default TodoRow
