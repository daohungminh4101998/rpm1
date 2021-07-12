import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import fakeimg from '../assets/img/fake.jpg';
import * as BEERAPP from './../utils/index';
import axios from 'axios'
import Https from '../service/Https';


function ProductDetails(props) {
    let location = useLocation();
    // console.log(location)
    let listOrder = location.state.dataOrder;
    console.log(location)

    let resultListOrder = listOrder.map((item, index) => {
        return {
            "description": item.category,
            "name": item.category,
            "priceType": "one time",
            "state": "inProgress",//inProgress
            "price": {
                "taxRate": 16.0,
                "dutyFreeAmount": {
                    "unit": "VND",
                    "state": "inProgress",//inProgress
                    "value": 1213333
                },
                "taxIncludedAmount": {
                    "unit": "VND",
                    "state": "inProgress",//inProgress
                    "value": 1410000
                }
            },
            "state": "inProgress",//inProgress
        }
    })
    const [fakeApi, setFakeApi] = useState([])
    const [stateData, setStateData] = useState([])
    async function getBeerById() {
        try {
            const response = await axios.get(`${BEERAPP.BASE_URL}`, {
                headers: {
                    Accept: "*/*",
                }
            });
            const slug = match.params.slug
            const resultDetails = response.data.filter((itemFind, index) => {
                return itemFind.id == slug
            })
            setStateData(resultDetails)
            // setFakeApi(response.data)
        } catch (error) {
            console.error(error);
        }


    }
    const [countBeer, setCountBeer] = useState(1)
    const [priceTamp, setPriceTamp] = useState(25000)
    let match = useRouteMatch("/products/:slug");
    useEffect(() => {
        getBeerById()
        // const slug = match.params.slug
        // const resultDetails = fakeApi.filter((itemFind, index) => {
        //     return itemFind.id == slug
        // })
        // setStateData(resultDetails)
    }, [])
    const handleCount = (mark) => {
        if (mark == '-') {
            setCountBeer(countBeer - 1)
            if (countBeer == 1) {
                setCountBeer(1)
            }
        }
        else if (mark == '+') {
            setCountBeer(countBeer + 1)
        }
    }
    const totalPrice = countBeer * priceTamp;
    let history = useHistory();
    const orderBeer = (indexOrderB, quantity) => {
        const orderNow = Date.now();
        var dateobj = new Date(orderNow);
        var convertDateISO = dateobj.toISOString();
        const fakeIDcustom = '0000099999'
        const sendData = {
            "id": fakeIDcustom,
            "href": null,
            "cancellationDate": null,
            "cancellationReason": null,
            "category": null,
            "completionDate": null,
            "description": null,
            "expectedCompletionDate": null,
            "externalId": null,
            "notificationContact": null,
            "orderDate": convertDateISO, //ISO 8601 2021-07-07T02:40:09.541Z
            "priority": null,
            "requestedCompletionDate": null,
            "requestedStartDate": null,
            "agreement": null,
            "billingAccount": null,
            "channel": null,
            "note": [
                {
                    "id": fakeIDcustom,
                    "author": "DAO HUNG MINH",
                    "date": null,
                    "text": "http://www.tesst.com",
                    "@baseType": null,
                    "@schemaLocation": null,
                    "@type": "Note"
                }
            ],
            "orderTotalPrice": resultListOrder,
            "productOrderItem": [
                {
                    "id": "Tiger-123",
                    "quantity": quantity - countBeer,
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
                                    "value": priceTamp * countBeer,
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
            "state": "inProgress",//inProgress
            "@baseType": null,
            "@schemaLocation": null,
            "@type": "BeerOrder"
        }
        axios.post(`${BEERAPP.BASE_URL}`, sendData)
            .then(function (response) {
                // console.log(response);
                // console.log(response)
                if (response.status == 200) {
                    // history.push('/CartProduct')

                    history.push({
                        pathname: '/CartProduct',
                        state: { listOrder: sendData }
                    })
                    alert('ORDER THANH CONG')
                } else {
                    alert('ORDER THAT BAI')
                }
            })
            .catch(function (error) {
                console.log(error);
            });


    }
    const authFakeLocal = localStorage.getItem('user');

    // console.log(fakeApi)
    return (
        <>

            <h1>THÔNG TIN ĐƠN HÀNG {authFakeLocal}</h1>
            <div className="wrap-product-details-app">
                {stateData.map((itemOrder, index) => {
                    // console.log(itemOrder)
                    var quantity = itemOrder.productOrderItem[0] == undefined ? 1 : itemOrder.productOrderItem[0].quantity
                    // console.log(itemOrder)
                    return (
                        <div key={index} className="wrap-product-details">
                            <div className="main_product">
                                <div className="img-product">
                                    <img src={fakeimg} />
                                </div>
                                {/* <div className="img-product">
                                </div> */}
                                <h2 className="title-beer">
                                    {itemOrder.category}
                                </h2>
                                <div className="sell-out">
                                    <div className="sell-out-left">50+ đã bán</div>
                                    <span className="line"></span>
                                    <div className="sell-out-left">4 thích</div>
                                </div>
                                <div className="price_quantity">
                                    <div className="price_quantity-left">
                                        {priceTamp * countBeer}

                                    </div>

                                    <div className="price_quantity-right">
                                        <button onClick={() => { handleCount('-') }} className="decrement-count">-</button>
                                        <h3 className="number-count">{countBeer}</h3>
                                        <button onClick={() => { handleCount('+') }} className="increment-count" >+</button>

                                    </div>

                                </div>

                                <div className="text_infor">
                                    <div className="name_number">Mark Han - 0123456789</div>
                                    <div className="address">Tân Mỹ, Mỹ Đình, Nam Từ Niêm, Hà Nội</div>
                                </div>
                                <div className="quantity">
                                    <div>Tổng (1 phần)</div>
                                    <div className="tong">25000</div>
                                </div>
                                <div className="fee_ship">
                                    <div>Phí giao hàng</div>
                                    <div>15000</div>
                                </div>
                                <div className="voucher">
                                    <div>Icon here</div>
                                    <div>Khuyến mại</div>
                                    {/* <input>Nhập mã</input> */}
                                </div>
                                <div className="total">
                                    <div>Tổng cộng</div>
                                    <div>31000</div>
                                </div>
                                <div className="payment">
                                    <button onClick={() => { orderBeer(itemOrder.id, quantity) }}
                                        className="payment-button">
                                        Đặt hàng
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {/* <div className="wrap-product-details">
                <div className="img-product">
                    <img src={fakeimg} />
                </div>
                <div className="img-product">
                </div>
                <h2 className="title-beer">
                    Bia Heniken
                </h2>
                <div className="sell-outr">
                    <span className="border-right mr-1">50 + đã bán</span>
                    <span>4 thích</span>
                </div>
                <div className="price d-flex justify-content-between">
                    <span className="price">25.000  <br />
                        SIZE M
                    </span>

                    <div className="count-product d-flex">
                        <button className="decrement-count">-</button>
                        <h3 className="number-count">1</h3>
                        <button className="increment-count" >+</button>

                    </div>
                </div>
                <div className="payment border-top d-flex justify-content-between">
                    <div className="payment-left">
                        25.000d <br />
                        SIZE M
                    </div>
                    <div className="payment-left">
                        GIAO HANG
                    </div>
                </div>
            </div> */}
            </div>

        </>

    );
}

export default ProductDetails;
