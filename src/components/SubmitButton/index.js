import React from 'react';

import { Button } from './styles';

export const SubmitButton = ({children, onClick}) => (
    <Button onClick={onClick}>{children}</Button>
);