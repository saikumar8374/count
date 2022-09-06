import './index.css'

const TodoList = props => {
  const {todoList} = props
  const {title} = todoList

  return (
    <li className="text-button-container ">
      <p className="text">{title}</p>

      <button type="button" className="button">
        Delete
      </button>
    </li>
  )
}
export default TodoList
