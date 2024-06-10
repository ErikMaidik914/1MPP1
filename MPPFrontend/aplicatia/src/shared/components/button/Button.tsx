import './Button.css';

import { ButtonProps } from '../../../types/ButtonProps.types';

export function Button(props: ButtonProps) {
    const buttonStyles = {
        backgroundColor: props.color,
    };

    return (
        <button
            type={props.type}
            className={'button' + ' ' + (props.className ? props.className : '')}
            onClick={props.onClick}
            data-testid={props.data_test_id ? props.data_test_id : 'button-test-id'}
            style={buttonStyles}
        >
            {props.buttonMessage}
        </button>
    );
}

export default Button;