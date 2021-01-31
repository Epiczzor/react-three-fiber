import { Box, Sphere, Cylinder } from '@react-three/drei'
import PropTypes from 'prop-types'


const GeomentrySphere = ({ position, args, color }) => {
    return (
        <Sphere position={position} args={[1, 50]} >
            <meshBasicMaterial attach="material" color={color}  />
        </Sphere>
    )
}


const GeomentryBox = ({ position, args, color }) => {
    return (
        <Box position={position} >
            <meshBasicMaterial attach="material" color={color} />
        </Box>
    )
}


const GeomentryCylinder = ({ position, args, color }) => {
    return (
        <Cylinder position={position} args={[1, 1, 1, 32]}>
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

export  {GeomentrySphere, GeomentryBox, GeomentryCylinder};
