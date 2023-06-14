import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'

function List() {
  const dispatch = useAppDispatch()
  //const todos = useAppSelector((state) => state.todos)

  //useEffect(() => {dispatch(fetchTodos()) }, [])

  return (
    <>
      <div>
        <p>This will be the list</p>
      </div>
    
    
    </>
  )

}

export default List