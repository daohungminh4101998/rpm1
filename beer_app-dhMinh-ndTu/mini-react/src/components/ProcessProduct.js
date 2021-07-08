import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { ButtonToggle } from "reactstrap";
import axios from 'axios'
import * as BEERAPP from './../utils/index';
import { useHistory } from 'react-router-dom';

function ProcessProduct(props) {

    const [fakeApi, setFakeApi] = useState([])
    async function getBeerById() {
        try {
            const response = await axios.get(`${BEERAPP.BASE_URL}`, {
                headers: {
                    Accept: "*/*",
                }
            });
            setFakeApi(response.data)

        } catch (error) {
            console.error(error);
        }

    }
    useEffect(() => {
        getBeerById()

    }, [])

    const hendleReject = (idOrder) => {
        //completed
        alert('reject' + idOrder)
    }
    let history = useHistory();

    const handleComPlete = (idOrder) => {
        const sendData = {
            "id": idOrder,
            "href": null,
            "nameProduct": "Bia Hà Nội tu client",
            "price": 100000000000,
            "cancellationDate": null,
            "cancellationReason": null,
            "category": null,
            "completionDate": null,
            "description": null,
            "expectedCompletionDate": null,
            "externalId": null,
            "notificationContact": null,
            "orderDate": null, //ISO 8601 2021-07-07T02:40:09.541Z
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
            // "orderTotalPrice": null,
            "orderTotalPrice": [

                {
                    "@baseType": "string",
                    "@schemaLocation": null,
                    "@type": "string",
                    "billingAccount": {
                        "@baseType": "string",
                        "@referredType": "string",
                        "@schemaLocation": null,
                        "@type": "string",
                        "href": "string",
                        "id": "string",
                        "name": "string"
                    },
                    "description": "string",
                    "name": "string",
                    "price": {
                        "@baseType": "string",
                        "@schemaLocation": null,
                        "@type": "string",
                        "dutyFreeAmount": {
                            "unit": "string",
                            "value": 0
                        },
                        "percentage": 0,
                        "taxIncludedAmount": {
                            "unit": "string",
                            "value": 0
                        },
                        "taxRate": 0
                    },
                    "priceAlteration": null,
                    "priceType": "string",
                    "productOfferingPrice": {
                        "@baseType": "string",
                        "@referredType": "string",
                        "@schemaLocation": null,
                        "@type": "string",
                        "href": "string",
                        "id": "string",
                        "name": "string"
                    },
                    "recurringChargePeriod": "string",
                    "unitOfMeasure": "string"
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
            "state": "completed",//inProgress
            "@baseType": null,
            "@schemaLocation": null,
            "@type": "BeerOrder"
        }

        axios.post(`${BEERAPP.BASE_URL}`, sendData)
            .then(function (response) {
                // console.log(response);
                if (response.status == 200) {
                    alert('ORDER THANH CONG')

                } else {
                    alert('ORDER THAT BAI')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    const renderOrder = fakeApi.length > 0 ? fakeApi.map((item, index) => {
        if (item.state == 'inProgress') {

            return (
                <tbody>
                    <tr>
                        <th scope="row">{item.id}</th>
                        <td>{item.category}</td>
                        <td>{item.productOrderItem[0] != undefined ? item.productOrderItem[0].quantity : ""}</td>
                        <td></td>

                        <td>{item.orderDate}</td>

                        <td>{item.state}</td>

                        <td style={{ textAlign: 'center' }}>        <ButtonToggle onClick={() => handleComPlete(item.id)} color="success">Duyet</ButtonToggle>{' '}</td>

                        <td style={{ textAlign: 'center' }}>        <ButtonToggle onClick={() => hendleReject(item.id)} color="danger">Tu choi</ButtonToggle>{' '}</td>
                    </tr>
                </tbody>
            )
        } else {
            return false
        }

    }) : []

    return (
        <Table>
            <thead>
                <tr>
                    <th colSpan={3}>danh sach order</th>

                </tr>
            </thead>
            <thead>
                <tr>
                    <th>ID ORDER</th>
                    <th>ten sp</th>
                    <th>so luong</th>
                    <th>gia</th>

                    <th>ngay order</th>
                    <th>trang thai</th>
                    <th colSpan={2} style={{ textAlign: 'center' }}>duyet</th>
                </tr>
            </thead>
            {renderOrder}

        </Table>
    );
}

export default ProcessProduct;