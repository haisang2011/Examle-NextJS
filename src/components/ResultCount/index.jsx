import React from 'react'
import PropTypes from 'prop-types'

function ResultCount(props) {
    return (
        <div style={{ fontWeight: 'bolder', fontSize: '1.5rem', margin: '25px', fontStyle: 'italic' }}>
            Amount filter : { props.amount }
        </div>
    )
}

ResultCount.propTypes = {

}

export default ResultCount

