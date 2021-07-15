import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { useRouteMatch } from "react-router-dom";
import { Alert, Button, Form } from 'reactstrap';
// import fakeimg from '../assets/img/fake.jpg';
import * as BEERAPP from './../utils/index';
import CustomIput from './CustomComponent/CustomIput'
import Https from '../service/Https';
import { FormGroup, Label, Input } from 'reactstrap';


function ProductDetails(props) {
    const [infoProduct, setInfoProduct] = useState(
        {
            nameProduct: '',
            desProduct: '',
            imgUpload: ''
        }
    )
    const [flagState, setFlagState] = useState(false)
    // const [imgUpload, setImgUpload] = useState('')
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

        addProductList();
    }
    async function addProductList() {

        await Https.post(`${process.env.REACT_APP_API_URL}`, BEERAPP.sendData(infoProduct.nameProduct, infoProduct.desProduct));
        setFlagState(true)
        setInfoProduct({
            nameProduct: '',
            desProduct: '',
            priceProduct: 0,
            imgUpload: ''
        })

    }

    const handleUploadImg = (e) => {
        // let files = e.target.files;
        setInfoProduct({ ...infoProduct, [e.target.name]: e.target.files[0].name })
    }
    return (
        <div className="add-product-app">
            {flagState ? <Alert color="success">
                them thanh cong
            </Alert> : ''}
            <h1>them san pham</h1>
            <CustomIput setInfoProduct={setInfoProduct} infoProduct={infoProduct} forLabel="Tên sản phẩm" name="nameProduct" type="text" valueInput="valueInput" placeholder="Nhập tên sản phẩm" />
            <CustomIput setInfoProduct={setInfoProduct} infoProduct={infoProduct} forLabel="Số lượng sản phẩm" name="priceProduct" type="number" valueInput="valueInput" placeholder="Nhập sl sản phẩm" />
            <CustomIput setInfoProduct={setInfoProduct} infoProduct={infoProduct} forLabel="Mô tả sản phẩm" name="desProduct" type="textarea" valueInput="valueInput" placeholder="Mô tả sản phẩm" />
            {/* <CustomIput forLabel="Hinh anh" name="imgUpload" setInfoProduct={setInfoProduct} infoProduct={infoProduct} type="file" /> */}
            <FormGroup>
                <Label for="exampleText">them hinh anh</Label>
                <Input name='imgUpload' type="file" onChange={handleUploadImg} />
            </FormGroup>
            <Form>
                <Button onClick={() => addProducts()}>Thêm sản phẩm</Button>
            </Form>
        </div>
    );
}

export default ProductDetails;