import PropTypes from 'prop-types'

const Button = ({ color, text}) => {
    return (
        <button style={{ backgroundColor: color}}
        className='btn'>
            {text}
        </button>
    )
}

Button.defaultProps = {
    text: 'Add',
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string

}

export default Button
