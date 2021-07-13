import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { useRouteMatch } from "react-router-dom";
import { Button, Form } from 'reactstrap';
// import fakeimg from '../assets/img/fake.jpg';
import axios from 'axios';
import * as BEERAPP from './../utils/index';
import CustomIput from './CustomComponent/CustomIput'
import Https from '../service/Https';


function ProductDetails(props) {
    const [infoProduct, setInfoProduct] = useState(
        {
            nameProduct: '',
            desProduct: '',
        }
    )
    // const sendData = {
    //     "id": null,
    //     "href": null,
    //     "nameProduct": "Bia Hà Nội tu client",
    //     "price": 100000000000,
    //     "cancellationDate": null,
    //     "cancellationReason": null,
    //     "category": 'haha',
    //     "completionDate": null,
    //     "description": 'haha',
    //     "expectedCompletionDate": null,
    //     "externalId": null,
    //     "notificationContact": null,
    //     "orderDate": null,
    //     "priority": null,
    //     "requestedCompletionDate": null,
    //     "requestedStartDate": null,
    //     "agreement": null,
    //     "billingAccount": null,
    //     "channel": null,
    //     "note": [
    //         {
    //             "id": "333333333333333",
    //             "author": null,
    //             "date": null,
    //             "text": "http://www.tesst.com",
    //             "@baseType": null,
    //             "@schemaLocation": null,
    //             "@type": "Note"
    //         }
    //     ],
    //     "orderTotalPrice": null,
    //     "payment": null,
    //     "productOfferingQualification": null,
    //     "quote": [
    //         {
    //             "validFor": null,
    //             "state": null,
    //             "note": null,
    //             "lastStateChangedDate": null,
    //             "id": "00000007",
    //             "href": null,
    //             "name": "BIA ORDER-DEMO",
    //             "@baseType": null,
    //             "@schemaLocation": null,
    //             "@type": "QuoteRef",
    //             "@referredType": null
    //         }
    //     ],
    //     "state": "acknowledged",
    //     "@baseType": null,
    //     "@schemaLocation": null,
    //     "@type": "BeerOrder"
    // }


    const addProducts = () => {
        // axios.post(`${BEERAPP.BASE_URL}`, sendData)
        //     .then(function (response) {
        //         if (response.status === 200) {
        //             alert('them thanh cong')

        //         } else {
        //             alert('them that bai')
        //         }
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        addProductList();
    }
    async function addProductList() {
        const addPro = await Https.post(`${BEERAPP.BASE_URL}`, BEERAPP.sendData(infoProduct.nameProduct, infoProduct.desProduct));
        alert('thanh cong')
        setInfoProduct({
            nameProduct: '',
            desProduct: '',
            priceProduct: 0
        })
    }
    const addProducts1 = () => {

    }

    // console.log(infoProduct)
    return (
        <div className="add-product-app">
            <h1>them san pham</h1>
            <CustomIput setInfoProduct={setInfoProduct} infoProduct={infoProduct} forLabel="Tên sản phẩm" name="nameProduct" type="text" valueInput="valueInput" placeholder="Nhập tên sản phẩm" />
            <CustomIput setInfoProduct={setInfoProduct} infoProduct={infoProduct} forLabel="Số lượng sản phẩm" name="priceProduct" type="number" valueInput="valueInput" placeholder="Nhập sl sản phẩm" />
            <CustomIput setInfoProduct={setInfoProduct} infoProduct={infoProduct} forLabel="Mô tả sản phẩm" name="desProduct" type="textarea" valueInput="valueInput" placeholder="Mô tả sản phẩm" />
            <Form>
                {/* <FormGroup>
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
                </FormGroup> */}
                {/*
                <FormGroup>
                    <Label for="exampleText">Giá sản phẩm</Label>
                    <Input value={infoProduct.desProduct} onChange={handleInfoProduct} type="textarea" name="desProduct" id="exampleText" />
                </FormGroup> */}

                <Button onClick={() => addProducts()}>Thêm sản phẩm</Button>

                <Button onClick={() => addProducts1()}>Thêm sản phẩm1</Button>
            </Form>
        </div>
    );
}

export default ProductDetails;