import React from 'react'
import PropTypes from 'prop-types'
import styleCard from './todo.module.css';

function Todo({ todos }) {

    return (
        <div className={styleCard.card}>
            <div className={styleCard.card__userId}>
                User ID: { todos.userId }
            </div>
            <div className={styleCard.card__id}>
                Todo ID: { todos.id }
            </div>
            <div className={styleCard.card__title}>
                Title: { todos.title }
            </div>
            <div className={styleCard.card__userId}>
                Completed: { todos.completed ? <span className={styleCard.card__userId__span__done}>Done</span> : <span className={styleCard.card__userId__span__yet}>Yet</span> }
            </div>
        </div>
    )
}

Todo.propTypes = {

}

export default Todo

