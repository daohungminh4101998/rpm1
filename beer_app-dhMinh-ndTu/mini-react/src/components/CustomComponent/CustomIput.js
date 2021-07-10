import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const CustomIput = ({ ...rest }) => {
    const { forLabel, name, valueInput, placeholder, type, infoProduct, setInfoProduct } = rest;
    const [stateName, setStateName] = useState('');
    const handleSetInput = (e) => {
        setInfoProduct({ ...infoProduct, [e.target.name]: e.target.value })
    }
    return (
        <FormGroup>
            <Label for="exampleText">{forLabel}</Label>
            <Input value={infoProduct[name]} onChange={handleSetInput} type={type} name={name} id="exampleText" placeholder={placeholder} />
        </FormGroup>
    )
}

export default CustomIput;