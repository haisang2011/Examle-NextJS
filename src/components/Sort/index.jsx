import React from 'react'
import PropTypes from 'prop-types'
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

function Sort({ direction }) {
    if(direction === "desc"){
        return (
            <div style={{ display: "flex", alignItems: "center", }}>
                <h4>Sort by ID </h4>
                <BiChevronDown style={{ fontSize: "28px" }} />
            </div>
        )
    }else if (direction === "asc"){
        return (
            <div style={{ display: "flex", alignItems: "center", }}>
                <h4>Sort by ID </h4>
                <BiChevronUp style={{ fontSize: "28px" }} />
            </div>
        )
    }
}

Sort.propTypes = {

}

export default Sort

