import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { ButtonToggle } from "reactstrap";
import axios from 'axios'
import * as BEERAPP from './../utils/index';
import { ExportCSV } from './ExportCSV';
function ProcessProduct(props) {
    const [fakeApi, setFakeApi] = useState([])
    const [show, setShow] = useState(false);
    const [idShow, setIdShow] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [updateState, setUpdateState] = useState("")
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

    const handleComPlete = (idOrder, itemArr) => {
        const sendData = {
            "id": idOrder,
            "href": null,
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
                    // setSaveorderExcel(response.data)

                } else {
                    alert('ORDER THAT BAI')
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    const handleShowItem = (itemId) => {
        setIsOpen(!isOpen)
        setIdShow(itemId)
        setShow(!show)
    }

    function convertDate(valueData) {
        var date = new Date(valueData);
        return date.getDate() + '-' + (date.getMonth() + 1 <= 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`) + '-' + date.getFullYear();//prints expected format.
    }
    let arrArrtamp = []

    const exportCompleted = fakeApi.filter((item) => {
        return item.state === "completed"
    })
    const exportReject = fakeApi.filter((item) => {
        return item.state === "deleted"
    })
    const renderOrder = fakeApi.length > 0 ?
        fakeApi
            .filter((itemFilter) => {
                return itemFilter.state === 'inProgress' && itemFilter.orderTotalPrice !== null
            })

            .map((item, index) => {
                arrArrtamp.push(item)
                return (
                    <tbody key={index}>
                        <tr >
                            <th scope="row" onClick={() => { handleShowItem(item.id) }}>{show === true && idShow === item.id ? 'hide' : 'show'}</th>
                            <th scope="row">{item.id}</th>
                            <td>{item.category}</td>
                            <td>{item.productOrderItem[0] !== undefined ? item.productOrderItem[0].quantity : 1}</td>
                            <td></td>

                            <td>{convertDate(item.orderDate)}</td>

                            <td>{item.state}</td>

                            <td style={{ textAlign: 'center' }}>        <ButtonToggle onClick={() => handleComPlete(item.id, item.orderTotalPrice)} color="success">Duyet</ButtonToggle>{' '}</td>

                            <td style={{ textAlign: 'center' }}>        <ButtonToggle onClick={() => hendleReject(item.id)} color="danger">Tu choi</ButtonToggle>{' '}</td>
                        </tr>
                        {
                            show === true && idShow === item.id && item.orderTotalPrice != null ? item.orderTotalPrice.map((itemSub, index) => {


                                return (

                                    <tr key={index} >
                                        <th scope="row" onClick={handleShowItem}></th>
                                        <td></td>
                                        <td>{itemSub.description}</td>
                                        <td>{item.productOrderItem[0] !== undefined ? item.productOrderItem[0].quantity : 1} </td>
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
            }) : []
    return (
        <>
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

                <ExportCSV csvData={exportCompleted} fileName="demoexcel" />

            </Table>

        </>

    );
}

export default ProcessProduct;