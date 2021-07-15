import React, { useEffect, useState } from 'react';
import {
    Button, Card, CardImg, CardText, CardBody,
    CardTitle,
} from 'reactstrap';
import fakeimg from '../assets/img/fake.jpg';
import Https from '../service/Https';
import "../assets/css/Base.css"
import {
    NavLink,
    useHistory,
    // Redirect,
    // useHistory,
    // useLocation
} from "react-router-dom";
import * as BEERAPP from './../utils/index';
//

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
    const [isLoading, setIsloading] = useState(true)
    const [arrItemOrder, setArrItemOrder] = useState([])
    let history = useHistory()
    async function getBeerById() {
        const response = await Https.get();
        setIsloading(false)
        setFakeApi(response.data)
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
        setArrItemOrder([...arrItemOrder, itemBeer])
    }
    history.push({
        pathname: `/`,
        state: { dataOrder: arrItemOrder }
    })
    const handleBuyNow = (indexBeer, itemBeer) => {
        history.push({
            pathname: `/products/${indexBeer}`,
            state: { dataOrder: [itemBeer] }
        })
    }
    //  console.log(arrItemOrder)
    const styleLineHeight = {
        height: '50px',
        lineHeight: '50px'
    }
    const handleNav = (itemOrderBeer) => {
        history.push({
            state: { data: arrItemOrder }
        })
    }
    const styleColor = {
        color: '#333'
    }
    const renderData = fakeApi
        .filter(itemState => {
            return itemState.state === "acknowledged"
        })
        .map((itemBeer, index) => {
            return (
                // <Card key={index} className="mb-3">
                //     <CardImg top width="318px" height="180px" src={itemBeer.href !== null ? itemBeer.href : fakeimg} alt="Card image cap" />
                //     <CardBody>
                //         <NavLink arrItemOrder={arrItemOrder} to={{
                //             // `/products/${itemBeer.id}`
                //             pathname: `/products/${itemBeer.id}`,
                //             state: { dataOrder: arrItemOrder.length > 0 ? arrItemOrder : [itemBeer] }
                //         }} onClick={() => { handleNav(itemBeer.id) }}>
                //             <CardTitle tag="h5"> {itemBeer.category == null ? 'Bia demo' : itemBeer.category} </CardTitle>
                //             {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                //             <CardText style={styleColor}>{truncate(itemBeer.description)}</CardText>
                //         </NavLink>

                //         <Button className="mr-1" color="primary" onClick={() => { handleOrderBeer(itemBeer.id, itemBeer) }}>Add to Cart</Button>

                //         <Button color="success" onClick={() => { handleBuyNow(itemBeer.id, itemBeer) }}>Buy now</Button>
                //     </CardBody>
                // </Card>

                <div className="col p-2-6 t-4 m-6">
                    {/* <NavLink className="home-product-item" arrItemOrder={arrItemOrder} to={{
                        // `/products/${itemBeer.id}`
                        pathname: `/products/${itemBeer.id}`,
                        state: { dataOrder: arrItemOrder.length > 0 ? arrItemOrder : [itemBeer] }
                    }} onClick={() => { handleNav(itemBeer.id) }}> */}
                    <div className="home-product-item__img" style={{ backgroundImage: `url(${itemBeer.href !== null ? itemBeer.href : fakeimg})` }} />
                    <h4 className="home-product-item__name">
                        {itemBeer.category == null ? 'Bia demo' : itemBeer.category}
                    </h4>
                    <div className="home-product-item__price">
                        <span className="home-product-item__price-old">1.200.000đ</span>
                        <span className="home-product-item__price-current">999.000đ</span>
                    </div>
                    <div className="home-product-item__action">
                        {/* Liked: home-product-item__like--liked */}
                        <span className="home-product-item__like home-product-item__like--liked">
                            <i className="home-product-item__like-icon-empty far fa-heart" />
                            <i className="home-product-item__like-icon-fill fas fa-heart" />
                        </span>
                        <div className="home-product-item__rating">
                            <i className="home-product-item__star--gold fas fa-star" />
                            <i className="home-product-item__star--gold fas fa-star" />
                            <i className="home-product-item__star--gold fas fa-star" />
                            <i className="home-product-item__star--gold fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        <span className="home-product-item__sold">169 đã bán</span>
                    </div>
                    <div className="product__content-cart">
                        <button className="content-chat-text show-on-mobile">
                            <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" className="content-chat-icon">
                                <g stroke="none"><path d="m11.2 4.1c-1.1-1.3-3-2.2-5-2.2-3.4 0-6.2 2.3-6.2 5.2 0 1.7.9 3.2 2.4 4.2l-.7 1.4s-.2.4.1.6c.3.3 1.1-.1 1.1-.1l2.4-.9c.3.1.6.1.9.1.7 0 1.5-.1 2.1-.3.5.2 1 .2 1.6.2h.6l2.1 1.5c.6.4.8.1.8-.4v-2.2c.9-.8 1.5-1.8 1.5-3 0-2-1.6-3.6-3.7-4.1zm-5.6 7.3h-.5-.2l-1.8.7.5-1.1-.7-.5c-1.3-.8-2-2-2-3.4 0-2.3 2.3-4.2 5.2-4.2 2.8 0 5.2 1.9 5.2 4.2s-2.4 4.3-5.2 4.3c-.2 0-.4 0-.5 0zm6.8-.8v1.2c0 .6-.1.4-.4.2l-1-.8c-.4.1-.8.1-1.2.1 1.5-1 2.5-2.5 2.5-4.2 0-.6-.1-1.1-.3-1.7 1.2.6 1.9 1.6 1.9 2.7 0 1-.5 1.9-1.5 2.5z" /><circle cx="3.1" cy="7.1" r=".8" /><circle cx="9.1" cy="7.1" r=".8" /><circle cx="6.1" cy="7.1" r=".8" /></g>
                            </svg>
                            Chat ngay
                        </button>
                        <button className="content-cart-text" onClick={() => { handleOrderBeer(itemBeer.id, itemBeer) }}>
                            <i className="content-cart-icon fas fa-cart-plus" />
                            Thêm vào giỏ hàng
                        </button>
                        <button onClick={() => { handleBuyNow(itemBeer.id, itemBeer) }} className="content-buy-text">Mua luôn</button>
                    </div>
                    {/* <div className="home-product-item__origin">
                            <span className="home-product-item__brand">Whoo</span>
                            <span className="home-product-item__origin-name">Nhật Bản</span>
                        </div> */}
                    <div className="home-product-item__favorite">
                        <i className="fas fa-check" />
                        <span>Yêu thích</span>
                    </div>
                    <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">{BEERAPP.randomKm()}%</span>
                        <span className="home-product-item__sale-off-label">GIẢM</span>
                    </div>
                    {/* </NavLink> */}
                </div>

            )
        });

    return (

        <div>
            <div className="home-product">
                <div className="row sm-gutter">
                    {isLoading ?
                        <>
                            <div className="spinner-border text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </> : renderData}
                </div>
            </div>
        </div>
    );
}

export default Products;
//vsii.interview@vsi-international.com
//"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"