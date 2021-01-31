import React from 'react'
import PropTypes from 'prop-types'

function SearchInput({ ...rest }) {
    return (
        <input
            type="text"
            placeholder="Filter by Name, by Username, by Email"
            {...rest}
            style={{
                width: "30vw",
                height: "8vh",
                background: "#bbdfc8",
                fontSize: "18px",
                border: "none",
                outline: "none",
            }}
        />
    )
}

SearchInput.propTypes = {

}

export default SearchInput

