import React from 'react'
import PropTypes  from 'prop-types'

export const RestCounter = ({onRestPress}) => {
    return(
        <button
            onClick={onRestPress}>
            -1
        </button>
    )
}

RestCounter.propTypes={
    onRestPress:PropTypes.func.isRequired
}