import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class TodoTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: this.props.text || '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleSubmit(e) {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({ text: '' })
      }
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  handleBlur(e) {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value)
    }
  }

  render() {
    return (
      <input className={
        classnames({
          edit: this.props.editing,
          'new-todo': this.props.newTodo
        })}
        type="text"
        placeholder={this.props.placeholder}
        autoFocus="true"
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit} />
    )
  }
}

TodoTextInput.propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool
}
