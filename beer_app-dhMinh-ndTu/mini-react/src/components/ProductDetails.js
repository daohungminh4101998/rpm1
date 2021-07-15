import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import fakeimg from '../assets/img/fake.jpg';
import * as BEERAPP from './../utils/index';
import axios from 'axios'
import Review from './Review';
function ProductDetails(props) {
  let location = useLocation();
  let listOrder = location.state.dataOrder;
  let resultListOrder = listOrder.map((item, index) => {
    return {
      "description": item.category,
      "name": item.category,
      "priceType": "one time",
      "price": {
        "taxRate": 16.0,
        "dutyFreeAmount": {
          "unit": "VND",
          "value": 1213333
        },
        "taxIncludedAmount": {
          "unit": "VND",
          "value": 1410000
        }
      },
      "state": "inProgress",//inProgress
    }
  })
  // const [fakeApi, setFakeApi] = useState([])
  const [stateData, setStateData] = useState([])
  const [sameProduct, setSameProduct] = useState([])
  async function getBeerById() {
    try {
      const response = await axios.get(`${BEERAPP.BASE_URL}`, {
        headers: {
          Accept: "*/*",
        }
      });


      const slug = match.params.slug
      const samePrd = response.data.filter((itemFind, index) => {
        return itemFind.state === "acknowledged"
      })
      setSameProduct(samePrd)
      const resultDetails = response.data.filter((itemFind, index) => {
        return itemFind.id === slug
      })

      setStateData(resultDetails)
    } catch (error) {
      console.error(error);
    }


  }
  const [countBeer, setCountBeer] = useState(1)
  const [sluong, setSluong] = useState(1000)
  let priceTamp = 25000
  let match = useRouteMatch("/products/:slug");
  useEffect(() => {
    getBeerById()
  }, [])
  const handleCount = (mark) => {
    if (mark === '-') {
      setCountBeer(countBeer - 1)
      setSluong(sluong + 1)
      if (countBeer === 1) {
        setCountBeer(1)
        setSluong(sluong)
      }
    }
    else if (mark === '+') {
      setCountBeer(countBeer + 1)
      setSluong(sluong - 1)
    }
  }
  // const totalPrice = countBeer * priceTamp;
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
        if (response.status === 200) {
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

  return (
    <>
      <h1>THÔNG TIN ĐƠN HÀNG {authFakeLocal}</h1>

      {stateData.map((itemOrder, index) => {

        var quantity = itemOrder.productOrderItem[0] === undefined ? 1 : itemOrder.productOrderItem[0].quantity
        return (
          // <div key={index} className="wrap-product-details">
          //   <div className="main_product">
          //     <div className="img-product">
          //       <img src={itemOrder.href !== null ? itemOrder.href : fakeimg} alt={itemOrder.category} />
          //     </div>
          //     {/* <div className="img-product">
          //                     </div> */}
          //     <h2 className="title-beer">
          //       {itemOrder.category}
          //     </h2>
          //     <div className="sell-out">
          //       <div className="sell-out-left">50+ đã bán</div>
          //       <span className="line"></span>
          //       <div className="sell-out-left">4 thích</div>
          //     </div>
          //     <div className="price_quantity">
          //       <div className="price_quantity-left">
          //         {priceTamp * countBeer}

          //       </div>

          //       <div className="price_quantity-right">
          //         <button onClick={() => { handleCount('-') }} className="decrement-count">-</button>
          //         <h3 className="number-count">{countBeer}</h3>
          //         <button onClick={() => { handleCount('+') }} className="increment-count" >+</button>

          //       </div>

          //     </div>

          //     <div className="text_infor">
          //       <div className="name_number">Mark Han - 0123456789</div>
          //       <div className="address">Tân Mỹ, Mỹ Đình, Nam Từ Niêm, Hà Nội</div>
          //     </div>
          //     <div className="quantity">
          //       <div>Tổng (1 phần)</div>
          //       <div className="tong">25000</div>
          //     </div>
          //     <div className="fee_ship">
          //       <div>Phí giao hàng</div>
          //       <div>15000</div>
          //     </div>
          //     <div className="voucher">
          //       <div>Icon here</div>
          //       <div>Khuyến mại</div>
          //       {/* <input>Nhập mã</input> */}
          //     </div>
          //     <div className="total">
          //       <div>Tổng cộng</div>
          //       <div>31000</div>
          //     </div>
          //     <div className="payment">
          //       <button onClick={() => { orderBeer(itemOrder.id, quantity) }}
          //         className="payment-button">
          //         Đặt hàng
          //       </button>
          //     </div>
          //   </div>
          // </div>

          <div className="row product__content">
            <div className="col p-5 t-12 m-12">
              <div className="product__content-left">
                <div className="show-on-tablet">
                  <div className="product__content-heading">
                    <div className="product__content-type">
                      <svg width={34} height={20} className="_2fakLZ" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 2C0 0.895431 0.895431 0 2 0L28 0C29.1046 0 30 0.895431 30 2V14C30 15.1046 29.1046 16 28 16H2C0.89543 16 0 15.1046 0 14L0 2Z" fill="#D0011B" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.8045 3.00128H10.8673C10.8403 3.00132 10.8137 3.00752 10.7895 3.01939C10.7652 3.03126 10.744 3.0485 10.7274 3.0698L10.151 3.70154C10.1108 3.74133 10.0736 3.78149 10.0397 3.82129L10.0109 3.85512L9.73645 4.1559C9.26611 4.63346 8.55272 5.15874 7.50601 5.1696H7.47399C6.35562 5.1696 5.61724 4.53545 5.18223 4.084L4.2545 3.06788C4.23787 3.04676 4.21666 3.02968 4.19249 3.01792C4.16831 3.00617 4.14178 3.00004 4.1149 3H3.17803C3.13084 3.00008 3.08561 3.01887 3.05224 3.05223C3.01887 3.0856 3.00008 3.13084 3 3.17803V12.8198C3.00008 12.867 3.01887 12.9123 3.05224 12.9456C3.08561 12.979 3.13084 12.9978 3.17803 12.9979H4.11458C4.16177 12.9978 4.207 12.979 4.24037 12.9456C4.27373 12.9123 4.29252 12.867 4.2926 12.8198V5.00726C4.51669 5.20068 4.74894 5.38439 4.9887 5.55788C5.57807 5.9956 6.40375 6.40585 7.47655 6.40585H7.51722C8.53818 6.3953 9.32642 6.03468 9.89137 5.64233L9.89877 5.64155L9.97012 5.58642C10.0506 5.52802 10.1262 5.46926 10.1969 5.41116L10.689 5.03095V12.8198C10.6892 12.867 10.708 12.9122 10.7413 12.9455C10.7747 12.9789 10.8199 12.9977 10.867 12.9979H11.8042C11.8514 12.9977 11.8966 12.9789 11.9299 12.9455C11.9633 12.9122 11.9821 12.867 11.9822 12.8198V3.17931C11.9821 3.1322 11.9633 3.08706 11.93 3.05372C11.8967 3.02038 11.8516 3.00153 11.8045 3.00128ZM19.3506 6.74843H18.4154C18.3682 6.74851 18.3229 6.76729 18.2896 6.80066C18.2562 6.83403 18.2374 6.87926 18.2373 6.92645V7.5172C17.6712 7.03692 16.8957 6.70776 16.087 6.70776C14.307 6.70776 12.8639 8.11659 12.8639 9.85105C12.8639 11.5855 14.307 12.9947 16.087 12.9947C16.8743 12.9882 17.6348 12.7074 18.2373 12.2006V12.8195C18.2372 12.843 18.2417 12.8663 18.2506 12.888C18.2595 12.9097 18.2726 12.9295 18.2891 12.9461C18.3057 12.9628 18.3253 12.976 18.347 12.9851C18.3686 12.9941 18.3919 12.9988 18.4154 12.9988H19.3522C19.3994 12.9987 19.4446 12.98 19.478 12.9466C19.5114 12.9132 19.5302 12.868 19.5303 12.8208V6.92933C19.5306 6.90559 19.5262 6.88202 19.5173 6.86C19.5084 6.83798 19.4952 6.81796 19.4785 6.80111C19.4618 6.78426 19.4418 6.77092 19.4199 6.76187C19.3979 6.75283 19.3744 6.74825 19.3506 6.74843ZM16.1455 11.8375C14.9929 11.8375 14.0586 10.9493 14.0586 9.85425C14.0586 8.75921 14.9929 7.87133 16.1455 7.87133C17.2982 7.87133 18.2329 8.75921 18.2329 9.85425C18.2329 10.9493 17.2982 11.8375 16.1455 11.8375ZM23.7506 12.02C23.7618 11.9746 23.7547 11.9266 23.7307 11.8865C23.7067 11.8464 23.6678 11.8174 23.6225 11.8058L23.2034 11.7005L23.1918 11.6976C22.5499 11.5653 22.3174 11.354 22.287 10.769V3.17897C22.2866 3.13204 22.2677 3.08715 22.2344 3.05414C22.201 3.02114 22.1559 3.0027 22.109 3.00287H21.2445C21.1975 3.0027 21.1524 3.02114 21.1191 3.05414C21.0857 3.08715 21.0668 3.13204 21.0664 3.17897V10.4472C21.0082 12.1513 21.9818 12.6863 22.8857 12.8864L23.3174 12.9947C23.363 13.0061 23.4113 12.999 23.4517 12.975C23.4922 12.951 23.5216 12.9121 23.5335 12.8666L23.6318 12.4888C23.6348 12.4786 23.6374 12.4681 23.6399 12.4576L23.6427 12.4465L23.7506 12.02ZM26.9708 11.8864C26.9948 11.9266 27.0019 11.9746 26.9905 12.02L26.8826 12.4465C26.8794 12.4606 26.8759 12.475 26.8718 12.4888L26.7738 12.8666C26.7618 12.9121 26.7324 12.9511 26.6918 12.975C26.6513 12.999 26.603 13.0061 26.5573 12.9947L26.1257 12.8864C25.2218 12.6863 24.2485 12.1513 24.3064 10.4472V3.17897C24.3067 3.13204 24.3257 3.08715 24.359 3.05414C24.3924 3.02114 24.4375 3.0027 24.4844 3.00287H25.3489C25.3959 3.0027 25.441 3.02114 25.4743 3.05414C25.5077 3.08715 25.5266 3.13204 25.527 3.17897V10.769C25.5574 11.354 25.7914 11.5653 26.4318 11.6976C26.436 11.6982 26.4395 11.7005 26.4437 11.7005L26.8625 11.8058C26.9078 11.8173 26.9468 11.8463 26.9708 11.8864Z" fill="white" />
                      </svg>
                    </div>
                    <h3 className="product__content-name">
                      {itemOrder.category}
                    </h3>
                  </div>
                  <div className="product__content-view-control">
                    <div className="product__content-rating">
                      <span className="product__content-view-text content-text--red">5</span>
                      <div className="product__content-rate--list">
                        <i className="product-item__star--normal product-item__star--red fas fa-star" />
                        <i className="product-item__star--normal product-item__star--red fas fa-star" />
                        <i className="product-item__star--normal product-item__star--red fas fa-star" />
                        <i className="product-item__star--normal product-item__star--red fas fa-star" />
                        <i className="product-item__star--normal fas fa-star" />
                      </div>
                    </div>
                    <span className="product__content-border--mid" />
                    <div className="product__content-cmt">
                      <span className="product__content-view-text">5k</span>
                      <span className="product__content-text">Đánh giá</span>
                    </div>
                    <span className="product__content-border--mid" />
                    <div className="product__content-cmt">
                      <span className="product__content-view-text content-text--none">9k</span>
                      <span className="product__content-text">Đã bán</span>
                    </div>
                  </div>
                  <div className="product__content-price">
                    <div className="content-price--old">
                      2.000.000<span className="vnd-class">₫</span>
                    </div>
                    <div className="content-price--new">
                      1.899.000<span className="vnd-class">₫</span>
                    </div>
                    <div className="content-price--discount">
                      22% GIẢM
                    </div>
                  </div>
                </div>
                <div className="product__content-img" style={{ backgroundImage: `url(${itemOrder.href !== null ? itemOrder.href : fakeimg}` }} />
                <div className="product__content-scroll">
                  <div className="product__content-img--list">

                    <button className="product__content-button product__content-button-left">
                      <svg enableBackground="new 0 0 13 20" viewBox="0 0 13 20" x={0} y={0} className="product__content-svg-icon icon-arrow-left-bold">
                        <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9" />
                      </svg>
                    </button>
                    <button className="product__content-button product__content-button-right">
                      <svg enableBackground="new 0 0 13 21" viewBox="0 0 13 21" x={0} y={0} className="product__content-svg-icon icon-arrow-right-bold">
                        <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="product__content-action">
                  <div className="product__content--share">
                    <span className="product__content-share--text">Chia sẻ:</span>
                    <button className="product__content-share-icon content-icon--mess" />
                    <button className="product__content-share-icon content-icon--facebook" />
                    <button className="product__content-share-icon content-icon--pinterest" />
                    <button className="product__content-share-icon content-icon--twitter" />
                  </div>
                  <span className="product__content-border--mid" />
                  <div className="product__content--like">
                    <svg width={24} height={20} className="ELoIiZ"><path d="M19.469 1.262c-5.284-1.53-7.47 4.142-7.47 4.142S9.815-.269 4.532 1.262C-1.937 3.138.44 13.832 12 19.333c11.559-5.501 13.938-16.195 7.469-18.07z" stroke="#FF424F" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinejoin="round" /></svg>
                    <span className="product__content-like--text">Đã thích (9k)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col p-7 t-12 m-12">
              <div className="product__content-right">
                <div className="show-on-pc-mobile flex-head--product">
                  <div className="product__content-heading">
                    <div className="product__content-type">
                      <svg width={34} height={20} className="_2fakLZ" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 2C0 0.895431 0.895431 0 2 0L28 0C29.1046 0 30 0.895431 30 2V14C30 15.1046 29.1046 16 28 16H2C0.89543 16 0 15.1046 0 14L0 2Z" fill="#D0011B" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.8045 3.00128H10.8673C10.8403 3.00132 10.8137 3.00752 10.7895 3.01939C10.7652 3.03126 10.744 3.0485 10.7274 3.0698L10.151 3.70154C10.1108 3.74133 10.0736 3.78149 10.0397 3.82129L10.0109 3.85512L9.73645 4.1559C9.26611 4.63346 8.55272 5.15874 7.50601 5.1696H7.47399C6.35562 5.1696 5.61724 4.53545 5.18223 4.084L4.2545 3.06788C4.23787 3.04676 4.21666 3.02968 4.19249 3.01792C4.16831 3.00617 4.14178 3.00004 4.1149 3H3.17803C3.13084 3.00008 3.08561 3.01887 3.05224 3.05223C3.01887 3.0856 3.00008 3.13084 3 3.17803V12.8198C3.00008 12.867 3.01887 12.9123 3.05224 12.9456C3.08561 12.979 3.13084 12.9978 3.17803 12.9979H4.11458C4.16177 12.9978 4.207 12.979 4.24037 12.9456C4.27373 12.9123 4.29252 12.867 4.2926 12.8198V5.00726C4.51669 5.20068 4.74894 5.38439 4.9887 5.55788C5.57807 5.9956 6.40375 6.40585 7.47655 6.40585H7.51722C8.53818 6.3953 9.32642 6.03468 9.89137 5.64233L9.89877 5.64155L9.97012 5.58642C10.0506 5.52802 10.1262 5.46926 10.1969 5.41116L10.689 5.03095V12.8198C10.6892 12.867 10.708 12.9122 10.7413 12.9455C10.7747 12.9789 10.8199 12.9977 10.867 12.9979H11.8042C11.8514 12.9977 11.8966 12.9789 11.9299 12.9455C11.9633 12.9122 11.9821 12.867 11.9822 12.8198V3.17931C11.9821 3.1322 11.9633 3.08706 11.93 3.05372C11.8967 3.02038 11.8516 3.00153 11.8045 3.00128ZM19.3506 6.74843H18.4154C18.3682 6.74851 18.3229 6.76729 18.2896 6.80066C18.2562 6.83403 18.2374 6.87926 18.2373 6.92645V7.5172C17.6712 7.03692 16.8957 6.70776 16.087 6.70776C14.307 6.70776 12.8639 8.11659 12.8639 9.85105C12.8639 11.5855 14.307 12.9947 16.087 12.9947C16.8743 12.9882 17.6348 12.7074 18.2373 12.2006V12.8195C18.2372 12.843 18.2417 12.8663 18.2506 12.888C18.2595 12.9097 18.2726 12.9295 18.2891 12.9461C18.3057 12.9628 18.3253 12.976 18.347 12.9851C18.3686 12.9941 18.3919 12.9988 18.4154 12.9988H19.3522C19.3994 12.9987 19.4446 12.98 19.478 12.9466C19.5114 12.9132 19.5302 12.868 19.5303 12.8208V6.92933C19.5306 6.90559 19.5262 6.88202 19.5173 6.86C19.5084 6.83798 19.4952 6.81796 19.4785 6.80111C19.4618 6.78426 19.4418 6.77092 19.4199 6.76187C19.3979 6.75283 19.3744 6.74825 19.3506 6.74843ZM16.1455 11.8375C14.9929 11.8375 14.0586 10.9493 14.0586 9.85425C14.0586 8.75921 14.9929 7.87133 16.1455 7.87133C17.2982 7.87133 18.2329 8.75921 18.2329 9.85425C18.2329 10.9493 17.2982 11.8375 16.1455 11.8375ZM23.7506 12.02C23.7618 11.9746 23.7547 11.9266 23.7307 11.8865C23.7067 11.8464 23.6678 11.8174 23.6225 11.8058L23.2034 11.7005L23.1918 11.6976C22.5499 11.5653 22.3174 11.354 22.287 10.769V3.17897C22.2866 3.13204 22.2677 3.08715 22.2344 3.05414C22.201 3.02114 22.1559 3.0027 22.109 3.00287H21.2445C21.1975 3.0027 21.1524 3.02114 21.1191 3.05414C21.0857 3.08715 21.0668 3.13204 21.0664 3.17897V10.4472C21.0082 12.1513 21.9818 12.6863 22.8857 12.8864L23.3174 12.9947C23.363 13.0061 23.4113 12.999 23.4517 12.975C23.4922 12.951 23.5216 12.9121 23.5335 12.8666L23.6318 12.4888C23.6348 12.4786 23.6374 12.4681 23.6399 12.4576L23.6427 12.4465L23.7506 12.02ZM26.9708 11.8864C26.9948 11.9266 27.0019 11.9746 26.9905 12.02L26.8826 12.4465C26.8794 12.4606 26.8759 12.475 26.8718 12.4888L26.7738 12.8666C26.7618 12.9121 26.7324 12.9511 26.6918 12.975C26.6513 12.999 26.603 13.0061 26.5573 12.9947L26.1257 12.8864C25.2218 12.6863 24.2485 12.1513 24.3064 10.4472V3.17897C24.3067 3.13204 24.3257 3.08715 24.359 3.05414C24.3924 3.02114 24.4375 3.0027 24.4844 3.00287H25.3489C25.3959 3.0027 25.441 3.02114 25.4743 3.05414C25.5077 3.08715 25.5266 3.13204 25.527 3.17897V10.769C25.5574 11.354 25.7914 11.5653 26.4318 11.6976C26.436 11.6982 26.4395 11.7005 26.4437 11.7005L26.8625 11.8058C26.9078 11.8173 26.9468 11.8463 26.9708 11.8864Z" fill="white" />
                      </svg>
                    </div>
                    <h3 className="product__content-name">
                      {itemOrder.category !== null ? itemOrder.category : 'bia order - demo'}
                    </h3>
                  </div>
                  <div className="product__content-view-control">
                    <div className="product__content-rating">
                      <span className="product__content-view-text content-text--red">4.9</span>
                      <div className="product__content-rate--list">
                        <i className="product-item__star--normal product-item__star--red fas fa-star" />
                        <i className="product-item__star--normal product-item__star--red fas fa-star" />
                        <i className="product-item__star--normal product-item__star--red fas fa-star" />
                        <i className="product-item__star--normal product-item__star--red fas fa-star" />
                        <i className="product-item__star--normal fas fa-star" />
                      </div>
                    </div>
                    <span className="hide-on-mobile product__content-border--mid" />
                    <div className="hide-on-mobile product__content-cmt">
                      <span className="product__content-view-text">8k</span>
                      <span className="product__content-text">Đánh giá</span>
                    </div>
                    <span className="product__content-border--mid" />
                    <div className="product__content-cmt">
                      <span className="product__content-view-text content-text--none">9k</span>
                      <span className="product__content-text">Đã bán</span>
                    </div>
                    <div className="product__content--like show-on-mobile">
                      <span className="product__content-border--mid" />
                      <svg width={24} height={20} className="heart-mobile svg-right--action"><path d="M19.469 1.262c-5.284-1.53-7.47 4.142-7.47 4.142S9.815-.269 4.532 1.262C-1.937 3.138.44 13.832 12 19.333c11.559-5.501 13.938-16.195 7.469-18.07z" stroke="#FF424F" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinejoin="round" /></svg>
                      <svg width={24} height={20} data-icon="share" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ color: 'var(--primary-color)' }} className="svg-right--action"><path fill="currentColor" d="M561.938 190.06L385.94 14.107C355.79-16.043 304 5.327 304 48.047v80.703C166.04 132.9 0 159.68 0 330.05c0 73.75 38.02 134.719 97.63 173.949 37.12 24.43 85.84-10.9 72.19-54.46C145.47 371.859 157.41 330.2 304 321.66v78.28c0 42.64 51.73 64.15 81.94 33.94l175.997-175.94c18.751-18.74 18.751-49.14.001-67.88zM352 400V272.09c-164.521 1.79-277.44 33.821-227.98 191.61C88 440 48 397.01 48 330.05c0-142.242 160.819-153.39 304-154.02V48l176 176-176 176z" /></svg>
                      <svg width={24} height={20} data-icon="link" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ color: 'var(--primary-color)' }} className="svg-right--action"><path fill="currentColor" d="M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z" /></svg>
                    </div>
                  </div>
                  <div className="product__content-price">
                    <div className="content-price--old">
                      2.000.000<span className="vnd-class">₫</span>
                    </div>
                    <div className="content-price--new">
                      1.899.000<span className="vnd-class">₫</span>
                    </div>
                    <div className="content-price--discount">
                      22% GIẢM
                    </div>
                  </div>
                </div>
                <div className="product__content-body hide-on-mobile">
                  <div className="product__content-discount">
                    <div className="content-discount--title">Mã giảm giá</div>
                    <div className="content-discount--code">
                      <div className="content-discount--item">
                        10% GIẢM
                      </div>
                      <div className="content-discount--item">
                        5% GIẢM
                      </div>
                    </div>
                    <div className="content-discount--detail">
                      <div className="discount-detail__header">Mã giảm giá của shop</div>
                      <div className="discount-detail__sup-header">Tiết kiệm hơn khi áp dụng mã giảm giá của Shop. Liên hệ với Shop nếu gặp trục trặc về mã giảm giá do Shop tự tạo.</div>
                      <div className="discount-detail__code">
                        <div className="discount-detail__code-item">
                          <div className="discount-detail__background">
                            <div className="discount-detail__img" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/9ce102789d156548395752b9978d13a4")' }} />
                          </div>
                          <div className="discount-detail__border" />
                          <div className="discount-detail__content-head">
                            <span className="discount-detail__content-title">Giảm 10% Đơn Tối Thiểu ₫99k Giảm tối đa ₫15k</span>
                            <span className="discount-detail__content-date">HSD: 30.06.2021</span>
                          </div>
                          <button className="discount-detail__content-button">Lưu</button>
                        </div>
                        <div className="discount-detail__code-item">
                          <div className="discount-detail__background">
                            <div className="discount-detail__img" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/9ce102789d156548395752b9978d13a4")' }} />
                          </div>
                          <div className="discount-detail__border" />
                          <div className="discount-detail__content-head">
                            <span className="discount-detail__content-title">Giảm 10% Đơn Tối Thiểu ₫99k Giảm tối đa ₫15k</span>
                            <span className="discount-detail__content-date">HSD: 30.06.2021</span>
                          </div>
                          <button className="discount-detail__content-button">Lưu</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product__content-info">
                    <div className="content-info--title">Thông tin</div>
                    <div className="content-info--body">
                      <span className="content-info--text">
                        {itemOrder.description !== null ? itemOrder.description : 'Bia ken la 1 trong nhung loai bia pho bien nhat the gioi'}
                      </span>
                      <a href="#" className="content-info--link">Xem thêm</a>
                    </div>
                  </div>
                  <div className="product__content-select">
                    <div className="content-select--title">Cồn</div>
                    <div className="content-select--color">
                      <button className="content-select--item">
                        0%
                      </button>
                      <button className="content-select--item">
                        20%
                      </button>
                      <button className="content-select--item">
                        30%
                      </button>
                      <button className="content-select--item">
                        40%
                      </button>
                    </div>
                  </div>
                  <div className="product__content-count">
                    <div className="content-count--title">Số lượng</div>
                    <div className="content-count--control">
                      <div className="content-count--item">
                        <button className="content-count--button" onClick={() => { handleCount('-') }} >
                          <svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x={0} y={0} className="content-count-svg-icon"><polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5" /></svg>
                        </button>
                        <span className="pl-3 pr-3">  {countBeer}</span>
                        <button className="content-count--button" onClick={() => { handleCount('+') }} >
                          <svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x={0} y={0} className="content-count-svg-icon"><polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5" /></svg>
                        </button>
                      </div>
                      <div className="content-count--item">
                        {sluong} sản phẩm có sẵn
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product__content-cart">
                  <button className="content-chat-text show-on-mobile">
                    <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" className="content-chat-icon">
                      <g stroke="none"><path d="m11.2 4.1c-1.1-1.3-3-2.2-5-2.2-3.4 0-6.2 2.3-6.2 5.2 0 1.7.9 3.2 2.4 4.2l-.7 1.4s-.2.4.1.6c.3.3 1.1-.1 1.1-.1l2.4-.9c.3.1.6.1.9.1.7 0 1.5-.1 2.1-.3.5.2 1 .2 1.6.2h.6l2.1 1.5c.6.4.8.1.8-.4v-2.2c.9-.8 1.5-1.8 1.5-3 0-2-1.6-3.6-3.7-4.1zm-5.6 7.3h-.5-.2l-1.8.7.5-1.1-.7-.5c-1.3-.8-2-2-2-3.4 0-2.3 2.3-4.2 5.2-4.2 2.8 0 5.2 1.9 5.2 4.2s-2.4 4.3-5.2 4.3c-.2 0-.4 0-.5 0zm6.8-.8v1.2c0 .6-.1.4-.4.2l-1-.8c-.4.1-.8.1-1.2.1 1.5-1 2.5-2.5 2.5-4.2 0-.6-.1-1.1-.3-1.7 1.2.6 1.9 1.6 1.9 2.7 0 1-.5 1.9-1.5 2.5z" /><circle cx="3.1" cy="7.1" r=".8" /><circle cx="9.1" cy="7.1" r=".8" /><circle cx="6.1" cy="7.1" r=".8" /></g>
                    </svg>
                    Chat ngay
                  </button>
                  <button className="content-cart-text">
                    <i className="content-cart-icon fas fa-cart-plus" />
                    Thêm vào giỏ hàng
                  </button>
                  <button onClick={() => { orderBeer(itemOrder.id, quantity) }} className="content-buy-text">Mua luôn</button>
                </div>
                <div className="product__content-slow">
                  <span className="content-hr" />
                  <div className="content-refund content-refund__free-refund">
                    <i className="content-refund--icon fas fa-history" />
                    <h3 className="refund-text show-on-mobile">Miễn phí trả hàng</h3>
                    <h3 className="refund-text show-on-pc">7 ngày miễn phí trả hàng</h3>
                    <div className="content-refund--detail-free">
                      <div className="refund-detail__header">Hoàn toàn yên tâm khi mua hàng ở Shopee Mall với ưu đãi miễn phí trả hàng lên đến 7 ngày.</div>
                    </div>
                  </div>
                  <div className="content-refund content-refund__real">
                    <i className="content-refund--icon fas fa-shield-alt" />
                    <h3 className="refund-text show-on-pc">Hàng chính hãng 100%</h3>
                    <h3 className="refund-text show-on-mobile">Chính hãng 100%</h3>
                    <div className="content-refund--detail-real">
                      <div className="refund-detail__header">Nhận lại gấp đôi số tiền mà bạn đã thanh toán cho sản phẩm không chính hãng từ Shopee Mall.</div>
                    </div>
                  </div>
                  <div className="content-refund content-refund__free-ship">
                    <i className="content-refund--icon fas fa-shipping-fast" />
                    <h3 className="refund-text show-on-pc">Miễn phí vận chuyển</h3>
                    <h3 className="refund-text show-on-mobile">Giao miễn phí</h3>
                    <div className="content-refund--detail-ship">
                      <div className="refund-detail__header">Ưu đãi miễn phí vận chuyển lên tới 40,000 VNĐ cho đơn hàng của Shopee Mall từ 150,000 VNĐ.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}


      <Review />

      <div className="wrapper">
        <div className="product__container product__container-detail">
          <div className="grid wide fix-wide-on-tablet product__container--padding">
            {/* Nav list > */}
            {/* <div className="page-breadcrumb">
              <a href="/" className="breadcrumb--link">MH Shop</a>
              <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0} className="breadcrumb--icon icon-arrow-right"><path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" /></svg>
              <a href="#" className="breadcrumb--link">Thời trang nữ</a>
              <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0} className="breadcrumb--icon icon-arrow-right"><path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" /></svg>
              <a href="#" className="breadcrumb--link">Áo</a>
              <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0} className="breadcrumb--icon icon-arrow-right"><path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" /></svg>
              <a href="#" className="breadcrumb--link">Áo hai dây &amp; ba lỗ</a>
              <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0} className="breadcrumb--icon icon-arrow-right"><path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" /></svg>
              <span className="breadcrumb--item">Áo croptop ba lỗ CERA-Y chất thun co dãn CRA035</span>
            </div> */}
            {/* Product */}
            {/* <div className="row product__content">

            </div> */}
            {/* Sale on mobile */}
            {/* <div className="row sale_mobile">
              <div className="col p-0 t-0 m-12">
                <div className="product__content-discount show-on-mobile">
                  <div className="content-discount--title">Mã giảm giá cho shop</div>
                  <div className="content-discount--code">
                    <div className="content-discount--item">
                      10% GIẢM
                    </div>
                    <div className="content-discount--item">
                      5% GIẢM
                    </div>
                  </div>
                  <div className="content-discount--detail">
                    <div className="discount-detail__header">Mã giảm giá của shop</div>
                    <div className="discount-detail__sup-header">Tiết kiệm hơn khi áp dụng mã giảm giá của Shop. Liên hệ với Shop nếu gặp trục trặc về mã giảm giá do Shop tự tạo.</div>
                    <div className="discount-detail__code">
                      <div className="discount-detail__code-item">
                        <div className="discount-detail__background">
                          <div className="discount-detail__img" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/9ce102789d156548395752b9978d13a4")' }} />
                        </div>
                        <div className="discount-detail__border" />
                        <div className="discount-detail__content-head">
                          <span className="discount-detail__content-title">Giảm 10% Đơn Tối Thiểu ₫99k Giảm tối đa ₫15k</span>
                          <span className="discount-detail__content-date">HSD: 30.06.2021</span>
                        </div>
                        <button className="discount-detail__content-button">Lưu</button>
                      </div>
                      <div className="discount-detail__code-item">
                        <div className="discount-detail__background">
                          <div className="discount-detail__img" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/9ce102789d156548395752b9978d13a4")' }} />
                        </div>
                        <div className="discount-detail__border" />
                        <div className="discount-detail__content-head">
                          <span className="discount-detail__content-title">Giảm 10% Đơn Tối Thiểu ₫99k Giảm tối đa ₫15k</span>
                          <span className="discount-detail__content-date">HSD: 30.06.2021</span>
                        </div>
                        <button className="discount-detail__content-button">Lưu</button>
                      </div>
                    </div>
                    <div className="discount-detail__footer">
                      <a href="#save" className="discount-detail__footer-link">Lưu về hết</a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* Sale on mobile */}
            {/* <div className="row ship_mobile">
              <div className="col p-0 t-0 m-12">
                <label className="ship__content" htmlFor="ship_detail">
                  <div className="ship__content-first">
                    <div className="ship__content-svg">
                      <svg viewBox="0 0 20 12" height={12} width={20} className="_3QNWX7"><path fill="#00bfa5" d="M5 0h10c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1z" /><path fill="#00bfa5" d="M14 2h5c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1h-5c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1z" /><circle fill="#00bfa5" cx={8} cy={10} r={2} /><circle fill="#00bfa5" cx={15} cy={10} r={2} /><path fill="#fff" d="M17.3 5.9h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6s.6-1.7 1.6-1.7 1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zm-.8-1.8c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zm-2.7 1.8h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6S12 3.5 13 3.5s1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zM13 4.1c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zM9.4 6.8V3.6h.6v.5h.1c.1-.3.5-.5.9-.5h.3v.6h-.4c-.5 0-.9.3-.9.8v1.9h-.6zm-2.7 0H6V2.6h2.8v.6H6.7v1.3h2V5h-2v1.8z" /><path fill="#00bfa5" d="M.5 8.5H4v.8H.5z" /><path fill="#00bfa5" d="M0 10.2h3.5v.8H0z" /><circle fill="#047565" cx={8} cy={10} r={1} /><circle fill="#047565" cx={15} cy={10} r={1} /></svg>
                    </div>
                    <div className="ship__content-body">
                      <div className="ship__content-title">
                        Miễn phí vận chuyển
                      </div>
                      <div className="ship__content-post">
                        Miễn phí vận chuyển khi đơn đạt giá trị tối thiểu
                      </div>
                    </div>
                  </div>
                  <div className="ship__content-last">
                    <div className="ship__content-svg">
                      <svg version="1.1" viewBox="0 0 15 15" x={0} y={0} style={{ width: '1.6rem', height: '1.6rem', stroke: 'rgba(0,0,0,.87)' }}><line fill="none" strokeLinejoin="round" strokeMiterlimit={10} x1="8.6" x2="4.2" y1="9.8" y2="9.8" /><circle cx={3} cy="11.2" fill="none" r={2} strokeMiterlimit={10} /><circle cx={10} cy="11.2" fill="none" r={2} strokeMiterlimit={10} /><line fill="none" strokeMiterlimit={10} x1="10.5" x2="14.4" y1="7.3" y2="7.3" /><polyline fill="none" points="1.5 9.8 .5 9.8 .5 1.8 10 1.8 10 9.1" strokeLinejoin="round" strokeMiterlimit={10} /><polyline fill="none" points="9.9 3.8 14 3.8 14.5 10.2 11.9 10.2" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
                    </div>
                    <div className="ship__content-body">
                      <div className="ship__content-title">
                        Phí vận chuyển:
                      </div>
                      <div className="ship__content-post">
                        ₫18.000 - ₫45.500
                        <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" style={{ width: '12px', height: '12px', color: 'rgba(0,0,0,.87)' }}><path stroke="none" d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z" /></svg>
                      </div>
                    </div>
                  </div>
                </label>
                <input type="checkbox" hidden name id="ship_detail" className="ship_detail" />
                <label htmlFor="ship_detail" className="overlay-ship" />
                <div className="content-ship--detail">
                  <div className="ship-detail__header">Phí vận chuyển</div>
                  <div className="ship-detail__first">
                    <div className="ship-detail__title">Vận chuyển đến:</div>
                    <div className="ship-detail__address">
                      Mỹ Đình, Hà Nội
                      <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" style={{ marginLeft: '0.2rem', fontSize: '0.8rem', stroke: 'rgba(0,0,0,.54)', width: '1rem', height: '1rem' }}><path stroke="none" d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" /></svg>
                    </div>
                  </div>
                  <div className="ship-detail__last">
                    <div className="ship-detail__title">Vận chuyển nhanh</div>
                    <div className="ship-detail__list">
                      <div className="ship-detail__item">
                        <div className="ship__item-head">
                          <span className="ship__item-head--text">
                            Nhanh
                          </span>
                          <span className="ship__item-head--text">
                            ₫37.300
                          </span>
                        </div>
                        <div className="ship__item--time-ship">
                          Nhận hàng vào 16 Th09 - 16 Th10
                        </div>
                        <div className="ship__item-body">
                          <div className="ship__item-body--detail">
                            <span style={{ fontSize: '1.2rem', color: '#EE4D2D' }}>Miễn phí vận chuyển</span>  cho đơn hàng từ <span style={{ fontSize: '1.2rem', color: '#EE4D2D' }}>₫50.000</span> (giảm tối đa <span style={{ fontSize: '1.2rem', color: '#EE4D2D' }}>₫25.000</span>)
                          </div>
                          <div className="ship__item-body--detail">
                            <span style={{ fontSize: '1.2rem', color: '#EE4D2D' }}>Miễn phí vận chuyển</span>  cho đơn hàng từ <span style={{ fontSize: '1.2rem', color: '#EE4D2D' }}>₫300.000</span> (giảm tối đa <span style={{ fontSize: '1.2rem', color: '#EE4D2D' }}>₫75.000</span>)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="discount-detail__footer">
                    <a href="#ok" className="discount-detail__footer-link">OK</a>
                  </div>
                </div>
              </div>
            </div> */}
            {/* size on mobile */}
            {/*
            <div className="row size_mobile">
              <div className="col p-0 t-0 m-12">
                <div className="product__content-discount size__content-discount show-on-mobile">
                  <div className="content-size--title">Chọn loại hàng (ví dụ: màu sắc, kích thước)</div>
                  <div className="content-discount--code">
                    <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0} className="breadcrumb--icon">
                      <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
                    </svg>
                  </div>
                  <div className="content-discount--detail">
                    <div className="size__content-first">
                      <div className="size__content-img" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/f53558ea21555919f4d506ace10b7118_tn")' }} />
                      <div className="size__content-first--body">
                        <div className="size__content-body--title">
                          Áo croptop ba lỗ CERA-Y chất thun co dãn CRA035
                        </div>
                        <div className="size__content-body--price">
                          <div className="content-price--old">
                            2.000.000<span className="vnd-class">₫</span>
                          </div>
                          <div className="content-price--new">
                            1.899.000<span className="vnd-class">₫</span>
                          </div>
                        </div>
                        <div className="size__content-body--warehouse">
                          Kho: 999
                        </div>
                      </div>
                    </div>
                    <div className="size__content-last">
                      <div className="size__content-color">
                        <div className="size__content-color--text">
                          Màu
                        </div>
                        <div className="size__content-color--btn">
                          <div className="size__color-btn--item active">Đen</div>
                          <div className="size__color-btn--item">Hồng</div>
                          <div className="size__color-btn--item">Trắng</div>
                          <div className="size__color-btn--item">Xanh</div>
                          <div className="size__color-btn--item">Đỏ</div>
                          <div className="size__color-btn--item">Violet</div>
                        </div>
                      </div>
                      <div className="size__content-total">
                        <div className="size__content-total--text">
                          Số lượng
                        </div>
                        <div className="size__content-count--control">
                          <div className="content-count--item">
                            <button className="content-count--button">
                              <svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x={0} y={0} className="content-count-svg-icon"><polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5" /></svg>
                            </button>
                            <input type="number" className="content-count--input" defaultValue={1} />
                            <button className="content-count--button">
                              <svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x={0} y={0} className="content-count-svg-icon"><polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5" /></svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="size__content-btn">
                      <a href="#" className="size__content-add--btn">Thêm vào giỏ hàng</a>
                      <a href="#" className="size__content-buy--btn">Mua luôn</a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* Info shop */}
            {/* <div className="row shop__content sm-gutter">
              <div className="col p-12 t-12 m-12">
                <div className="shop__content-all">
                  <div className="shop__content-first">
                    <div className="shop__content-info">
                      <img src="https://cf.shopee.vn/file/9ce102789d156548395752b9978d13a4" alt="" className="shop__content-img" />
                    </div>
                    <div className="shop__content-control">
                      <div className="shop__content-control--text">
                        <div className="shop__content-name">MH Shop</div>
                        <div className="shop__content-live">Online năm phút trước</div>
                      </div>
                      <div className="shop__content-action">
                        <button className="shop__content-action--btn btn--s btn-red hide-on-mobile">
                          <svg viewBox="0 0 16 16" className="shop__content-svg-icon">
                            <g fillRule="evenodd"><path d="M15 4a1 1 0 01.993.883L16 5v9.932a.5.5 0 01-.82.385l-2.061-1.718-8.199.001a1 1 0 01-.98-.8l-.016-.117-.108-1.284 8.058.001a2 2 0 001.976-1.692l.018-.155L14.293 4H15zm-2.48-4a1 1 0 011 1l-.003.077-.646 8.4a1 1 0 01-.997.923l-8.994-.001-2.06 1.718a.5.5 0 01-.233.108l-.087.007a.5.5 0 01-.492-.41L0 11.732V1a1 1 0 011-1h11.52zM3.646 4.246a.5.5 0 000 .708c.305.304.694.526 1.146.682A4.936 4.936 0 006.4 5.9c.464 0 1.02-.062 1.608-.264.452-.156.841-.378 1.146-.682a.5.5 0 10-.708-.708c-.185.186-.445.335-.764.444a4.004 4.004 0 01-2.564 0c-.319-.11-.579-.258-.764-.444a.5.5 0 00-.708 0z" /></g>
                          </svg>
                          Chat ngay
                        </button>
                        <a href="#" className="shop__content-action--link-shop btn--s btn-light">
                          <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} strokeWidth={0} className="shop__content-svg-icon">
                            <path d="m13 1.9c-.2-.5-.8-1-1.4-1h-8.4c-.6.1-1.2.5-1.4 1l-1.4 4.3c0 .8.3 1.6.9 2.1v4.8c0 .6.5 1 1.1 1h10.2c.6 0 1.1-.5 1.1-1v-4.6c.6-.4.9-1.2.9-2.3zm-11.4 3.4 1-3c .1-.2.4-.4.6-.4h8.3c.3 0 .5.2.6.4l1 3zm .6 3.5h.4c.7 0 1.4-.3 1.8-.8.4.5.9.8 1.5.8.7 0 1.3-.5 1.5-.8.2.3.8.8 1.5.8.6 0 1.1-.3 1.5-.8.4.5 1.1.8 1.7.8h.4v3.9c0 .1 0 .2-.1.3s-.2.1-.3.1h-9.5c-.1 0-.2 0-.3-.1s-.1-.2-.1-.3zm8.8-1.7h-1v .1s0 .3-.2.6c-.2.1-.5.2-.9.2-.3 0-.6-.1-.8-.3-.2-.3-.2-.6-.2-.6v-.1h-1v .1s0 .3-.2.5c-.2.3-.5.4-.8.4-1 0-1-.8-1-.8h-1c0 .8-.7.8-1.3.8s-1.1-1-1.2-1.7h12.1c0 .2-.1.9-.5 1.4-.2.2-.5.3-.8.3-1.2 0-1.2-.8-1.2-.9z" />
                          </svg>
                          Xem shop
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="shop__content-border hide-on-mobile" />
                  <div className="shop__content-last">
                    <div className="shop__content-text">
                      <div className="shop__content-text--top">
                        <label className="shop__content-cmt">Đánh giá</label>
                        <span className="shop__content-cmt--number">6.9k</span>
                      </div>
                      <div className="shop__content-text--top">
                        <label className="shop__content-cmt">Sản phẩm</label>
                        <span className="shop__content-cmt--number">99</span>
                      </div>
                      <div className="shop__content-text--top">
                        <label className="shop__content-cmt">Tỉ lệ phản hồi</label>
                        <span className="shop__content-cmt--number">69%</span>
                      </div>
                    </div>
                    <div className="shop__content-text hide-on-mobile">
                      <div className="shop__content-text--top">
                        <label className="shop__content-cmt">Thời gian phản hồi</label>
                        <span className="shop__content-cmt--number">vài phút</span>
                      </div>
                      <div className="shop__content-text--top">
                        <label className="shop__content-cmt">Tham gia</label>
                        <span className="shop__content-cmt--number">Hai năm trước</span>
                      </div>
                      <div className="shop__content-text--top">
                        <label className="shop__content-cmt">Người theo dõi</label>
                        <span className="shop__content-cmt--number">7 triệu</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* Detail product */}
            <div className="row detail__product sm-gutter">
              <div className="col p-9-6 t-12 m-12">

                {/* Product review */}
                {/* <div className="row product__review">

                </div> */}
                {/* end review */}
                {/* Product related */}
                <div className="row product__related">


                  <div className="col p-12 m-12 t-12">
                    <div className="product__related-page">
                      <div className="product__related-heading">
                        <span className="product__related-title">
                          CÓ THỂ BẠN CŨNG THÍCH
                        </span>
                        <a href="#" className="product__related-link">
                          Xem tất cả
                          <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0} className="breadcrumb--icon">
                            <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
                          </svg>
                        </a>
                      </div>
                      <div className="product__related-body row sm-gutter">

                        {
                          sameProduct.map((itemOrder, order) => {

                            return (
                              <div className="col p-2 t-4 m-6">

                                <div className="product__content-img" style={{ backgroundImage: `url(${itemOrder.href !== null ? itemOrder.href : fakeimg}` }} />
                                <div className="product__related-content">
                                  <div className="product__related-name">
                                    {itemOrder.category !== null ? itemOrder.category : 'Bia '}
                                  </div>
                                  <div className="product__related-sale content-discount--item">10% GIẢM</div>
                                  <div className="product__related-price">
                                    <span className="product__related-price-text detail__top-product--price">
                                      99.000
                                      <span className="vnd-class">₫</span>
                                    </span>
                                    <span className="product__related-sell">
                                      Đã bán 189
                                    </span>
                                  </div>
                                </div>
                                <div className="home-product-item__favorite">
                                  <i className="fas fa-check" />
                                  <span>Yêu thích</span>
                                </div>
                                <div className="home-product-item__sale-off">
                                  <span className="home-product-item__sale-off-percent">43%</span>
                                  <span className="home-product-item__sale-off-label">GIẢM</span>
                                </div>

                              </div>
                            )
                          })

                        }
                        haha


                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col p-2-4 t-0 m-12">
                <div className="detail__product-right">
                  <div className="detail__top-product--head">
                    Sản Phẩm Bán Chạy
                  </div>
                  <a href="#" className="detail__top-product--link">
                    <div className="detail__top-product--img" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/6d5199bb9d2156e0de99183321d39e53_tn")' }} />
                    <div className="detail__top-product--text">
                      <h3 className="detail__top-product--name">
                        Áo thể thao bra yếm nữ croptop CERA-Y màu trắng CRA034
                      </h3>
                      <div className="detail__top-price">
                        <span className="detail__top-product--price">
                          58.500
                          <span className="vnd-class">₫</span>
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="detail__top-product--link">
                    <div className="detail__top-product--img" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/2eaaf9d13854346929ccd0ef6395fc74_tn")' }} />
                    <div className="detail__top-product--text">
                      <h3 className="detail__top-product--name">
                        Áo thể thao bra hai dây CERA-Y bản 1cm croptop CRA018
                      </h3>
                      <div className="detail__top-price">
                        <span className="detail__top-product--price">
                          40.500
                          <span className="vnd-class">₫</span>
                        </span>
                        <span className="vnd-to-class" />
                        <span className="detail__top-product--price">
                          60.500
                          <span className="vnd-class">₫</span>
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="detail__top-product--link">
                    <div className="detail__top-product--img" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/a6a6082ec157bd1801c217a594995041_tn")' }} />
                    <div className="detail__top-product--text">
                      <h3 className="detail__top-product--name">
                        Áo thể thao bra hai dây bản to 3cm croptop CERA-Y màu đen CRA032
                      </h3>
                      <div className="detail__top-price">
                        <span className="detail__top-product--price">
                          99.999
                          <span className="vnd-class">₫</span>
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="detail__top-product--link">
                    <div className="detail__top-product--img" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/f53558ea21555919f4d506ace10b7118_tn")' }} />
                    <div className="detail__top-product--text">
                      <h3 className="detail__top-product--name">
                        Áo croptop ba lỗ CERA-Y chất thun co dãn CRA035
                      </h3>
                      <div className="detail__top-price">
                        <span className="detail__top-product--price">
                          110.000
                          <span className="vnd-class">₫</span>
                        </span>
                        <span className="vnd-to-class" />
                        <span className="detail__top-product--price">
                          160.000
                          <span className="vnd-class">₫</span>
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="detail__top-product--link">
                    <div className="detail__top-product--img" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/c7ce41ce9cc32c1f40572c634b10eaef_tn")' }} />
                    <div className="detail__top-product--text">
                      <h3 className="detail__top-product--name">
                        Áo thể thao bra croptop CERA-Y màu đen CRA025
                      </h3>
                      <div className="detail__top-price">
                        <span className="detail__top-product--price">
                          88.800
                          <span className="vnd-class">₫</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


    </>

  );
}

export default ProductDetails;
