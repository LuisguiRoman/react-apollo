import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './styles';

export const SubmitButton = ({children, onClick}) => (
    <Button onClick={onClick}>{children}</Button>
);

SubmitButton.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired
};