import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let input;

const mapDispatchToProps = dispatch => {
    return {
      onSubmit: e => {
        e.preventDefault()

        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }
    }
};

let AddTodo = ({ onSubmit }) => {
  return (
    <div>
      <form onSubmit={ onSubmit }>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect(null, mapDispatchToProps)(AddTodo)

export default AddTodo
