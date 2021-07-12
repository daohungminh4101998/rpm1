import React, { useState } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const CustomIput = ({ ...rest }) => {
    const { forLabel, name, placeholder, type, infoProduct, setInfoProduct } = rest;
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