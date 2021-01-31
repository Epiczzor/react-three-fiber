import PropTypes from 'prop-types';


const ShapesButton = ({ shape, addFunction }) => {
    return (
        <div>
            <button onClick={()=>addFunction(shape)}>{shape}</button>
        </div>
    );
};


ShapesButton.defaultProps = {
    shape: "sphere"
};

ShapesButton.propTypes = {
    shape: PropTypes.string.isRequired,
    addFunction: PropTypes.func.isRequired,
};

export default ShapesButton
