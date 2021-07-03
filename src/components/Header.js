import React from 'react'
import PropTypes from 'prop-types'


const Header = ({ title }) => {
    return (
        <header style={headerStyling}>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker App'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headerStyling = {
    color: 'white',
    backgroundColor: 'grey'
}

export default Header
