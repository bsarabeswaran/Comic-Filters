import {Button , withStyles} from '@material-ui/core';

const SmallStyledButton = withStyles({
    root: {
        background: 'linear-gradient(45deg, #28313B 30%, #485461 90%)',
        color: 'white',
        height: 24,
        boxShadow: '0 3px 5px 2px rgba(200, 200, 135, .3)',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

export default SmallStyledButton;