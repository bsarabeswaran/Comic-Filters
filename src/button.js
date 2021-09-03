import { Button , withStyles } from '@material-ui/core';

const StyledButton = withStyles({
    root: {
        background: 'linear-gradient(45deg, #28313B 30%, #485461 90%)',
        borderRadius: 3,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(200, 200, 135, .3)',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

export default StyledButton;