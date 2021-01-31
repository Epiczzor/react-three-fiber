import PropTypes from 'prop-types';


const ColorsButton = ({color}) => {
    return (
        <div>
            <button>{color}</button>
        </div>
    );
};

ColorsButton.defaultProps ={
    color : "red"
};

ColorsButton.propTypes ={
    color : PropTypes.string.isRequired,
};

export default ColorsButton
