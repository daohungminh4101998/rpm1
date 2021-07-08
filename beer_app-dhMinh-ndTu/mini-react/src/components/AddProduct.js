import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import { useRouteMatch } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import fakeimg from '../assets/img/fake.jpg';
import axios from 'axios';
import * as BEERAPP from './../utils/index';

import * as BEER from './CallApi'
ProductDetails.propTypes = {

};

function ProductDetails(props) {
    const [infoProduct, setInfoProduct] = useState(
        {
            nameProduct: '',
            desProduct: '',
        }
    )
    const sendData = {
        "id": null,
        "href": null,
        "nameProduct": "Bia Hà Nội tu client",
        "price": 100000000000,
        "cancellationDate": null,
        "cancellationReason": null,
        "category": infoProduct.nameProduct,
        "completionDate": null,
        "description": infoProduct.desProduct,
        "expectedCompletionDate": null,
        "externalId": null,
        "notificationContact": null,
        "orderDate": null,
        "priority": null,
        "requestedCompletionDate": null,
        "requestedStartDate": null,
        "agreement": null,
        "billingAccount": null,
        "channel": null,
        "note": [
            {
                "id": "333333333333333",
                "author": null,
                "date": null,
                "text": "http://www.tesst.com",
                "@baseType": null,
                "@schemaLocation": null,
                "@type": "Note"
            }
        ],
        "orderTotalPrice": null,

        "productOrderItem": [

            {
                "id": infoProduct.nameProduct,
                "description": infoProduct.desProduct,
                "quantity": infoProduct.priceProduct,
                "action": "noChange",
                "payment": null,
                "productOffering": null,
                "product": {
                    "id": "Tiger-123",
                    "name": "vvv 214",
                    "place": null,
                    "relatedParty": null
                },
                "itemPrice": [
                    {
                        "name": null,
                        "priceType": "one time",
                        "description": "beer",
                        "priceAlteration": [],
                        "price": {
                            "taxRate": 19,
                            "percentage": 0,
                            "dutyFreeAmount": {
                                "value": 2500000,
                                "unit": "VND"
                            },
                            "taxIncludedAmount": {
                                "value": 25000,
                                "unit": "VBD"
                            }
                        }
                    }
                ]
            }
        ],
        "payment": null,
        "productOfferingQualification": null,
        "quote": [
            {
                "validFor": null,
                "state": null,
                "note": null,
                "lastStateChangedDate": null,
                "id": "00000007",
                "href": null,
                "name": "BIA ORDER-DEMO",
                "@baseType": null,
                "@schemaLocation": null,
                "@type": "QuoteRef",
                "@referredType": null
            }
        ],
        "state": "acknowledged",
        "@baseType": null,
        "@schemaLocation": null,
        "@type": "BeerOrder"
    }

    const addProducts = () => {
        axios.post(`${BEERAPP.BASE_URL}`, sendData)
            .then(function (response) {
                console.log(response);
                if (response.status == 200) {
                    alert('them thanh cong')
                } else {
                    alert('them that bai')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        setInfoProduct({
            nameProduct: '',
            desProduct: '',
            priceProduct: 0
        })
    }
    const handleInfoProduct = (e) => {
        setInfoProduct({ ...infoProduct, [e.target.name]: e.target.value })
    }
    // console.log(infoProduct)
    return (
        <div className="add-product-app">
            <Form>
                <FormGroup>
                    <Label for="exampleEmail"> Tên sản phẩm</Label>
                    <Input value={infoProduct.nameProduct} onChange={handleInfoProduct} type="text" name="nameProduct" id="exampleEmail" placeholder="Nhập tên sản phẩm" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Mô tả sản phẩm</Label>
                    <Input value={infoProduct.desProduct} onChange={handleInfoProduct} type="textarea" name="desProduct" id="exampleText" />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleText">Số lượng sản phẩm</Label>
                    <Input value={infoProduct.priceProduct} onChange={handleInfoProduct} type="number" name="priceProduct" id="exampleText" />
                </FormGroup>
                {/*
                <FormGroup>
                    <Label for="exampleText">Giá sản phẩm</Label>
                    <Input value={infoProduct.desProduct} onChange={handleInfoProduct} type="textarea" name="desProduct" id="exampleText" />
                </FormGroup> */}

                <Button onClick={addProducts}>Thêm sản phẩm</Button>
            </Form>
        </div>
    );
}

export default ProductDetails;