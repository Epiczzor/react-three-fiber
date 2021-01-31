import { Box, Sphere, Cylinder } from '@react-three/drei'
import PropTypes from 'prop-types'


const GeomentrySphere = ({ position, args, color, deleteFunction, id }) => {
    id = parseInt(id);
    return (
        <Sphere key={id} position={position} args={[1, 50]} onClick={() => deleteFunction(id)}>
            {/* onClick={() => deleteFunction(id)} */}
            {/* onClick={deleteFunction} */}
            <meshBasicMaterial attach="material" color={color} />
        </Sphere>
    )
}


const GeomentryBox = ({ position, args, color, deleteFunction, id }) => {
    return (
        <Box key={id} position={position} onClick={() => deleteFunction(id)}>
            <meshBasicMaterial attach="material" color={color} />
        </Box>
    )
}


const GeomentryCylinder = ({ position, args, color, deleteFunction, id }) => {
    return (
        <Cylinder key={id} position={position} args={[1, 1, 1, 32]} onClick={() => deleteFunction(id)}>
            <meshBasicMaterial attach="material" color={color} />
        </Cylinder>
    )
}

// default config
GeomentrySphere.defaultProps =
    GeomentryBox.defaultProps =
    GeomentryCylinder.defaultProps =
    {
        color: "black"
    };

GeomentrySphere.propTypes =
    GeomentryBox.propTypes =
    GeomentryCylinder.propTypes =
    {
        color: PropTypes.string.isRequired,
    };

export { GeomentrySphere, GeomentryBox, GeomentryCylinder };
