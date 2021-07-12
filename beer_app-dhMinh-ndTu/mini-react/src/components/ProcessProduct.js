import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { ButtonToggle } from "reactstrap";
import axios from 'axios'
import * as BEERAPP from './../utils/index';
import { useHistory } from 'react-router-dom';
function ProcessProduct(props) {
    const [fakeApi, setFakeApi] = useState([])
    const [show, setShow] = useState(false);
    const [idShow, setIdShow] = useState(null);
    const [updateState, setUpdateState] = useState("")
    let history = useHistory();
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

    }, [updateState])

    const hendleReject = (idOrder) => {

        props.handleUpdateState(idOrder)


    }
    let location = {
        pathname: `/CartProduct`,
        query: { dev: '1' }
    };

    const handleComPlete = (idOrder, itemArr) => {
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
            "orderTotalPrice": itemArr,
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
                if (response.status === 200) {
                    alert('ORDER THANH CONG')
                    setUpdateState(response.data.id)

                } else {
                    alert('ORDER THAT BAI')
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    const handleShowItem = (itemId) => {
        setIdShow(itemId)
        setShow(!show)


    }
    const renderOrder = fakeApi.length > 0 ? fakeApi.map((item, index) => {
        if (item.state === 'inProgress') {
            if (item.orderTotalPrice != null) {
                return (
                    <tbody>
                        <tr>
                            <th scope="row" onClick={() => { handleShowItem(item.id) }}>{show == true && idShow == item.id ? 'hide' : 'show'}</th>

                            <th scope="row">{item.id}</th>
                            <td>{item.category}</td>
                            <td>{item.productOrderItem[0] !== undefined ? item.productOrderItem[0].quantity : 1}</td>
                            <td></td>

                            <td>{item.orderDate}</td>

                            <td>{item.state}</td>

                            <td style={{ textAlign: 'center' }}>        <ButtonToggle onClick={() => handleComPlete(item.id, item.orderTotalPrice)} color="success">Duyet</ButtonToggle>{' '}</td>

                            <td style={{ textAlign: 'center' }}>        <ButtonToggle onClick={() => hendleReject(item.id)} color="danger">Tu choi</ButtonToggle>{' '}</td>
                        </tr>
                        {
                            show === true && idShow === item.id && item.orderTotalPrice != null ? item.orderTotalPrice.map((itemSub, index) => {
                                return (
                                    <tr>
                                        <th scope="row" onClick={handleShowItem}></th>
                                        <td></td>
                                        <td>{itemSub.description}</td>
                                        <td>{item.productOrderItem[0] != undefined ? item.productOrderItem[0].quantity : 1} </td>
                                        <td>1</td>
                                        <td>{item.orderDate}</td>
                                        <td>{item.state}</td>
                                    </tr>
                                )
                            })
                                : null
                        }

                    </tbody>
                )
            }

        } else {
            return false
        }

    }) : []

    return (
        <Table bordered>
            <thead>
                <tr>
                    <th colSpan={3}>danh sach order</th>

                </tr>
            </thead>
            <thead>
                <tr>
                    <th>show</th>

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