import React from 'react'
import PropTypes from 'prop-types'
import styleCard from './card.module.css';

function Card({ user }) {

    return (
        <div className={styleCard.card}>
            <div className={styleCard.card__userId}>
                User ID: { user.id }
            </div>
            <div className={styleCard.card__id}>
                Name: { user.name }
            </div>
            <div className={styleCard.card__title}>
                Username: { user.username }
            </div>
            <div className={styleCard.card__userId}>
                Email: { user.email }
            </div>
            <div className={styleCard.card__id}>
                Phone: { user.phone }
            </div>
            <div className={styleCard.card__title}>
                Website: { user.website }
            </div>
            <div className={styleCard.card__completed}>
                Company: { user.company.name ? "Done" : "Yet Done" }
            </div>
        </div>
    )
}

Card.propTypes = {

}

export default Card

