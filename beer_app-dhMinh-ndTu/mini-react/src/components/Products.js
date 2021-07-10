import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {
    Button, Form, FormGroup, Label, Input, FormText, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,
} from 'reactstrap';
import * as BEERAPP from './../utils/index';
import fakeimg from '../assets/img/fake.jpg';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useHistory,
    // Redirect,
    // useHistory,
    // useLocation
} from "react-router-dom";

Products.propTypes = {

};


// ACKNOWLEDGED("acknowledged"),

//   REJECTED("rejected"),

//   PENDING("pending"),

//   HELD("held"),

//   INPROGRESS("inProgress"),

//   ARCHIVED("archived"),

//   CANCELLED("cancelled"),

//   COMPLETED("completed"),

//   DELAYED("delayed"),

//   DELETED("deleted"),

// INPROCESS("inProcess"),

// REVOKED("revoked"),

// SCHEDULED("scheduled)"
function Products(props) {
    const [fakeApi, setFakeApi] = useState([])
    const [arrItemOrder, setArrItemOrder] = useState([])
    let history = useHistory()
    //export const BASE_URL = "http://codetrau.com:8082/order/beerOrders"

    const addProduct = () => {

    }
    const { match } = props;
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

    function truncate(str) {
        if (str != null) {
            if (str.length >= 50) {
                var myTruncatedString = str.substring(0, 50) + "...";
                return myTruncatedString
            }
            else {
                return str
            }
        } else {
            return 'chua co mo ta ve san pham nay...'
        }
    }
    var dataArr = []

    const handleOrderBeer = async (indexBeer, itemBeer) => {
        dataArr.push(itemBeer)
        // var result = await new Promise((res) => {
        //     res(dataArr)
        // })
        setArrItemOrder([...arrItemOrder, itemBeer])

    }
    const styleLineHeight = {
        height: '50px',
        lineHeight: '50px'
    }
    const handleNav = (itemOrderBeer) => {
        history.push({
            state: { data: arrItemOrder }
        })
    }
    //console.log(arrItemOrder)
    const renderData = fakeApi.map((itemBeer, index) => {
        if (itemBeer.state == "acknowledged") {
            return (
                <Card key={index} className="mb-3">
                    <CardImg top width="318px" height="180px" src={fakeimg} alt="Card image cap" />
                    <CardBody>
                        <NavLink arrItemOrder={arrItemOrder} to={{
                            // `/products/${itemBeer.id}`
                            pathname: `/products/${itemBeer.id}`,
                            state: { dataOrder: arrItemOrder.length > 0 ? arrItemOrder : [itemBeer] }
                        }} onClick={() => { handleNav(itemBeer.id) }}>
                            <CardTitle tag="h5"> {itemBeer.category == null ? 'Bia demo' : itemBeer.category} </CardTitle>
                            {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                            <CardText>{truncate(itemBeer.description)}</CardText>
                        </NavLink>

                        <Button onClick={() => { handleOrderBeer(itemBeer.id, itemBeer) }}>Add to Cart</Button>
                    </CardBody>
                </Card >
            )
        }
    })
    return (
        <div>
            {/* Viết danh sách sản phẩm ở đây nhé, giống cách viết trang register */}

            <div className="d-flex justify-content-between">
                <h1 style={styleLineHeight}>Danh sach loai bia</h1>
                <h2 style={styleLineHeight}>Gio hang </h2>
            </div>
            <div className="d-flex flex-wrap justify-content-around">

                {renderData}
            </div>

        </div>
    );
}

export default Products;
//vsii.interview@vsi-international.com
//"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"