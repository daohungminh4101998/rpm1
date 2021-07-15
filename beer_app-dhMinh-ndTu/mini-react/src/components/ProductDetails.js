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
            <div className="wrapper">
  <header className="header">
    <div className="grid wide fix-wide-on-tablet">
      {/* Header navbar */}
      <nav className="header__navbar hide-on-mobile-tablet">
        <ul className="header__navbar-list">
          <li className="header__navbar-item header__navber-item--has-link header__navbar-item--separate">
            Vào cửa hàng trên ứng dụng MH Shop
            <div className="header__qr">
              <img src="assets/img/qr_code.png" alt="QR CODE" className="header__qr-img" />
              <div className="header__qr-apps">
                <a href="#" className="header__qr-link">
                  <img src="assets/img/google_play.png" alt="Google Play" className="header__qr-download-img" />
                </a>
                <a href="#" className="header__qr-link">
                  <img src="assets/img/app_store.png" alt="App Store" className="header__qr-download-img" />
                </a>
              </div>
            </div>
          </li>
          <li className="header__navbar-item">
            <span className="header__navbar-title--no-pointer">
              Kết nối
            </span>
            <a href="#" className="header__navbar-icon-link">
              <i className="header__navbar-icon fab fa-facebook" />
            </a>
            <a href="#" className="header__navbar-icon-link">
              <i className="header__navbar-icon fab fa-instagram" />
            </a>
          </li>
        </ul>
        <ul className="header__navbar-list">
          <li className="header__navbar-item header__navber-item--has-notify">
            <a href="#" className="header__navbar-item-link">
              <i className="header__navbar-icon far fa-bell" />
              Thông báo
            </a>
            <div className="header__notify">
              <header className="header__notify-header">
                <h3>Thông báo mới nhận</h3>
              </header>
              <ul className="header__notify-list">
                <li className="header__notify-item">
                  <a href="#" className="header__notify-link">
                    <img src="https://cf.shopee.vn/file/aebbec31c262e22639dc6ecc75179b16_tn" alt="" className="header__notify-img" />
                    <div className="header__notify-info">
                      <span className="header__notify-name">Mỹ phẩm Ohui chính hãng Mỹ phẩm Ohui chính hãng Mỹ phẩm Ohui chính hãng Mỹ phẩm Ohui chính hãng</span>
                      <span className="header__notify-descriotion">Mô tả Ohui chính hãng Ohui chính hãng Mô tả Ohui chính hãng Ohui chính hãng Mô tả Ohui chính hãng Ohui chính hãng</span>
                    </div>
                  </a>
                </li>
                <li className="header__notify-item">
                  <a href="#" className="header__notify-link">
                    <img src="https://cf.shopee.vn/file/4fc67eef124763f71f8a1a928b2f209d" alt="" className="header__notify-img" />
                    <div className="header__notify-info">
                      <span className="header__notify-name">Váy polo cổ đức cực năng động. Váy polo siêu hot</span>
                      <span className="header__notify-descriotion">Khách chưa rõ size số vui lòng nt tư vấn trước khi mua hàng để tránh tình trạng chật rộng shop k.</span>
                    </div>
                  </a>
                </li>
                <li className="header__notify-item">
                  <a href="#" className="header__notify-link">
                    <img src="https://cf.shopee.vn/file/dd3768d68449b9c4e5dc653339443dfd" alt="" className="header__notify-img" />
                    <div className="header__notify-info">
                      <span className="header__notify-name">Váy Nữ Caro Cổ Vuông Ôm Body Chiết Eo Sang Chảnh Sun.z</span>
                      <span className="header__notify-descriotion">Tư vấn nhanh chóng, nếu bạn có bất kỳ câu hỏi nào, vui lòng hỏi và trò chuyện, chúng tôi sẽ phục vụ bạn trực tuyến online hằng ngày</span>
                    </div>
                  </a>
                </li>
                <li className="header__notify-item header__notify-item--viewed">
                  <a href="#" className="header__notify-link">
                    <img src="https://cf.shopee.vn/file/4b7af8582e7b284216da68e982785141" alt="" className="header__notify-img" />
                    <div className="header__notify-info">
                      <span className="header__notify-name">Zara Mickey hot hit lại sản xuất thêm rồi.</span>
                      <span className="header__notify-descriotion">Vừa xinh vừa dễ phối đồ. Phiên bản đạp gót của Zara là ưng nhất trong các loại đạp gót luôn ạ</span>
                    </div>
                  </a>
                </li>
                <li className="header__notify-item header__notify-item--viewed">
                  <a href="#" className="header__notify-link">
                    <img src="https://cf.shopee.vn/file/e7e789acc9bd94486e32acc961b9227e" alt="" className="header__notify-img" />
                    <div className="header__notify-info">
                      <span className="header__notify-name">Giày bệt nơ chất liệu da lộn hàng chuẩn đẹp</span>
                      <span className="header__notify-descriotion">Cách đặt nhiều sản phẩm/mẫu/màu gộp 1 đơn hàng: Bạn chọn các sản phẩm cần mua</span>
                    </div>
                  </a>
                </li>
                <li className="header__notify-item header__notify-item--viewed">
                  <a href="#" className="header__notify-link">
                    <img src="https://cf.shopee.vn/file/4b7af8582e7b284216da68e982785141" alt="" className="header__notify-img" />
                    <div className="header__notify-info">
                      <span className="header__notify-name">Zara Mickey hot hit lại sản xuất thêm rồi.</span>
                      <span className="header__notify-descriotion">Vừa xinh vừa dễ phối đồ. Phiên bản đạp gót của Zara là ưng nhất trong các loại đạp gót luôn ạ</span>
                    </div>
                  </a>
                </li>
                <li className="header__notify-item header__notify-item--viewed">
                  <a href="#" className="header__notify-link">
                    <img src="https://cf.shopee.vn/file/e7e789acc9bd94486e32acc961b9227e" alt="" className="header__notify-img" />
                    <div className="header__notify-info">
                      <span className="header__notify-name">Giày bệt nơ chất liệu da lộn hàng chuẩn đẹp</span>
                      <span className="header__notify-descriotion">Cách đặt nhiều sản phẩm/mẫu/màu gộp 1 đơn hàng: Bạn chọn các sản phẩm cần mua</span>
                    </div>
                  </a>
                </li>
                <li className="header__notify-item header__notify-item--viewed">
                  <a href="#" className="header__notify-link">
                    <img src="https://cf.shopee.vn/file/4b7af8582e7b284216da68e982785141" alt="" className="header__notify-img" />
                    <div className="header__notify-info">
                      <span className="header__notify-name">Zara Mickey hot hit lại sản xuất thêm rồi.</span>
                      <span className="header__notify-descriotion">Vừa xinh vừa dễ phối đồ. Phiên bản đạp gót của Zara là ưng nhất trong các loại đạp gót luôn ạ</span>
                    </div>
                  </a>
                </li>
                <li className="header__notify-item header__notify-item--viewed">
                  <a href="#" className="header__notify-link">
                    <img src="https://cf.shopee.vn/file/e7e789acc9bd94486e32acc961b9227e" alt="" className="header__notify-img" />
                    <div className="header__notify-info">
                      <span className="header__notify-name">Giày bệt nơ chất liệu da lộn hàng chuẩn đẹp</span>
                      <span className="header__notify-descriotion">Cách đặt nhiều sản phẩm/mẫu/màu gộp 1 đơn hàng: Bạn chọn các sản phẩm cần mua</span>
                    </div>
                  </a>
                </li>
              </ul>
              <footer className="header__notify-footer">
                <a href="#" className="header__notify-footer-btn">
                  Xem tất cả
                </a>
              </footer>
            </div>
          </li>
          <li className="header__navbar-item">
            <a href="#" className="header__navbar-item-link">
              <i className="header__navbar-icon far fa-question-circle" />
              Trợ giúp
            </a>
          </li>
          {/* <li class="header__navbar-item header__navbar-item--bold header__navbar-item--separate">Đăng kí</li>
                  <li class="header__navbar-item header__navbar-item--bold">Đăng nhập</li> */}
          <li className="header__navbar-item header__navbar-user">
            <img src="https://yt3.ggpht.com/yti/ANoDKi5pv5fU3lXkrswX8iF2gEL5yetOMwkB3vUMdHEHPg=s88-c-k-c0x00ffffff-no-rj-mo" alt="Username" className="header__navbar-user-img" />
            <span className="header__navbar-user-name">Mark Han</span>
            <ul className="header__navbar-user-menu">
              <li className="header__navbar-user-item"><a href="#">Tài khoản của tôi</a></li>
              <li className="header__navbar-user-item"><a href="#">Địa chỉ của tôi</a></li>
              <li className="header__navbar-user-item"><a href="#">Đơn mua</a></li>
              <li className="header__navbar-user-item header__navbar-user-item--separate"><a href="#">Đăng xuất</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      {/* Header with search */}
      <div className="header-with-search">
        {/* List Mobile icon */}
        <label htmlFor="mobile-list-input" className="header__mobile-list">
          <i className="header__mobile-list-icon fas fa-bars" />
        </label>
        {/* Search mobile icon */}
        <label htmlFor="mobile-search-input" className="header__mobile-search">
          <i className="header__mobile-search-icon fas fa-search" />
        </label>                           
        {/* Logo */}
        <div className="header__logo">
          <a href="index.html" className="header__logo-link">
            <svg viewBox="0 0 192 65" className="header__logo-img">
              <g fillRule="evenodd">
                <path fill="#fff" d="M35.6717403 44.953764c-.3333497 2.7510509-2.0003116 4.9543414-4.5823845 6.0575984-1.4379707.6145919-3.36871.9463856-4.896954.8421628-2.3840266-.0911143-4.6237865-.6708937-6.6883352-1.7307424-.7375522-.3788551-1.8370513-1.1352759-2.6813095-1.8437757-.213839-.1790053-.239235-.2937577-.0977428-.4944671.0764015-.1151823.2172535-.3229831.5286218-.7791994.45158-.6616533.5079208-.7446018.5587128-.8221779.14448-.2217688.3792333-.2411091.6107855-.0588804.0243289.0189105.0243289.0189105.0426824.0333083.0379873.0294402.0379873.0294402.1276204.0990653.0907002.0706996.14448.1123887.166248.1287205 2.2265285 1.7438508 4.8196989 2.7495466 7.4376251 2.8501162 3.6423042-.0496401 6.2615109-1.6873341 6.7308041-4.2020035.5160305-2.7675977-1.6565047-5.1582742-5.9070334-6.4908212-1.329344-.4166762-4.6895175-1.7616869-5.3090528-2.1250697-2.9094471-1.7071043-4.2697358-3.9430584-4.0763845-6.7048539.296216-3.8283059 3.8501677-6.6835796 8.340785-6.702705 2.0082079-.004083 4.0121475.4132378 5.937338 1.2244562.6816382.2873109 1.8987274.9496089 2.3189359 1.2633517.2420093.1777159.2898136.384872.1510957.60836-.0774686.12958-.2055158.3350171-.4754821.7632974l-.0029878.0047276c-.3553311.5640922-.3664286.5817134-.447952.7136572-.140852.2144625-.3064598.2344475-.5604202.0732783-2.0600669-1.3839063-4.3437898-2.0801572-6.8554368-2.130442-3.126914.061889-5.4706057 1.9228561-5.6246892 4.4579402-.0409751 2.2896772 1.676352 3.9613243 5.3858811 5.2358503 7.529819 2.4196871 10.4113092 5.25648 9.869029 9.7292478M26.3725216 5.42669372c4.9022893 0 8.8982174 4.65220288 9.0851664 10.47578358H17.2875686c.186949-5.8235807 4.1828771-10.47578358 9.084953-10.47578358m25.370857 11.57065968c0-.6047069-.4870064-1.0948761-1.0875481-1.0948761h-11.77736c-.28896-7.68927544-5.7774923-13.82058185-12.5059489-13.82058185-6.7282432 0-12.2167755 6.13130641-12.5057355 13.82058185l-11.79421958.0002149c-.59136492.0107446-1.06748731.4968309-1.06748731 1.0946612 0 .0285807.00106706.0569465.00320118.0848825H.99995732l1.6812605 37.0613963c.00021341.1031483.00405483.2071562.01173767.3118087.00170729.0236381.003628.0470614.00554871.0704847l.00362801.0782207.00405483.004083c.25545428 2.5789222 2.12707837 4.6560709 4.67201764 4.7519129l.00576212.0055872h37.4122078c.0177132.0002149.0354264.0004298.0531396.0004298.0177132 0 .0354264-.0002149.0531396-.0004298h.0796027l.0017073-.0015043c2.589329-.0706995 4.6867431-2.1768587 4.9082648-4.787585l.0012805-.0012893.0017073-.0350275c.0021341-.0275062.0040548-.0547975.0057621-.0823037.0040548-.065757.0068292-.1312992.0078963-.1964115l1.8344904-37.207738h-.0012805c.001067-.0186956.0014939-.0376062.0014939-.0565167M176.465457 41.1518926c.720839-2.3512494 2.900423-3.9186779 5.443734-3.9186779 2.427686 0 4.739107 1.6486899 5.537598 3.9141989l.054826.1556978h-11.082664l.046506-.1512188zm13.50267 3.4063683c.014933.0006399.014933.0006399.036906.0008531.021973-.0002132.021973-.0002132.044372-.0008531.53055-.0243144.950595-.4766911.950595-1.0271786 0-.0266606-.000853-.0496953-.00256-.0865936.000427-.0068251.000427-.020262.000427-.0635588 0-5.1926268-4.070748-9.4007319-9.09145-9.4007319-5.020488 0-9.091235 4.2081051-9.091235 9.4007319 0 .3871116.022399.7731567.067838 1.1568557l.00256.0204753.01408.1013102c.250022 1.8683731 1.047233 3.5831812 2.306302 4.9708108-.00064-.0006399.00064.0006399.007253.0078915 1.396026 1.536289 3.291455 2.5833031 5.393601 2.9748936l.02752.0053321v-.0027727l.13653.0228215c.070186.0119439.144211.0236746.243409.039031 2.766879.332724 5.221231-.0661182 7.299484-1.1127057.511777-.2578611.971928-.5423827 1.37064-.8429007.128211-.0968312.243622-.1904632.34346-.2781231.051412-.0452164.092372-.083181.114131-.1051493.468898-.4830897.498124-.6543572.215249-1.0954297-.31146-.4956734-.586228-.9179769-.821744-1.2675504-.082345-.1224254-.154023-.2267215-.214396-.3133151-.033279-.0475624-.033279-.0475624-.054399-.0776356-.008319-.0117306-.008319-.0117306-.013866-.0191956l-.00256-.0038391c-.256208-.3188605-.431565-.3480805-.715933-.0970445-.030292.0268739-.131624.1051493-.14997.1245582-1.999321 1.775381-4.729508 2.3465571-7.455854 1.7760208-.507724-.1362888-.982595-.3094759-1.419919-.5184948-1.708127-.8565509-2.918343-2.3826022-3.267563-4.1490253l-.02752-.1394881h13.754612zM154.831964 41.1518926c.720831-2.3512494 2.900389-3.9186779 5.44367-3.9186779 2.427657 0 4.739052 1.6486899 5.537747 3.9141989l.054612.1556978h-11.082534l.046505-.1512188zm13.502512 3.4063683c.015146.0006399.015146.0006399.037118.0008531.02176-.0002132.02176-.0002132.044159-.0008531.530543-.0243144.950584-.4766911.950584-1.0271786 0-.0266606-.000854-.0496953-.00256-.0865936.000426-.0068251.000426-.020262.000426-.0635588 0-5.1926268-4.070699-9.4007319-9.091342-9.4007319-5.020217 0-9.091343 4.2081051-9.091343 9.4007319 0 .3871116.022826.7731567.068051 1.1568557l.00256.0204753.01408.1013102c.250019 1.8683731 1.04722 3.5831812 2.306274 4.9708108-.00064-.0006399.00064.0006399.007254.0078915 1.396009 1.536289 3.291417 2.5833031 5.393538 2.9748936l.027519.0053321v-.0027727l.136529.0228215c.070184.0119439.144209.0236746.243619.039031 2.766847.332724 5.22117-.0661182 7.299185-1.1127057.511771-.2578611.971917-.5423827 1.370624-.8429007.128209-.0968312.243619-.1904632.343456-.2781231.051412-.0452164.09237-.083181.11413-.1051493.468892-.4830897.498118-.6543572.215246-1.0954297-.311457-.4956734-.586221-.9179769-.821734-1.2675504-.082344-.1224254-.154022-.2267215-.21418-.3133151-.033492-.0475624-.033492-.0475624-.054612-.0776356-.008319-.0117306-.008319-.0117306-.013866-.0191956l-.002346-.0038391c-.256419-.3188605-.431774-.3480805-.716138-.0970445-.030292.0268739-.131623.1051493-.149969.1245582-1.999084 1.775381-4.729452 2.3465571-7.455767 1.7760208-.507717-.1362888-.982582-.3094759-1.419902-.5184948-1.708107-.8565509-2.918095-2.3826022-3.267311-4.1490253l-.027733-.1394881h13.754451zM138.32144123 49.7357905c-3.38129629 0-6.14681004-2.6808521-6.23169343-6.04042014v-.31621743c.08401943-3.35418649 2.85039714-6.03546919 6.23169343-6.03546919 3.44242097 0 6.23320537 2.7740599 6.23320537 6.1960534 0 3.42199346-2.7907844 6.19605336-6.23320537 6.19605336m.00172791-15.67913203c-2.21776751 0-4.33682838.7553485-6.03989586 2.140764l-.19352548.1573553V34.6208558c0-.4623792-.0993546-.56419733-.56740117-.56419733h-2.17651376c-.47409424 0-.56761716.09428403-.56761716.56419733v27.6400724c0 .4539841.10583425.5641973.56761716.5641973h2.17651376c.46351081 0 .56740117-.1078454.56740117-.5641973V50.734168l.19352548.1573553c1.70328347 1.3856307 3.82234434 2.1409792 6.03989586 2.1409792 5.27140956 0 9.54473746-4.2479474 9.54473746-9.48802964 0-5.239867-4.2733279-9.48781439-9.54473746-9.48781439M115.907646 49.5240292c-3.449458 0-6.245805-2.7496948-6.245805-6.1425854 0-3.3928907 2.79656-6.1427988 6.245805-6.1427988 3.448821 0 6.24538 2.7499081 6.24538 6.1427988 0 3.3926772-2.796346 6.1425854-6.24538 6.1425854m.001914-15.5438312c-5.28187 0-9.563025 4.2112903-9.563025 9.4059406 0 5.1944369 4.281155 9.4059406 9.563025 9.4059406 5.281657 0 9.562387-4.2115037 9.562387-9.4059406 0-5.1946503-4.280517-9.4059406-9.562387-9.4059406M94.5919049 34.1890939c-1.9281307 0-3.7938902.6198995-5.3417715 1.7656047l-.188189.1393105V23.2574169c0-.4254677-.1395825-.5643476-.5649971-.5643476h-2.2782698c-.4600414 0-.5652122.1100273-.5652122.5643476v29.2834155c0 .443339.1135587.5647782.5652122.5647782h2.2782698c.4226187 0 .5649971-.1457701.5649971-.5647782v-9.5648406c.023658-3.011002 2.4931278-5.4412923 5.5299605-5.4412923 3.0445753 0 5.516841 2.4421328 5.5297454 5.4630394v9.5430935c0 .4844647.0806524.5645628.5652122.5645628h2.2726775c.481764 0 .565212-.0824666.565212-.5645628v-9.5710848c-.018066-4.8280677-4.0440197-8.7806537-8.9328471-8.7806537M62.8459442 47.7938061l-.0053397.0081519c-.3248668.4921188-.4609221.6991347-.5369593.8179812-.2560916.3812097-.224267.551113.1668119.8816949.91266.7358184 2.0858968 1.508535 2.8774525 1.8955369 2.2023021 1.076912 4.5810275 1.646045 7.1017886 1.6975309 1.6283921.0821628 3.6734936-.3050536 5.1963734-.9842376 2.7569891-1.2298679 4.5131066-3.6269626 4.8208863-6.5794607.4985136-4.7841067-2.6143125-7.7747902-10.6321784-10.1849709l-.0021359-.0006435c-3.7356476-1.2047686-5.4904836-2.8064071-5.4911243-5.0426086.1099976-2.4715346 2.4015793-4.3179454 5.4932602-4.4331449 2.4904317.0062212 4.6923065.6675996 6.8557356 2.0598624.4562232.2767364.666607.2256796.9733188-.172263.035242-.0587797.1332787-.2012238.543367-.790093l.0012815-.0019308c.3829626-.5500403.5089793-.7336731.5403767-.7879478.258441-.4863266.2214903-.6738208-.244985-1.0046173-.459427-.3290803-1.7535544-1.0024722-2.4936356-1.2978721-2.0583439-.8211991-4.1863175-1.2199998-6.3042524-1.1788111-4.8198184.1046878-8.578747 3.2393171-8.8265087 7.3515337-.1572005 2.9703036 1.350301 5.3588174 4.5000778 7.124567.8829712.4661613 4.1115618 1.6865902 5.6184225 2.1278667 4.2847814 1.2547527 6.5186944 3.5630343 6.0571315 6.2864205-.4192725 2.4743234-3.0117991 4.1199394-6.6498372 4.2325647-2.6382344-.0549182-5.2963324-1.0217793-7.6043603-2.7562084-.0115337-.0083664-.0700567-.0519149-.1779185-.1323615-.1516472-.1130543-.1516472-.1130543-.1742875-.1300017-.4705335-.3247898-.7473431-.2977598-1.0346184.1302162-.0346012.0529875-.3919333.5963776-.5681431.8632459" />
              </g>
            </svg>
          </a>
        </div>
        <input type="checkbox" name id="mobile-search-input" className="header__search-checkbox" hidden />
        <div className="header__search">
          <div className="header__search-input-wrap">
            <input type="text" className="header__search-input" placeholder="Tìm kiếm sản phẩm" />
            {/* Search history */}
            <div className="header__search-history">
              <h3 className="header__search-history-heading">Lịch sử tìm kiếm</h3>
              <ul className="header__search-history-list">
                <li className="header__search-history-item">
                  <a href="#">N</a>
                </li>
                <li className="header__search-history-item">
                  <a href="#">T</a>
                </li>
                <li className="header__search-history-item">
                  <a href="#">Hana</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="header__search-select">
            <span className="header__search-select-label">Trong shop</span>
            <i className="header__search-select-icon fas fa-angle-down" />
            <ul className="header__search-option">
              <li className="header__search-option-item header__search-option-item--active">
                <span>Trong shop</span>
                <i className="fas fa-check" />
              </li>
              <li className="header__search-option-item">
                <span>Ngoài shop</span>
                <i className="fas fa-check" />
              </li>
            </ul>
          </div>
          <button className="header__search-btn">
            <i className="header__search-btn-icon fas fa-search" />
          </button>
        </div>
        {/* Mobile */}
        <label htmlFor="header__mobile-notify" className="header__notify-mobile">
          <i className="header__notify-mobile--icon far fa-bell" />           
          <span className="header__notify-mobile--notice">5+</span>                 
        </label>
        <input type="checkbox" hidden name id="header__mobile-notify" className="header__mobile-noti" />
        <label htmlFor="header__mobile-notify" className="header__mobile-notify--overlay" />
        <div className="header__notify">
          <header className="header__notify-header">
            <h3>Thông báo mới nhận</h3>
          </header>
          <ul className="header__notify-list">
            <li className="header__notify-item">
              <a href="#" className="header__notify-link">
                <img src="https://cf.shopee.vn/file/aebbec31c262e22639dc6ecc75179b16_tn" alt="" className="header__notify-img" />
                <div className="header__notify-info">
                  <span className="header__notify-name">Mỹ phẩm Ohui chính hãng Mỹ phẩm Ohui chính hãng Mỹ phẩm Ohui chính hãng Mỹ phẩm Ohui chính hãng</span>
                  <span className="header__notify-descriotion">Mô tả Ohui chính hãng Ohui chính hãng Mô tả Ohui chính hãng Ohui chính hãng Mô tả Ohui chính hãng Ohui chính hãng</span>
                </div>
              </a>
            </li>
            <li className="header__notify-item">
              <a href="#" className="header__notify-link">
                <img src="https://cf.shopee.vn/file/4fc67eef124763f71f8a1a928b2f209d" alt="" className="header__notify-img" />
                <div className="header__notify-info">
                  <span className="header__notify-name">Váy polo cổ đức cực năng động. Váy polo siêu hot</span>
                  <span className="header__notify-descriotion">Khách chưa rõ size số vui lòng nt tư vấn trước khi mua hàng để tránh tình trạng chật rộng shop k.</span>
                </div>
              </a>
            </li>
            <li className="header__notify-item">
              <a href="#" className="header__notify-link">
                <img src="https://cf.shopee.vn/file/dd3768d68449b9c4e5dc653339443dfd" alt="" className="header__notify-img" />
                <div className="header__notify-info">
                  <span className="header__notify-name">Váy Nữ Caro Cổ Vuông Ôm Body Chiết Eo Sang Chảnh Sun.z</span>
                  <span className="header__notify-descriotion">Tư vấn nhanh chóng, nếu bạn có bất kỳ câu hỏi nào, vui lòng hỏi và trò chuyện, chúng tôi sẽ phục vụ bạn trực tuyến online hằng ngày</span>
                </div>
              </a>
            </li>
            <li className="header__notify-item header__notify-item--viewed">
              <a href="#" className="header__notify-link">
                <img src="https://cf.shopee.vn/file/4b7af8582e7b284216da68e982785141" alt="" className="header__notify-img" />
                <div className="header__notify-info">
                  <span className="header__notify-name">Zara Mickey hot hit lại sản xuất thêm rồi.</span>
                  <span className="header__notify-descriotion">Vừa xinh vừa dễ phối đồ. Phiên bản đạp gót của Zara là ưng nhất trong các loại đạp gót luôn ạ</span>
                </div>
              </a>
            </li>
            <li className="header__notify-item header__notify-item--viewed">
              <a href="#" className="header__notify-link">
                <img src="https://cf.shopee.vn/file/e7e789acc9bd94486e32acc961b9227e" alt="" className="header__notify-img" />
                <div className="header__notify-info">
                  <span className="header__notify-name">Giày bệt nơ chất liệu da lộn hàng chuẩn đẹp</span>
                  <span className="header__notify-descriotion">Cách đặt nhiều sản phẩm/mẫu/màu gộp 1 đơn hàng: Bạn chọn các sản phẩm cần mua</span>
                </div>
              </a>
            </li>
            <li className="header__notify-item header__notify-item--viewed">
              <a href="#" className="header__notify-link">
                <img src="https://cf.shopee.vn/file/4b7af8582e7b284216da68e982785141" alt="" className="header__notify-img" />
                <div className="header__notify-info">
                  <span className="header__notify-name">Zara Mickey hot hit lại sản xuất thêm rồi.</span>
                  <span className="header__notify-descriotion">Vừa xinh vừa dễ phối đồ. Phiên bản đạp gót của Zara là ưng nhất trong các loại đạp gót luôn ạ</span>
                </div>
              </a>
            </li>
            <li className="header__notify-item header__notify-item--viewed">
              <a href="#" className="header__notify-link">
                <img src="https://cf.shopee.vn/file/e7e789acc9bd94486e32acc961b9227e" alt="" className="header__notify-img" />
                <div className="header__notify-info">
                  <span className="header__notify-name">Giày bệt nơ chất liệu da lộn hàng chuẩn đẹp</span>
                  <span className="header__notify-descriotion">Cách đặt nhiều sản phẩm/mẫu/màu gộp 1 đơn hàng: Bạn chọn các sản phẩm cần mua</span>
                </div>
              </a>
            </li>
            <li className="header__notify-item header__notify-item--viewed">
              <a href="#" className="header__notify-link">
                <img src="https://cf.shopee.vn/file/4b7af8582e7b284216da68e982785141" alt="" className="header__notify-img" />
                <div className="header__notify-info">
                  <span className="header__notify-name">Zara Mickey hot hit lại sản xuất thêm rồi.</span>
                  <span className="header__notify-descriotion">Vừa xinh vừa dễ phối đồ. Phiên bản đạp gót của Zara là ưng nhất trong các loại đạp gót luôn ạ</span>
                </div>
              </a>
            </li>
            <li className="header__notify-item header__notify-item--viewed">
              <a href="#" className="header__notify-link">
                <img src="https://cf.shopee.vn/file/e7e789acc9bd94486e32acc961b9227e" alt="" className="header__notify-img" />
                <div className="header__notify-info">
                  <span className="header__notify-name">Giày bệt nơ chất liệu da lộn hàng chuẩn đẹp</span>
                  <span className="header__notify-descriotion">Cách đặt nhiều sản phẩm/mẫu/màu gộp 1 đơn hàng: Bạn chọn các sản phẩm cần mua</span>
                </div>
              </a>
            </li>
          </ul>
          <footer className="header__notify-footer">
            <a href="#" className="header__notify-footer-btn">
              Xem tất cả
            </a>
          </footer>
        </div>
        {/* Cart layout */}
        <div className="header__cart">
          <div className="header__cart-wrap">
            <i className="header__cart-icon fas fa-shopping-cart" />
            <span className="header__cart-notice">4</span>
            {/* No cart: header__cart-list--no-cart */}
            <div className="header__cart-list">
              <img src="assets/img/no-cart.png" alt="" className="header__cart-no-cart-img" />
              <span className="header__cart-list--no-cart-msg">Chưa có sản phẩm</span>
              <h4 className="header__cart-heading">Sản phẩm đã thêm</h4>
              <ul className="header__cart-list-item">
                <li className="header__cart-item">
                  <img src="https://cf.shopee.vn/file/4b7af8582e7b284216da68e982785141" alt="Bộ kem sáng da mềm mịn" className="header__cart-img" />
                  <div className="header__cart-item-info">
                    <div className="header__cart-item-head">
                      <h5 className="header__cart-item-name">Bộ kem sáng da mềm mịn miệng mắt tai chân luôn mắt tai chân luôn mắt tai chân luôn</h5>
                      <div className="header__cart-item-price-wrap">
                        <span className="header__cart-item-price">2.000.000đ</span>
                        <span className="header__cart-item-multiply">x</span>
                        <span className="header__cart-item-qnt">1</span>
                      </div>
                    </div>
                    <div className="header__cart-item-body">
                      <span className="header__cart-item-description">
                        Phân chia loại sản phẩm Phân chia loại sản phẩm Phân chia loại sản phẩm
                      </span>
                      <span className="header__cart-item-del">
                        Xóa
                      </span>
                    </div>
                  </div>
                </li>
                <li className="header__cart-item">
                  <img src="https://cf.shopee.vn/file/4fc67eef124763f71f8a1a928b2f209d" alt="Bộ kem sáng da mềm mịn" className="header__cart-img" />
                  <div className="header__cart-item-info">
                    <div className="header__cart-item-head">
                      <h5 className="header__cart-item-name">Váy polo cổ đức cực năng động</h5>
                      <div className="header__cart-item-price-wrap">
                        <span className="header__cart-item-price">1.305.000đ</span>
                        <span className="header__cart-item-multiply">x</span>
                        <span className="header__cart-item-qnt">1</span>
                      </div>
                    </div>
                    <div className="header__cart-item-body">
                      <span className="header__cart-item-description">
                        Khách chưa rõ size số vui lòng nhắn tin cho shop
                      </span>
                      <span className="header__cart-item-del">
                        Xóa
                      </span>
                    </div>
                  </div>
                </li>
                <li className="header__cart-item">
                  <img src="https://cf.shopee.vn/file/aebbec31c262e22639dc6ecc75179b16_tn" alt="Bộ kem sáng da mềm mịn" className="header__cart-img" />
                  <div className="header__cart-item-info">
                    <div className="header__cart-item-head">
                      <h5 className="header__cart-item-name">Zara Mickey hot hit lại</h5>
                      <div className="header__cart-item-price-wrap">
                        <span className="header__cart-item-price">1.030.000đ</span>
                        <span className="header__cart-item-multiply">x</span>
                        <span className="header__cart-item-qnt">1</span>
                      </div>
                    </div>
                    <div className="header__cart-item-body">
                      <span className="header__cart-item-description">
                        Vừa xinh vừa dễ phối đồ đẹp luôn
                      </span>
                      <span className="header__cart-item-del">
                        Xóa
                      </span>
                    </div>
                  </div>
                </li>
                <li className="header__cart-item">
                  <img src="https://cf.shopee.vn/file/dd3768d68449b9c4e5dc653339443dfd" alt="Bộ kem sáng da mềm mịn" className="header__cart-img" />
                  <div className="header__cart-item-info">
                    <div className="header__cart-item-head">
                      <h5 className="header__cart-item-name">Váy Nữ Caro Cổ Vuông Ôm</h5>
                      <div className="header__cart-item-price-wrap">
                        <span className="header__cart-item-price">2.070.000đ</span>
                        <span className="header__cart-item-multiply">x</span>
                        <span className="header__cart-item-qnt">1</span>
                      </div>
                    </div>
                    <div className="header__cart-item-body">
                      <span className="header__cart-item-description">
                        Body Chiết Eo Sang Chảnh Sun.z
                      </span>
                      <span className="header__cart-item-del">
                        Xóa
                      </span>
                    </div>
                  </div>
                </li>
                <li className="header__cart-item">
                  <img src="https://cf.shopee.vn/file/4b7af8582e7b284216da68e982785141" alt="Bộ kem sáng da mềm mịn" className="header__cart-img" />
                  <div className="header__cart-item-info">
                    <div className="header__cart-item-head">
                      <h5 className="header__cart-item-name">Bộ kem sáng da mềm mịn</h5>
                      <div className="header__cart-item-price-wrap">
                        <span className="header__cart-item-price">2.000.000đ</span>
                        <span className="header__cart-item-multiply">x</span>
                        <span className="header__cart-item-qnt">1</span>
                      </div>
                    </div>
                    <div className="header__cart-item-body">
                      <span className="header__cart-item-description">
                        Phân chia loại sản phẩm chia loại sản phẩm chia loại sản phẩm
                      </span>
                      <span className="header__cart-item-del">
                        Xóa
                      </span>
                    </div>
                  </div>
                </li>
                <li className="header__cart-item">
                  <img src="https://cf.shopee.vn/file/4fc67eef124763f71f8a1a928b2f209d" alt="Bộ kem sáng da mềm mịn" className="header__cart-img" />
                  <div className="header__cart-item-info">
                    <div className="header__cart-item-head">
                      <h5 className="header__cart-item-name">Váy polo cổ đức cực năng động</h5>
                      <div className="header__cart-item-price-wrap">
                        <span className="header__cart-item-price">1.305.000đ</span>
                        <span className="header__cart-item-multiply">x</span>
                        <span className="header__cart-item-qnt">1</span>
                      </div>
                    </div>
                    <div className="header__cart-item-body">
                      <span className="header__cart-item-description">
                        Khách chưa rõ size số vui lòng nt chia loại sản phẩm
                      </span>
                      <span className="header__cart-item-del">
                        Xóa
                      </span>
                    </div>
                  </div>
                </li>
                <li className="header__cart-item">
                  <img src="https://cf.shopee.vn/file/aebbec31c262e22639dc6ecc75179b16_tn" alt="Bộ kem sáng da mềm mịn" className="header__cart-img" />
                  <div className="header__cart-item-info">
                    <div className="header__cart-item-head">
                      <h5 className="header__cart-item-name">Zara Mickey hot hit lại</h5>
                      <div className="header__cart-item-price-wrap">
                        <span className="header__cart-item-price">1.030.000đ</span>
                        <span className="header__cart-item-multiply">x</span>
                        <span className="header__cart-item-qnt">1</span>
                      </div>
                    </div>
                    <div className="header__cart-item-body">
                      <span className="header__cart-item-description">
                        Vừa xinh vừa dễ phối đồ đẹp lắm luôn
                      </span>
                      <span className="header__cart-item-del">
                        Xóa
                      </span>
                    </div>
                  </div>
                </li>
                <li className="header__cart-item">
                  <img src="https://cf.shopee.vn/file/dd3768d68449b9c4e5dc653339443dfd" alt="Bộ kem sáng da mềm mịn" className="header__cart-img" />
                  <div className="header__cart-item-info">
                    <div className="header__cart-item-head">
                      <h5 className="header__cart-item-name">Váy Nữ Caro Cổ Vuông Ôm</h5>
                      <div className="header__cart-item-price-wrap">
                        <span className="header__cart-item-price">2.070.000đ</span>
                        <span className="header__cart-item-multiply">x</span>
                        <span className="header__cart-item-qnt">1</span>
                      </div>
                    </div>
                    <div className="header__cart-item-body">
                      <span className="header__cart-item-description">
                        Body Chiết Eo Sang Chảnh Sun.z
                      </span>
                      <span className="header__cart-item-del">
                        Xóa
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="header__cart-view-cart">
                <a href="#" className="header__cart-btn btn btn--primary">Xem giỏ hàng</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input type="checkbox" hidden className="nav__input" id="mobile-list-input" />
      <label htmlFor="mobile-list-input" className="nav__overlay" />
      {/* Mobile admin */}
      <nav className="header__mobile-nav">
        <div className="header__mobile-nav--heading">
          <img src="https://yt3.ggpht.com/yti/ANoDKi5pv5fU3lXkrswX8iF2gEL5yetOMwkB3vUMdHEHPg=s88-c-k-c0x00ffffff-no-rj-mo" alt="Hồ Hoàng Phú" className="header__mobile-nav--img" />
          <div className="header__mobile-nav--text">
            <h2 className="header__mobile-name">Mark Han</h2>
            <span className="header__mobile-rule">
              <i className="header__mobile-rule--icon fas fa-user-shield" />
              Admin
            </span>
          </div>
          <label htmlFor="mobile-list-input" className="header__mobile-close">
            <i className="header__mobile-close-icon fas fa-times" />
          </label>
        </div>
        <ul className="header__mobile-nav--list">
          <li>
            <a href="#" className="header__mobile-link">
              <i className="fas fa-home" />
              Trang chủ
            </a>
          </li>
          <li>
            <a href="#" className="header__mobile-link">
              <i className="fas fa-id-card" />
              Thông tin tài khoản
            </a>
          </li>
          <li>
            <a href="#" className="header__mobile-link">
              <i className="fas fa-box" />
              Quản lí đơn hàng
            </a>
          </li>
          <li>
            <a href="#" className="header__mobile-link">
              <i className="fas fa-map-marker-alt" />
              Địa chỉ của tôi
            </a>
          </li>
          <li>
            <a href="#" className="header__mobile-link">
              <i className="fas fa-sign-out-alt" />
              Đăng xuất
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <div className="product__container product__container-detail">
    <div className="grid wide fix-wide-on-tablet product__container--padding">
      {/* Nav list > */}
      <div className="page-breadcrumb">
        <a href="/" className="breadcrumb--link">MH Shop</a>
        <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0} className="breadcrumb--icon icon-arrow-right"><path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" /></svg>
        <a href="#" className="breadcrumb--link">Thời trang nữ</a>
        <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0} className="breadcrumb--icon icon-arrow-right"><path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" /></svg>
        <a href="#" className="breadcrumb--link">Áo</a>
        <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0} className="breadcrumb--icon icon-arrow-right"><path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" /></svg>
        <a href="#" className="breadcrumb--link">Áo hai dây &amp; ba lỗ</a>
        <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0} className="breadcrumb--icon icon-arrow-right"><path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" /></svg>
        <span className="breadcrumb--item">Áo croptop ba lỗ CERA-Y chất thun co dãn CRA035</span>
      </div>
      {/* Product */}
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
                  Áo croptop ba lỗ CERA-Y chất thun co dãn CRA035
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
            <div className="product__content-img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/cff0de51fa23c0509bb495c2cee2d186")'}} />
            <div className="product__content-scroll">
              <div className="product__content-img--list">
                <div className="product__content-img--item" style={{backgroundImage: 'url("https://cf.shopee.vn/file/f53558ea21555919f4d506ace10b7118_tn")'}} />
                <div className="product__content-img--item" style={{backgroundImage: 'url("https://cf.shopee.vn/file/d4242d1e9ae1e78cb2977514c454ddfc_tn")'}} />
                <div className="product__content-img--item" style={{backgroundImage: 'url("https://cf.shopee.vn/file/f53558ea21555919f4d506ace10b7118_tn")'}} />
                <div className="product__content-img--item" style={{backgroundImage: 'url("https://cf.shopee.vn/file/6eb96fdda8b9bcb989179e2ca944e8b1_tn")'}} />
                <div className="product__content-img--item" style={{backgroundImage: 'url("https://cf.shopee.vn/file/6eb96fdda8b9bcb989179e2ca944e8b1_tn")'}} />
                <div className="product__content-img--item" style={{backgroundImage: 'url("https://cf.shopee.vn/file/f53558ea21555919f4d506ace10b7118_tn")'}} />
                <div className="product__content-img--item" style={{backgroundImage: 'url("https://cf.shopee.vn/file/d4242d1e9ae1e78cb2977514c454ddfc_tn")'}} />
                <div className="product__content-img--item" style={{backgroundImage: 'url("https://cf.shopee.vn/file/f53558ea21555919f4d506ace10b7118_tn")'}} />
                <div className="product__content-img--item" style={{backgroundImage: 'url("https://cf.shopee.vn/file/6eb96fdda8b9bcb989179e2ca944e8b1_tn")'}} />
                <div className="product__content-img--item" style={{backgroundImage: 'url("https://cf.shopee.vn/file/6eb96fdda8b9bcb989179e2ca944e8b1_tn")'}} />
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
                  Áo croptop ba lỗ CERA-Y chất thun co dãn CRA035
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
                  <svg width={24} height={20} data-icon="share" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{color: 'var(--primary-color)'}} className="svg-right--action"><path fill="currentColor" d="M561.938 190.06L385.94 14.107C355.79-16.043 304 5.327 304 48.047v80.703C166.04 132.9 0 159.68 0 330.05c0 73.75 38.02 134.719 97.63 173.949 37.12 24.43 85.84-10.9 72.19-54.46C145.47 371.859 157.41 330.2 304 321.66v78.28c0 42.64 51.73 64.15 81.94 33.94l175.997-175.94c18.751-18.74 18.751-49.14.001-67.88zM352 400V272.09c-164.521 1.79-277.44 33.821-227.98 191.61C88 440 48 397.01 48 330.05c0-142.242 160.819-153.39 304-154.02V48l176 176-176 176z" /></svg>
                  <svg width={24} height={20} data-icon="link" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{color: 'var(--primary-color)'}} className="svg-right--action"><path fill="currentColor" d="M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z" /></svg>
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
                        <div className="discount-detail__img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/9ce102789d156548395752b9978d13a4")'}} />
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
                        <div className="discount-detail__img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/9ce102789d156548395752b9978d13a4")'}} />
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
                    Áo croptop ba lỗ  thun sexy gợi cảm với thiết kế tối giản theo phong cách trẻ trung hiện đại. Chất liệu thun cotton thoáng mát và thấm hút mồ hôi giúp bạn luôn thoải mái dễ chịu khi mặc. Vải đẹp, mặc mát, đủ màu. Sản phẩm có tông màu thanh lịch, hiện đại giúp bạn dễ dàng kết hợp với phụ kiện khác nhau để dạo phố hay dã ngoại cùng bạn bè vào dịp cuối tuần. 
                  </span>
                  <a href="#" className="content-info--link">Xem thêm</a>
                </div>
              </div>
              <div className="product__content-select">
                <div className="content-select--title">Màu</div>
                <div className="content-select--color">
                  <button className="content-select--item">
                    ĐEN
                  </button>
                  <button className="content-select--item">
                    HỒNG
                  </button>
                  <button className="content-select--item">
                    TRẮNG
                  </button>
                  <button className="content-select--item">
                    XANH
                  </button>
                </div>
              </div>
              <div className="product__content-count">
                <div className="content-count--title">Số lượng</div>
                <div className="content-count--control">
                  <div className="content-count--item">
                    <button className="content-count--button">
                      <svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x={0} y={0} className="content-count-svg-icon"><polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5" /></svg>
                    </button>
                    <input type="number" className="content-count--input" defaultValue={1} />
                    <button className="content-count--button">
                      <svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x={0} y={0} className="content-count-svg-icon"><polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5" /></svg>
                    </button>
                  </div>
                  <div className="content-count--item">
                    996 sản phẩm có sẵn
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
              <button className="content-buy-text">Mua luôn</button>
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
      {/* Sale on mobile */}
      <div className="row sale_mobile">
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
                    <div className="discount-detail__img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/9ce102789d156548395752b9978d13a4")'}} />
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
                    <div className="discount-detail__img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/9ce102789d156548395752b9978d13a4")'}} />
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
      </div>
      {/* Sale on mobile */}
      <div className="row ship_mobile">
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
                <svg version="1.1" viewBox="0 0 15 15" x={0} y={0} style={{width: '1.6rem', height: '1.6rem', stroke: 'rgba(0,0,0,.87)'}}><line fill="none" strokeLinejoin="round" strokeMiterlimit={10} x1="8.6" x2="4.2" y1="9.8" y2="9.8" /><circle cx={3} cy="11.2" fill="none" r={2} strokeMiterlimit={10} /><circle cx={10} cy="11.2" fill="none" r={2} strokeMiterlimit={10} /><line fill="none" strokeMiterlimit={10} x1="10.5" x2="14.4" y1="7.3" y2="7.3" /><polyline fill="none" points="1.5 9.8 .5 9.8 .5 1.8 10 1.8 10 9.1" strokeLinejoin="round" strokeMiterlimit={10} /><polyline fill="none" points="9.9 3.8 14 3.8 14.5 10.2 11.9 10.2" strokeLinejoin="round" strokeMiterlimit={10} /></svg>
              </div>
              <div className="ship__content-body">
                <div className="ship__content-title">
                  Phí vận chuyển: 
                </div>
                <div className="ship__content-post">
                  ₫18.000 - ₫45.500
                  <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" style={{width: '12px', height: '12px', color: 'rgba(0,0,0,.87)'}}><path stroke="none" d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z" /></svg>
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
                <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" style={{marginLeft: '0.2rem', fontSize: '0.8rem', stroke: 'rgba(0,0,0,.54)', width: '1rem', height: '1rem'}}><path stroke="none" d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" /></svg>
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
                      <span style={{fontSize: '1.2rem', color: '#EE4D2D'}}>Miễn phí vận chuyển</span>  cho đơn hàng từ <span style={{fontSize: '1.2rem', color: '#EE4D2D'}}>₫50.000</span> (giảm tối đa <span style={{fontSize: '1.2rem', color: '#EE4D2D'}}>₫25.000</span>)
                    </div>
                    <div className="ship__item-body--detail">
                      <span style={{fontSize: '1.2rem', color: '#EE4D2D'}}>Miễn phí vận chuyển</span>  cho đơn hàng từ <span style={{fontSize: '1.2rem', color: '#EE4D2D'}}>₫300.000</span> (giảm tối đa <span style={{fontSize: '1.2rem', color: '#EE4D2D'}}>₫75.000</span>)
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
      </div>
      {/* size on mobile */}
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
                <div className="size__content-img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/f53558ea21555919f4d506ace10b7118_tn")'}} />
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
      </div>
      {/* Info shop */}
      <div className="row shop__content sm-gutter">
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
      </div>
      {/* Detail product */}
      <div className="row detail__product sm-gutter">
        <div className="col p-9-6 t-12 m-12">
          <div className="detail__product-left">
            <div className="detail__product-head">
              CHI TIẾT SẢN PHẨM
            </div>
            <div className="product-caterogy hide-on-mobile">
              <label className="product-caterogy--name">Danh mục</label>
              <div className="product-caterogy--list">
                <a href="/" className="product-caterogy--link">F8 Shop</a>
                <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0} className="product-caterogy--icon icon-arrow-right"><path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" /></svg>
                <a href="#" className="product-caterogy--link">Thời trang nữ</a>
                <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0} className="product-caterogy--icon icon-arrow-right"><path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" /></svg>
                <a href="#" className="product-caterogy--link">Áo</a>
                <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0} className="product-caterogy--icon icon-arrow-right"><path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" /></svg>
                <a href="#" className="product-caterogy--link">Áo hai dây &amp; ba lỗ</a>
              </div>
            </div>
            <div className="product-detail--content">
              <label className="detail__content-name">Thương hiệu</label>
              <span className="detail__content-text">CERA-Y</span>
            </div>
            <div className="product-detail--content">
              <label className="detail__content-name">Kiểu tay</label>
              <span className="detail__content-text">Không tay</span>
            </div>
            <div className="product-detail--content">
              <label className="detail__content-name">Chất liệu</label>
              <span className="detail__content-text">Thun</span>
            </div>
            <div className="product-detail--content">
              <label className="detail__content-name">Xuất xứ</label>
              <span className="detail__content-text">Việt Nam</span>
            </div>
            <div className="product-detail--content">
              <label className="detail__content-name">Kho hàng</label>
              <span className="detail__content-text">3493</span>
            </div>
            <div className="product-detail--content">
              <label className="detail__content-name">Gửi từ</label>
              <span className="detail__content-text">Mỹ Đình 1, Nam Từ Niêm, Hà Nội</span>
            </div>
            <div className="detail__product-head">
              MÔ TẢ SẢN PHẨM
            </div>
            <div className="detail__product-post">
              <p className="detail__product-post--content">
                Dòng sản phẩm The First được chiết xuất kết hợp từ thành phần Hoa mẫu đơn: có tính chất tăng cường vi tuần hoàn, tác dụng chống oxy hóa  tương tự như Vitamin E, giúp ngăn ngừa oxy hóa lipid trong tế bào biểu bì. Nhờ vậy chiết xuất hoa mẫu đơn sẽ giúp làm giảm các dấu hiệu lão hóa, giảm nếp nhăn trên khuôn mặt, sửa chữa và phục hồi các tế bào, làm mềm và làm trắng da. </p>
              <p className="detail__product-post--content">                                    
                Đặc biệt, sự kết hợp tối ưu với công nghệ tế bào gốc EGF/hGF™ được cấp bằng sáng chế công nghệ tế bào gốc từ viện nghiên cứu toàn cầu nổi tiếng thế giới CHA Biotech thúc đẩy tế bào da hấp thụ chất dinh dưỡng giúp đẩy nhanh sự phát triển của tế bào trên da, giúp bảo vệ da khỏi các tác động từ bên ngoài, cải thiện độ đàn hồi của da như collagen và elastin, dưỡng ẩm làm da mềm mịn, làm trẻ hoá da, tái tạo tế bào chống lão hóa. Hơn hết,  sản phẩm còn hỗ trợ việc điều trị nám, vết thâm sau mụn, làm da sáng hơn.
                <a href="#" className="content-info--link hide-on-mobile">Xem thêm</a>
              </p>
            </div>
            <div className="review__pane-pagination--mobile show-on-mobile">
              <a href="#" className="more__review-mobile">
                Xem thêm
                <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" className="breadcrumb--icon more__review-mobile--icon" style={{position: 'relative', top: '2px'}}><path stroke="none" d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z" /></svg>
              </a>
              <a href="#" className="more__review-mobile" style={{display: 'none'}}>
                Thu gọn
                <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" className="breadcrumb--icon more__review-mobile--icon" style={{position: 'relative', top: '2px'}}><path stroke="none" d="m11 8.5c0-.1 0-.2-.1-.3l-5-6c-.1-.1-.3-.2-.4-.2s-.3.1-.4.2l-5 6c-.2.2-.1.5.1.7s.5.1.7-.1l4.6-5.5 4.6 5.5c.2.2.5.2.7.1.1-.1.2-.3.2-.4z" /></svg>
              </a>
            </div>
          </div>
          {/* Product review */}
          <div className="row product__review">
            <div className="col p-12 m-12 t-12">
              <div className="product__review-page">
                <div className="product__review-head">
                  ĐÁNH GIÁ SẢN PHẨM
                </div>
                <div className="product__review-action">
                  <div className="review__point">
                    <div className="review__point--head">
                      <span className="review__point--text">4.9</span>
                      trên 5
                    </div>
                    <div className="review__point--head review__point--head--mb show-on-mobile">
                      (2.9k đánh giá)
                    </div>
                    <div className="product__content-rate--list">
                      <i className="review__point-star product-item__star--normal product-item__star--red fas fa-star" />
                      <i className="review__point-star product-item__star--normal product-item__star--red fas fa-star" />
                      <i className="review__point-star product-item__star--normal product-item__star--red fas fa-star" />
                      <i className="review__point-star product-item__star--normal product-item__star--red fas fa-star" />
                      <i className="review__point-star product-item__star--normal fas fa-star" />
                    </div>
                  </div>
                  <a href="#" className="product__related-link show-on-mobile">
                    Xem tất cả 
                    <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0} className="breadcrumb--icon">
                      <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
                    </svg>
                  </a>
                  <div className="review-btn--list hide-on-mobile">
                    <button className="review-btn--item review-btn--active">Tất cả</button>
                    <button className="review-btn--item">5 sao (10k)</button>
                    <button className="review-btn--item">4 sao (5.3k)</button>
                    <button className="review-btn--item">3 sao (2k)</button>
                    <button className="review-btn--item">2 sao (102)</button>
                    <button className="review-btn--item">1 sao (10)</button>
                    <button className="review-btn--item">Có bình luận (8.2k)</button>
                    <button className="review-btn--item">Có hình ảnh / video (5k)</button>
                  </div>
                </div>
                <div className="product__review-pane product__review-pane-first">
                  <a href="#" className="product__review-link">
                    <img src="https://cf.shopee.vn/file/f53558ea21555919f4d506ace10b7118" alt="Avatar" className="review__pane-img" />
                  </a>
                  <div className="review__pane-info">
                    <a href="#" className="product__review-link">                                               
                      <span className="review__pane-info--name">Thu Hương</span>
                    </a>                                                
                    <div className="product__content-rate--list review__pane-rate--list">
                      <i className="review__pane-star product-item__star--normal product-item__star--red fas fa-star" />
                      <i className="review__pane-star product-item__star--normal product-item__star--red fas fa-star" />
                      <i className="review__pane-star product-item__star--normal product-item__star--red fas fa-star" />
                      <i className="review__pane-star product-item__star--normal product-item__star--red fas fa-star" />
                      <i className="review__pane-star product-item__star--normal fas fa-star" />
                    </div>
                    <span className="review__pane-type">Phân loại hàng: Trắng</span>
                    <p className="review__pane-post">
                      Đã nhận được hàng rồi, giao rất nhanh, hàng chất lượng, sale giá rẻ nữa, tính ra quá hời luôn ahiiiii😀😬😇😘😗😉😁😂😊😙☺😃😄😋😚😜😍😌😅😆😚😙😗😶😚😚😚
                    </p>
                    <div className="review__pane-feedback">
                      <div className="review__pane-feedback--item">
                        Chất lượng sản phẩm tuyệt vời
                      </div>
                      <div className="review__pane-feedback--item">
                        Đóng gói sản phẩm rất đẹp và chắc chắn
                      </div>
                    </div>
                    <div className="review__pane-feedback--img-list">
                      <img src="https://cf.shopee.vn/file/90edda778e02f7bf14439fbed0de7cd4_tn" alt="Img feedback" className="review__pane-feedback--img" />
                      <img src="https://cf.shopee.vn/file/ad8fda2186375c80d381c66f87aef14e_tn" alt="Img feedback" className="review__pane-feedback--img" />
                      <img src="https://cf.shopee.vn/file/33f5f79770cac0eb33db2f02b2e7567c_tn" alt="Img feedback" className="review__pane-feedback--img" />
                      <img src="https://cf.shopee.vn/file/2e98b7a2f7fc8b2845f6c8ecba91ac71_tn" alt="Img feedback" className="review__pane-feedback--img" />
                    </div>
                    <div className="review__pane-action">
                      <div className="review__pane-action--left">
                        <div className="review__pane-btn">
                          <svg className="svg-pointer" width="18px" height="16px" viewBox="0 0 14 13" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <defs />
                            <g stroke="none" strokeWidth={1} fillRule="evenodd"><g id="Product-Ratings-Working" transform="translate(-245.000000, -855.000000)" fillRule="nonzero">
                                <g transform="translate(155.000000, 92.000000)">
                                  <g transform="translate(40.000000, 184.000000)">
                                    <g transform="translate(0.000000, 326.000000)">
                                      <g transform="translate(50.000000, 253.000000)">
                                        <g>
                                          <path d="M0,12.7272727 L2.54545455,12.7272727 L2.54545455,5.09090909 L0,5.09090909 L0,12.7272727 Z M14,5.72727273 C14,5.02727273 13.4272727,4.45454545 12.7272727,4.45454545 L8.71818182,4.45454545 L9.35454545,1.52727273 L9.35454545,1.33636364 C9.35454545,1.08181818 9.22727273,0.827272727 9.1,0.636363636 L8.4,0 L4.2,4.2 C3.94545455,4.39090909 3.81818182,4.70909091 3.81818182,5.09090909 L3.81818182,11.4545455 C3.81818182,12.1545455 4.39090909,12.7272727 5.09090909,12.7272727 L10.8181818,12.7272727 C11.3272727,12.7272727 11.7727273,12.4090909 11.9636364,11.9636364 L13.8727273,7.44545455 C13.9363636,7.31818182 13.9363636,7.12727273 13.9363636,7 L13.9363636,5.72727273 L14,5.72727273 C14,5.79090909 14,5.72727273 14,5.72727273 Z" />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div className="review__pane-like-count">9</div>
                        {/* <div class="review__pane-like-count">Hữu ích?</div> */}
                      </div>
                      <div className="review__pane-action--right">
                        <div className="review__pane-time">
                          2021-05-26 08:24
                        </div>
                        <div className="review__pane-rp svg-pointer">
                          <svg className="svg-support-icon" width="4px" height="16px" viewBox="0 0 4 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <defs />
                            <g stroke="none" strokeWidth={1} fillRule="evenodd">
                              <g transform="translate(-1301.000000, -550.000000)" fill="#CCCCCC">
                                <g transform="translate(155.000000, 92.000000)">
                                  <g transform="translate(40.000000, 184.000000)">
                                    <g transform="translate(0.000000, 161.000000)">
                                      <g>
                                        <g transform="translate(50.000000, 2.000000)">
                                          <path d="M1058,122.2 C1056.895,122.2 1056,123.096 1056,124.2 C1056,125.306 1056.895,126.202 1058,126.202 C1059.104,126.202 1060,125.306 1060,124.2 C1060,123.096 1059.104,122.2 1058,122.2 M1058,116.6 C1056.895,116.6 1056,117.496 1056,118.6 C1056,119.706 1056.895,120.602 1058,120.602 C1059.104,120.602 1060,119.706 1060,118.6 C1060,117.496 1059.104,116.6 1058,116.6 M1058,111 C1056.895,111 1056,111.896 1056,113 C1056,114.106 1056.895,115.002 1058,115.002 C1059.104,115.002 1060,114.106 1060,113 C1060,111.896 1059.104,111 1058,111" />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                          <div className="support-content-review">
                            Báo cáo
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product__review-pane">
                  <a href="#" className="product__review-link">
                    <img src="https://cf.shopee.vn/file/f53558ea21555919f4d506ace10b7118" alt="Avatar" className="review__pane-img" />
                  </a>
                  <div className="review__pane-info">
                    <a href="#" className="product__review-link">                                               
                      <span className="review__pane-info--name">Thu Hương</span>
                    </a>                                                
                    <div className="product__content-rate--list review__pane-rate--list">
                      <i className="review__pane-star product-item__star--normal product-item__star--red fas fa-star" />
                      <i className="review__pane-star product-item__star--normal product-item__star--red fas fa-star" />
                      <i className="review__pane-star product-item__star--normal product-item__star--red fas fa-star" />
                      <i className="review__pane-star product-item__star--normal product-item__star--red fas fa-star" />
                      <i className="review__pane-star product-item__star--normal fas fa-star" />
                    </div>
                    <span className="review__pane-type">Phân loại hàng: Trắng</span>
                    <p className="review__pane-post">
                      Đã nhận được hàng rồi, giao rất nhanh, hàng chất lượng, sale giá rẻ nữa, tính ra quá hời luôn ahiiiii😀😬😇😘😗😉😁😂😊😙☺😃😄😋😚😜😍😌😅😆😚😙😗😶😚😚😚
                    </p>
                    <div className="review__pane-feedback">
                      <div className="review__pane-feedback--item">
                        Chất lượng sản phẩm tuyệt vời
                      </div>
                      <div className="review__pane-feedback--item">
                        Đóng gói sản phẩm rất đẹp và chắc chắn
                      </div>
                    </div>
                    <div className="review__pane-feedback--img-list">
                      <img src="https://cf.shopee.vn/file/90edda778e02f7bf14439fbed0de7cd4_tn" alt="Img feedback" className="review__pane-feedback--img" />
                      <img src="https://cf.shopee.vn/file/ad8fda2186375c80d381c66f87aef14e_tn" alt="Img feedback" className="review__pane-feedback--img" />
                      <img src="https://cf.shopee.vn/file/33f5f79770cac0eb33db2f02b2e7567c_tn" alt="Img feedback" className="review__pane-feedback--img" />
                      <img src="https://cf.shopee.vn/file/2e98b7a2f7fc8b2845f6c8ecba91ac71_tn" alt="Img feedback" className="review__pane-feedback--img" />
                    </div>
                    <div className="review__pane-action">
                      <div className="review__pane-action--left">
                        <div className="review__pane-btn">
                          <svg className="svg-pointer" width="18px" height="16px" viewBox="0 0 14 13" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <defs />
                            <g stroke="none" strokeWidth={1} fillRule="evenodd"><g id="Product-Ratings-Working" transform="translate(-245.000000, -855.000000)" fillRule="nonzero">
                                <g transform="translate(155.000000, 92.000000)">
                                  <g transform="translate(40.000000, 184.000000)">
                                    <g transform="translate(0.000000, 326.000000)">
                                      <g transform="translate(50.000000, 253.000000)">
                                        <g>
                                          <path d="M0,12.7272727 L2.54545455,12.7272727 L2.54545455,5.09090909 L0,5.09090909 L0,12.7272727 Z M14,5.72727273 C14,5.02727273 13.4272727,4.45454545 12.7272727,4.45454545 L8.71818182,4.45454545 L9.35454545,1.52727273 L9.35454545,1.33636364 C9.35454545,1.08181818 9.22727273,0.827272727 9.1,0.636363636 L8.4,0 L4.2,4.2 C3.94545455,4.39090909 3.81818182,4.70909091 3.81818182,5.09090909 L3.81818182,11.4545455 C3.81818182,12.1545455 4.39090909,12.7272727 5.09090909,12.7272727 L10.8181818,12.7272727 C11.3272727,12.7272727 11.7727273,12.4090909 11.9636364,11.9636364 L13.8727273,7.44545455 C13.9363636,7.31818182 13.9363636,7.12727273 13.9363636,7 L13.9363636,5.72727273 L14,5.72727273 C14,5.79090909 14,5.72727273 14,5.72727273 Z" />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div className="review__pane-like-count">9</div>
                        {/* <div class="review__pane-like-count">Hữu ích?</div> */}
                      </div>
                      <div className="review__pane-action--right">
                        <div className="review__pane-time">
                          2021-05-26 08:24
                        </div>
                        <div className="review__pane-rp svg-pointer">
                          <svg className="svg-support-icon" width="4px" height="16px" viewBox="0 0 4 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <defs />
                            <g stroke="none" strokeWidth={1} fillRule="evenodd">
                              <g transform="translate(-1301.000000, -550.000000)" fill="#CCCCCC">
                                <g transform="translate(155.000000, 92.000000)">
                                  <g transform="translate(40.000000, 184.000000)">
                                    <g transform="translate(0.000000, 161.000000)">
                                      <g>
                                        <g transform="translate(50.000000, 2.000000)">
                                          <path d="M1058,122.2 C1056.895,122.2 1056,123.096 1056,124.2 C1056,125.306 1056.895,126.202 1058,126.202 C1059.104,126.202 1060,125.306 1060,124.2 C1060,123.096 1059.104,122.2 1058,122.2 M1058,116.6 C1056.895,116.6 1056,117.496 1056,118.6 C1056,119.706 1056.895,120.602 1058,120.602 C1059.104,120.602 1060,119.706 1060,118.6 C1060,117.496 1059.104,116.6 1058,116.6 M1058,111 C1056.895,111 1056,111.896 1056,113 C1056,114.106 1056.895,115.002 1058,115.002 C1059.104,115.002 1060,114.106 1060,113 C1060,111.896 1059.104,111 1058,111" />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                          <div className="support-content-review">
                            Báo cáo
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product__review-pane">
                  <a href="#" className="product__review-link">
                    <img src="https://cf.shopee.vn/file/f53558ea21555919f4d506ace10b7118" alt="Avatar" className="review__pane-img" />
                  </a>
                  <div className="review__pane-info">
                    <a href="#" className="product__review-link">                                               
                      <span className="review__pane-info--name">Thu Hương</span>
                    </a>                                                
                    <div className="product__content-rate--list review__pane-rate--list">
                      <i className="review__pane-star product-item__star--normal product-item__star--red fas fa-star" />
                      <i className="review__pane-star product-item__star--normal product-item__star--red fas fa-star" />
                      <i className="review__pane-star product-item__star--normal product-item__star--red fas fa-star" />
                      <i className="review__pane-star product-item__star--normal product-item__star--red fas fa-star" />
                      <i className="review__pane-star product-item__star--normal fas fa-star" />
                    </div>
                    <span className="review__pane-type">Phân loại hàng: Trắng</span>
                    <p className="review__pane-post">
                      Đã nhận được hàng rồi, giao rất nhanh, hàng chất lượng, sale giá rẻ nữa, tính ra quá hời luôn ahiiiii😀😬😇😘😗😉😁😂😊😙☺😃😄😋😚😜😍😌😅😆😚😙😗😶😚😚😚
                    </p>
                    <div className="review__pane-feedback">
                      <div className="review__pane-feedback--item">
                        Chất lượng sản phẩm tuyệt vời
                      </div>
                      <div className="review__pane-feedback--item">
                        Đóng gói sản phẩm rất đẹp và chắc chắn
                      </div>
                    </div>
                    <div className="review__pane-feedback--img-list">
                      <img src="https://cf.shopee.vn/file/90edda778e02f7bf14439fbed0de7cd4_tn" alt="Img feedback" className="review__pane-feedback--img" />
                      <img src="https://cf.shopee.vn/file/ad8fda2186375c80d381c66f87aef14e_tn" alt="Img feedback" className="review__pane-feedback--img" />
                      <img src="https://cf.shopee.vn/file/33f5f79770cac0eb33db2f02b2e7567c_tn" alt="Img feedback" className="review__pane-feedback--img" />
                      <img src="https://cf.shopee.vn/file/2e98b7a2f7fc8b2845f6c8ecba91ac71_tn" alt="Img feedback" className="review__pane-feedback--img" />
                    </div>
                    <div className="review__pane-action">
                      <div className="review__pane-action--left">
                        <div className="review__pane-btn">
                          <svg className="svg-pointer" width="18px" height="16px" viewBox="0 0 14 13" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <defs />
                            <g stroke="none" strokeWidth={1} fillRule="evenodd"><g id="Product-Ratings-Working" transform="translate(-245.000000, -855.000000)" fillRule="nonzero">
                                <g transform="translate(155.000000, 92.000000)">
                                  <g transform="translate(40.000000, 184.000000)">
                                    <g transform="translate(0.000000, 326.000000)">
                                      <g transform="translate(50.000000, 253.000000)">
                                        <g>
                                          <path d="M0,12.7272727 L2.54545455,12.7272727 L2.54545455,5.09090909 L0,5.09090909 L0,12.7272727 Z M14,5.72727273 C14,5.02727273 13.4272727,4.45454545 12.7272727,4.45454545 L8.71818182,4.45454545 L9.35454545,1.52727273 L9.35454545,1.33636364 C9.35454545,1.08181818 9.22727273,0.827272727 9.1,0.636363636 L8.4,0 L4.2,4.2 C3.94545455,4.39090909 3.81818182,4.70909091 3.81818182,5.09090909 L3.81818182,11.4545455 C3.81818182,12.1545455 4.39090909,12.7272727 5.09090909,12.7272727 L10.8181818,12.7272727 C11.3272727,12.7272727 11.7727273,12.4090909 11.9636364,11.9636364 L13.8727273,7.44545455 C13.9363636,7.31818182 13.9363636,7.12727273 13.9363636,7 L13.9363636,5.72727273 L14,5.72727273 C14,5.79090909 14,5.72727273 14,5.72727273 Z" />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div className="review__pane-like-count">9</div>
                        {/* <div class="review__pane-like-count">Hữu ích?</div> */}
                      </div>
                      <div className="review__pane-action--right">
                        <div className="review__pane-time">
                          2021-05-26 08:24
                        </div>
                        <div className="review__pane-rp svg-pointer">
                          <svg className="svg-support-icon" width="4px" height="16px" viewBox="0 0 4 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <defs />
                            <g stroke="none" strokeWidth={1} fillRule="evenodd">
                              <g transform="translate(-1301.000000, -550.000000)" fill="#CCCCCC">
                                <g transform="translate(155.000000, 92.000000)">
                                  <g transform="translate(40.000000, 184.000000)">
                                    <g transform="translate(0.000000, 161.000000)">
                                      <g>
                                        <g transform="translate(50.000000, 2.000000)">
                                          <path d="M1058,122.2 C1056.895,122.2 1056,123.096 1056,124.2 C1056,125.306 1056.895,126.202 1058,126.202 C1059.104,126.202 1060,125.306 1060,124.2 C1060,123.096 1059.104,122.2 1058,122.2 M1058,116.6 C1056.895,116.6 1056,117.496 1056,118.6 C1056,119.706 1056.895,120.602 1058,120.602 C1059.104,120.602 1060,119.706 1060,118.6 C1060,117.496 1059.104,116.6 1058,116.6 M1058,111 C1056.895,111 1056,111.896 1056,113 C1056,114.106 1056.895,115.002 1058,115.002 C1059.104,115.002 1060,114.106 1060,113 C1060,111.896 1059.104,111 1058,111" />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                          <div className="support-content-review">
                            Báo cáo
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product__review-pane">
                  <a href="#" className="product__review-link">
                    <img src="https://cf.shopee.vn/file/f53558ea21555919f4d506ace10b7118" alt="Avatar" className="review__pane-img" />
                  </a>
                  <div className="review__pane-info">
                    <a href="#" className="product__review-link">                                               
                      <span className="review__pane-info--name">Thu Hương</span>
                    </a>                                                
                    <div className="product__content-rate--list review__pane-rate--list">
                      <i className="review__pane-star product-item__star--normal product-item__star--red fas fa-star" />
                      <i className="review__pane-star product-item__star--normal product-item__star--red fas fa-star" />
                      <i className="review__pane-star product-item__star--normal product-item__star--red fas fa-star" />
                      <i className="review__pane-star product-item__star--normal product-item__star--red fas fa-star" />
                      <i className="review__pane-star product-item__star--normal fas fa-star" />
                    </div>
                    <span className="review__pane-type">Phân loại hàng: Trắng</span>
                    <p className="review__pane-post">
                      Đã nhận được hàng rồi, giao rất nhanh, hàng chất lượng, sale giá rẻ nữa, tính ra quá hời luôn ahiiiii😀😬😇😘😗😉😁😂😊😙☺😃😄😋😚😜😍😌😅😆😚😙😗😶😚😚😚
                    </p>
                    <div className="review__pane-feedback">
                      <div className="review__pane-feedback--item">
                        Chất lượng sản phẩm tuyệt vời
                      </div>
                      <div className="review__pane-feedback--item">
                        Đóng gói sản phẩm rất đẹp và chắc chắn
                      </div>
                    </div>
                    <div className="review__pane-feedback--img-list">
                      <img src="https://cf.shopee.vn/file/90edda778e02f7bf14439fbed0de7cd4_tn" alt="Img feedback" className="review__pane-feedback--img" />
                      <img src="https://cf.shopee.vn/file/ad8fda2186375c80d381c66f87aef14e_tn" alt="Img feedback" className="review__pane-feedback--img" />
                      <img src="https://cf.shopee.vn/file/33f5f79770cac0eb33db2f02b2e7567c_tn" alt="Img feedback" className="review__pane-feedback--img" />
                      <img src="https://cf.shopee.vn/file/2e98b7a2f7fc8b2845f6c8ecba91ac71_tn" alt="Img feedback" className="review__pane-feedback--img" />
                    </div>
                    <div className="review__pane-action">
                      <div className="review__pane-action--left">
                        <div className="review__pane-btn">
                          <svg className="svg-pointer" width="18px" height="16px" viewBox="0 0 14 13" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <defs />
                            <g stroke="none" strokeWidth={1} fillRule="evenodd"><g id="Product-Ratings-Working" transform="translate(-245.000000, -855.000000)" fillRule="nonzero">
                                <g transform="translate(155.000000, 92.000000)">
                                  <g transform="translate(40.000000, 184.000000)">
                                    <g transform="translate(0.000000, 326.000000)">
                                      <g transform="translate(50.000000, 253.000000)">
                                        <g>
                                          <path d="M0,12.7272727 L2.54545455,12.7272727 L2.54545455,5.09090909 L0,5.09090909 L0,12.7272727 Z M14,5.72727273 C14,5.02727273 13.4272727,4.45454545 12.7272727,4.45454545 L8.71818182,4.45454545 L9.35454545,1.52727273 L9.35454545,1.33636364 C9.35454545,1.08181818 9.22727273,0.827272727 9.1,0.636363636 L8.4,0 L4.2,4.2 C3.94545455,4.39090909 3.81818182,4.70909091 3.81818182,5.09090909 L3.81818182,11.4545455 C3.81818182,12.1545455 4.39090909,12.7272727 5.09090909,12.7272727 L10.8181818,12.7272727 C11.3272727,12.7272727 11.7727273,12.4090909 11.9636364,11.9636364 L13.8727273,7.44545455 C13.9363636,7.31818182 13.9363636,7.12727273 13.9363636,7 L13.9363636,5.72727273 L14,5.72727273 C14,5.79090909 14,5.72727273 14,5.72727273 Z" />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div className="review__pane-like-count">9</div>
                        {/* <div class="review__pane-like-count">Hữu ích?</div> */}
                      </div>
                      <div className="review__pane-action--right">
                        <div className="review__pane-time">
                          2021-05-26 08:24
                        </div>
                        <div className="review__pane-rp svg-pointer">
                          <svg className="svg-support-icon" width="4px" height="16px" viewBox="0 0 4 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <defs />
                            <g stroke="none" strokeWidth={1} fillRule="evenodd">
                              <g transform="translate(-1301.000000, -550.000000)" fill="#CCCCCC">
                                <g transform="translate(155.000000, 92.000000)">
                                  <g transform="translate(40.000000, 184.000000)">
                                    <g transform="translate(0.000000, 161.000000)">
                                      <g>
                                        <g transform="translate(50.000000, 2.000000)">
                                          <path d="M1058,122.2 C1056.895,122.2 1056,123.096 1056,124.2 C1056,125.306 1056.895,126.202 1058,126.202 C1059.104,126.202 1060,125.306 1060,124.2 C1060,123.096 1059.104,122.2 1058,122.2 M1058,116.6 C1056.895,116.6 1056,117.496 1056,118.6 C1056,119.706 1056.895,120.602 1058,120.602 C1059.104,120.602 1060,119.706 1060,118.6 C1060,117.496 1059.104,116.6 1058,116.6 M1058,111 C1056.895,111 1056,111.896 1056,113 C1056,114.106 1056.895,115.002 1058,115.002 C1059.104,115.002 1060,114.106 1060,113 C1060,111.896 1059.104,111 1058,111" />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                          <div className="support-content-review">
                            Báo cáo
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product__review-pane">
                  <a href="#" className="product__review-link">
                    <img src="https://cf.shopee.vn/file/f53558ea21555919f4d506ace10b7118" alt="Avatar" className="review__pane-img" />
                  </a>
                  <div className="review__pane-info">
                    <a href="#" className="product__review-link">                                               
                      <span className="review__pane-info--name">Thu Hương</span>
                    </a>                                                
                    <div className="product__content-rate--list review__pane-rate--list">
                      <i className="review__pane-star product-item__star--normal product-item__star--red fas fa-star" />
                      <i className="review__pane-star product-item__star--normal product-item__star--red fas fa-star" />
                      <i className="review__pane-star product-item__star--normal product-item__star--red fas fa-star" />
                      <i className="review__pane-star product-item__star--normal product-item__star--red fas fa-star" />
                      <i className="review__pane-star product-item__star--normal fas fa-star" />
                    </div>
                    <span className="review__pane-type">Phân loại hàng: Trắng</span>
                    <p className="review__pane-post">
                      Đã nhận được hàng rồi, giao rất nhanh, hàng chất lượng, sale giá rẻ nữa, tính ra quá hời luôn ahiiiii😀😬😇😘😗😉😁😂😊😙☺😃😄😋😚😜😍😌😅😆😚😙😗😶😚😚😚
                    </p>
                    <div className="review__pane-feedback">
                      <div className="review__pane-feedback--item">
                        Chất lượng sản phẩm tuyệt vời
                      </div>
                      <div className="review__pane-feedback--item">
                        Đóng gói sản phẩm rất đẹp và chắc chắn
                      </div>
                    </div>
                    <div className="review__pane-feedback--img-list">
                      <img src="https://cf.shopee.vn/file/90edda778e02f7bf14439fbed0de7cd4_tn" alt="Img feedback" className="review__pane-feedback--img" />
                      <img src="https://cf.shopee.vn/file/ad8fda2186375c80d381c66f87aef14e_tn" alt="Img feedback" className="review__pane-feedback--img" />
                      <img src="https://cf.shopee.vn/file/33f5f79770cac0eb33db2f02b2e7567c_tn" alt="Img feedback" className="review__pane-feedback--img" />
                      <img src="https://cf.shopee.vn/file/2e98b7a2f7fc8b2845f6c8ecba91ac71_tn" alt="Img feedback" className="review__pane-feedback--img" />
                    </div>
                    <div className="review__pane-action">
                      <div className="review__pane-action--left">
                        <div className="review__pane-btn">
                          <svg className="svg-pointer" width="18px" height="16px" viewBox="0 0 14 13" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <defs />
                            <g stroke="none" strokeWidth={1} fillRule="evenodd"><g id="Product-Ratings-Working" transform="translate(-245.000000, -855.000000)" fillRule="nonzero">
                                <g transform="translate(155.000000, 92.000000)">
                                  <g transform="translate(40.000000, 184.000000)">
                                    <g transform="translate(0.000000, 326.000000)">
                                      <g transform="translate(50.000000, 253.000000)">
                                        <g>
                                          <path d="M0,12.7272727 L2.54545455,12.7272727 L2.54545455,5.09090909 L0,5.09090909 L0,12.7272727 Z M14,5.72727273 C14,5.02727273 13.4272727,4.45454545 12.7272727,4.45454545 L8.71818182,4.45454545 L9.35454545,1.52727273 L9.35454545,1.33636364 C9.35454545,1.08181818 9.22727273,0.827272727 9.1,0.636363636 L8.4,0 L4.2,4.2 C3.94545455,4.39090909 3.81818182,4.70909091 3.81818182,5.09090909 L3.81818182,11.4545455 C3.81818182,12.1545455 4.39090909,12.7272727 5.09090909,12.7272727 L10.8181818,12.7272727 C11.3272727,12.7272727 11.7727273,12.4090909 11.9636364,11.9636364 L13.8727273,7.44545455 C13.9363636,7.31818182 13.9363636,7.12727273 13.9363636,7 L13.9363636,5.72727273 L14,5.72727273 C14,5.79090909 14,5.72727273 14,5.72727273 Z" />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div className="review__pane-like-count">9</div>
                        {/* <div class="review__pane-like-count">Hữu ích?</div> */}
                      </div>
                      <div className="review__pane-action--right">
                        <div className="review__pane-time">
                          2021-05-26 08:24
                        </div>
                        <div className="review__pane-rp svg-pointer">
                          <svg className="svg-support-icon" width="4px" height="16px" viewBox="0 0 4 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <defs />
                            <g stroke="none" strokeWidth={1} fillRule="evenodd">
                              <g transform="translate(-1301.000000, -550.000000)" fill="#CCCCCC">
                                <g transform="translate(155.000000, 92.000000)">
                                  <g transform="translate(40.000000, 184.000000)">
                                    <g transform="translate(0.000000, 161.000000)">
                                      <g>
                                        <g transform="translate(50.000000, 2.000000)">
                                          <path d="M1058,122.2 C1056.895,122.2 1056,123.096 1056,124.2 C1056,125.306 1056.895,126.202 1058,126.202 C1059.104,126.202 1060,125.306 1060,124.2 C1060,123.096 1059.104,122.2 1058,122.2 M1058,116.6 C1056.895,116.6 1056,117.496 1056,118.6 C1056,119.706 1056.895,120.602 1058,120.602 C1059.104,120.602 1060,119.706 1060,118.6 C1060,117.496 1059.104,116.6 1058,116.6 M1058,111 C1056.895,111 1056,111.896 1056,113 C1056,114.106 1056.895,115.002 1058,115.002 C1059.104,115.002 1060,114.106 1060,113 C1060,111.896 1059.104,111 1058,111" />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                          <div className="support-content-review">
                            Báo cáo
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product__review-pane product__review-pane-last">
                  <a href="#" className="product__review-link">
                    <img src="https://cf.shopee.vn/file/f53558ea21555919f4d506ace10b7118" alt="Avatar" className="review__pane-img" />
                  </a>
                  <div className="review__pane-info">
                    <a href="#" className="product__review-link">                                               
                      <span className="review__pane-info--name">Thu Hương</span>
                    </a>                                                
                    <div className="product__content-rate--list review__pane-rate--list">
                      <i className="review__pane-star product-item__star--normal product-item__star--red fas fa-star" />
                      <i className="review__pane-star product-item__star--normal product-item__star--red fas fa-star" />
                      <i className="review__pane-star product-item__star--normal product-item__star--red fas fa-star" />
                      <i className="review__pane-star product-item__star--normal product-item__star--red fas fa-star" />
                      <i className="review__pane-star product-item__star--normal fas fa-star" />
                    </div>
                    <span className="review__pane-type">Phân loại hàng: Trắng</span>
                    <p className="review__pane-post">
                      Đã nhận được hàng rồi, giao rất nhanh, hàng chất lượng, sale giá rẻ nữa, tính ra quá hời luôn ahiiiii😀😬😇😘😗😉😁😂😊😙☺😃😄😋😚😜😍😌😅😆😚😙😗😶😚😚😚
                    </p>
                    <div className="review__pane-feedback">
                      <div className="review__pane-feedback--item">
                        Chất lượng sản phẩm tuyệt vời
                      </div>
                      <div className="review__pane-feedback--item">
                        Đóng gói sản phẩm rất đẹp và chắc chắn
                      </div>
                    </div>
                    <div className="review__pane-feedback--img-list">
                      <img src="https://cf.shopee.vn/file/90edda778e02f7bf14439fbed0de7cd4_tn" alt="Img feedback" className="review__pane-feedback--img" />
                      <img src="https://cf.shopee.vn/file/ad8fda2186375c80d381c66f87aef14e_tn" alt="Img feedback" className="review__pane-feedback--img" />
                      <img src="https://cf.shopee.vn/file/33f5f79770cac0eb33db2f02b2e7567c_tn" alt="Img feedback" className="review__pane-feedback--img" />
                      <img src="https://cf.shopee.vn/file/2e98b7a2f7fc8b2845f6c8ecba91ac71_tn" alt="Img feedback" className="review__pane-feedback--img" />
                    </div>
                    <div className="review__pane-action">
                      <div className="review__pane-action--left">
                        <div className="review__pane-btn">
                          <svg className="svg-pointer" width="18px" height="16px" viewBox="0 0 14 13" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <defs />
                            <g stroke="none" strokeWidth={1} fillRule="evenodd"><g id="Product-Ratings-Working" transform="translate(-245.000000, -855.000000)" fillRule="nonzero">
                                <g transform="translate(155.000000, 92.000000)">
                                  <g transform="translate(40.000000, 184.000000)">
                                    <g transform="translate(0.000000, 326.000000)">
                                      <g transform="translate(50.000000, 253.000000)">
                                        <g>
                                          <path d="M0,12.7272727 L2.54545455,12.7272727 L2.54545455,5.09090909 L0,5.09090909 L0,12.7272727 Z M14,5.72727273 C14,5.02727273 13.4272727,4.45454545 12.7272727,4.45454545 L8.71818182,4.45454545 L9.35454545,1.52727273 L9.35454545,1.33636364 C9.35454545,1.08181818 9.22727273,0.827272727 9.1,0.636363636 L8.4,0 L4.2,4.2 C3.94545455,4.39090909 3.81818182,4.70909091 3.81818182,5.09090909 L3.81818182,11.4545455 C3.81818182,12.1545455 4.39090909,12.7272727 5.09090909,12.7272727 L10.8181818,12.7272727 C11.3272727,12.7272727 11.7727273,12.4090909 11.9636364,11.9636364 L13.8727273,7.44545455 C13.9363636,7.31818182 13.9363636,7.12727273 13.9363636,7 L13.9363636,5.72727273 L14,5.72727273 C14,5.79090909 14,5.72727273 14,5.72727273 Z" />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div className="review__pane-like-count">9</div>
                        {/* <div class="review__pane-like-count">Hữu ích?</div> */}
                      </div>
                      <div className="review__pane-action--right">
                        <div className="review__pane-time">
                          2021-05-26 08:24
                        </div>
                        <div className="review__pane-rp svg-pointer">
                          <svg className="svg-support-icon" width="4px" height="16px" viewBox="0 0 4 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <defs />
                            <g stroke="none" strokeWidth={1} fillRule="evenodd">
                              <g transform="translate(-1301.000000, -550.000000)" fill="#CCCCCC">
                                <g transform="translate(155.000000, 92.000000)">
                                  <g transform="translate(40.000000, 184.000000)">
                                    <g transform="translate(0.000000, 161.000000)">
                                      <g>
                                        <g transform="translate(50.000000, 2.000000)">
                                          <path d="M1058,122.2 C1056.895,122.2 1056,123.096 1056,124.2 C1056,125.306 1056.895,126.202 1058,126.202 C1059.104,126.202 1060,125.306 1060,124.2 C1060,123.096 1059.104,122.2 1058,122.2 M1058,116.6 C1056.895,116.6 1056,117.496 1056,118.6 C1056,119.706 1056.895,120.602 1058,120.602 C1059.104,120.602 1060,119.706 1060,118.6 C1060,117.496 1059.104,116.6 1058,116.6 M1058,111 C1056.895,111 1056,111.896 1056,113 C1056,114.106 1056.895,115.002 1058,115.002 C1059.104,115.002 1060,114.106 1060,113 C1060,111.896 1059.104,111 1058,111" />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                          <div className="support-content-review">
                            Báo cáo
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="review__pane-pagination hide-on-mobile">
                  <li className="review__pane-pagination--item">
                    <button className="pane_pagination-btn pane_pagination-btn--svg">
                      <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0} className="breadcrumb--icon pane__pangination--icon">
                        <g><path d="m8.5 11c-.1 0-.2 0-.3-.1l-6-5c-.1-.1-.2-.3-.2-.4s.1-.3.2-.4l6-5c .2-.2.5-.1.7.1s.1.5-.1.7l-5.5 4.6 5.5 4.6c.2.2.2.5.1.7-.1.1-.3.2-.4.2z" /></g>
                      </svg>
                    </button>
                  </li>
                  <li className="review__pane-pagination--item">
                    <button className="pane_pagination-btn pane_pagination-btn--active">
                      1
                    </button>
                  </li>
                  <li className="review__pane-pagination--item">
                    <button className="pane_pagination-btn">
                      2
                    </button>
                  </li>
                  <li className="review__pane-pagination--item">
                    <button className="pane_pagination-btn">
                      3
                    </button>
                  </li>
                  <li className="review__pane-pagination--item">
                    <button className="pane_pagination-btn">
                      4
                    </button>
                  </li>
                  <li className="review__pane-pagination--item">
                    <button className="pane_pagination-btn">
                      5
                    </button>
                  </li>
                  <li className="review__pane-pagination--item">
                    <button className="pane_pagination-btn pane_pagination-btn--disabled">
                      ...
                    </button>
                  </li>
                  <li className="review__pane-pagination--item">
                    <button className="pane_pagination-btn pane_pagination-btn--svg">
                      <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0} className="breadcrumb--icon pane__pangination--icon">
                        <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
                      </svg>
                    </button>
                  </li>
                </ul>
                <div className="review__pane-pagination--mobile show-on-mobile">
                  <a href="#" className="more__review-mobile">
                    Xem tất cả (2.9k)
                    <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0} className="breadcrumb--icon more__review-mobile--icon">
                      <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* end review */}
          {/* Product related */}
          <div className="row product__related">
            <div className="col p-12 m-12 t-12">
              <div className="product__related-page">
                <div className="product__related-heading">
                  <span className="product__related-title">
                    CÁC SẢN PHẨM KHÁC CỦA SHOP
                  </span>
                  <a href="#" className="product__related-link">
                    Xem tất cả 
                    <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0} className="breadcrumb--icon">
                      <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
                    </svg>
                  </a>
                </div>
                <div className="product__related-body row sm-gutter">
                  <div className="col p-2 t-4 m-6">
                    <a href="#" className="product__related-item">
                      <div className="product__related-img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/6d5199bb9d2156e0de99183321d39e53_tn")'}} />
                      <div className="product__related-content">
                        <div className="product__related-name">
                          Áo thể thao bra yếm nữ croptop CERA-Y màu trắng CRA034
                        </div>
                        <div className="product__related-sale content-discount--item">
                          10% GIẢM
                        </div>
                        <div className="product__related-price">
                          <span className="product__related-price-text detail__top-product--price">
                            50.000
                            <span className="vnd-class">₫</span>
                          </span>
                          <span className="product__related-sell">
                            Đã bán 1.9k
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
                    </a>
                  </div>
                  <div className="col p-2 t-4 m-6">
                    <a href="#" className="product__related-item">
                      <div className="product__related-img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/0e4bbbc777412fd35bc21795edf61a90_tn")'}} />
                      <div className="product__related-content">
                        <div className="product__related-name">
                          Quần thun thể thao CERA-Y lửng ngố ôm body màu đen CRQ013
                        </div>
                        <div className="product__related-sale product__related-sale--disabled content-discount--item" />
                        <div className="product__related-price">
                          <span className="product__related-price-text detail__top-product--price">
                            150.000
                            <span className="vnd-class">₫</span>
                          </span>
                          <span className="product__related-sell">
                            Đã bán 190
                          </span>
                        </div>
                      </div>
                      <div className="home-product-item__favorite">
                        <i className="fas fa-check" />
                        <span>Yêu thích</span>
                      </div>
                      <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">27%</span>
                        <span className="home-product-item__sale-off-label">GIẢM</span>
                      </div>
                    </a>
                  </div>
                  <div className="col p-2 t-4 m-6">
                    <a href="#" className="product__related-item">
                      <div className="product__related-img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/b592121ddd925cc21599ab13c3bff5c7_tn")'}} />
                      <div className="product__related-content">
                        <div className="product__related-name">
                          Áo thể thao bra croptop CERA-Y màu đen CRA028
                        </div>
                        <div className="product__related-sale product__related-sale--disabled content-discount--item" />
                        <div className="product__related-price">
                          <span className="product__related-price-text detail__top-product--price">
                            100.000
                            <span className="vnd-class">₫</span>
                          </span>
                          <span className="product__related-sell">
                            Đã bán 9.9k
                          </span>
                        </div>
                      </div>
                      <div className="home-product-item__favorite">
                        <i className="fas fa-check" />
                        <span>Yêu thích</span>
                      </div>
                      <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">10%</span>
                        <span className="home-product-item__sale-off-label">GIẢM</span>
                      </div>
                    </a>
                  </div>
                  <div className="col p-2 t-4 m-6">
                    <a href="#" className="product__related-item">
                      <div className="product__related-img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/5e58a3202032f1eecc722887331a7612_tn")'}} />
                      <div className="product__related-content">
                        <div className="product__related-name">
                          Áo thun thể thao form rộng croptop CERA-Y màu đen CR001
                        </div>
                        <div className="product__related-sale content-discount--item">10% GIẢM</div>
                        <div className="product__related-price">
                          <span className="product__related-price-text detail__top-product--price">
                            89.000
                            <span className="vnd-class">₫</span>
                          </span>
                          <span className="product__related-sell">
                            Đã bán 9.9k
                          </span>
                        </div>
                      </div>
                      <div className="home-product-item__favorite">
                        <i className="fas fa-check" />
                        <span>Yêu thích</span>
                      </div>
                      <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">50%</span>
                        <span className="home-product-item__sale-off-label">GIẢM</span>
                      </div>
                    </a>
                  </div>
                  <div className="col p-2 t-4 m-6">
                    <a href="#" className="product__related-item">
                      <div className="product__related-img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/2eaaf9d13854346929ccd0ef6395fc74_tn")'}} />
                      <div className="product__related-content">
                        <div className="product__related-name">
                          Áo thể thao bra hai dây CERA-Y bản 1cm croptop CRA018
                        </div>
                        <div className="product__related-sale content-discount--item">10% GIẢM</div>
                        <div className="product__related-price">
                          <span className="product__related-price-text detail__top-product--price">
                            80.000
                            <span className="vnd-class">₫</span>
                          </span>
                          <span className="product__related-sell">
                            Đã bán 2.9k
                          </span>
                        </div>
                      </div>
                      <div className="home-product-item__favorite">
                        <i className="fas fa-check" />
                        <span>Yêu thích</span>
                      </div>
                      <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">16%</span>
                        <span className="home-product-item__sale-off-label">GIẢM</span>
                      </div>
                    </a>
                  </div>
                  <div className="col p-2 t-4 m-6">
                    <a href="#" className="product__related-item">
                      <div className="product__related-img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/05fd8241aaa4ec2e1e539ffa879bf16b_tn")'}} />
                      <div className="product__related-content">
                        <div className="product__related-name">
                          Áo 2 dây basic vintage chất liệu vải cao cấp phong cách Hàn
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
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col p-12 m-12 t-12">
              <div className="product__related-page">
                <div className="product__related-heading">
                  <span className="product__related-title">
                    SẢN PHẨM TƯƠNG TỰ
                  </span>
                  <a href="#" className="product__related-link">
                    Xem tất cả 
                    <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0} className="breadcrumb--icon">
                      <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
                    </svg>
                  </a>
                </div>
                <div className="product__related-body row sm-gutter">
                  <div className="col p-2 t-4 m-6">
                    <a href="#" className="product__related-item">
                      <div className="product__related-img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/6d5199bb9d2156e0de99183321d39e53_tn")'}} />
                      <div className="product__related-content">
                        <div className="product__related-name">
                          Áo thể thao bra yếm nữ croptop CERA-Y màu trắng CRA034
                        </div>
                        <div className="product__related-sale content-discount--item">
                          10% GIẢM
                        </div>
                        <div className="product__related-price">
                          <span className="product__related-price-text detail__top-product--price">
                            50.000
                            <span className="vnd-class">₫</span>
                          </span>
                          <span className="product__related-sell">
                            Đã bán 1.9k
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
                    </a>
                  </div>
                  <div className="col p-2 t-4 m-6">
                    <a href="#" className="product__related-item">
                      <div className="product__related-img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/0e4bbbc777412fd35bc21795edf61a90_tn")'}} />
                      <div className="product__related-content">
                        <div className="product__related-name">
                          Quần thun thể thao CERA-Y lửng ngố ôm body màu đen CRQ013
                        </div>
                        <div className="product__related-sale product__related-sale--disabled content-discount--item" />
                        <div className="product__related-price">
                          <span className="product__related-price-text detail__top-product--price">
                            150.000
                            <span className="vnd-class">₫</span>
                          </span>
                          <span className="product__related-sell">
                            Đã bán 190
                          </span>
                        </div>
                      </div>
                      <div className="home-product-item__favorite">
                        <i className="fas fa-check" />
                        <span>Yêu thích</span>
                      </div>
                      <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">27%</span>
                        <span className="home-product-item__sale-off-label">GIẢM</span>
                      </div>
                    </a>
                  </div>
                  <div className="col p-2 t-4 m-6">
                    <a href="#" className="product__related-item">
                      <div className="product__related-img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/b592121ddd925cc21599ab13c3bff5c7_tn")'}} />
                      <div className="product__related-content">
                        <div className="product__related-name">
                          Áo thể thao bra croptop CERA-Y màu đen CRA028
                        </div>
                        <div className="product__related-sale product__related-sale--disabled content-discount--item" />
                        <div className="product__related-price">
                          <span className="product__related-price-text detail__top-product--price">
                            100.000
                            <span className="vnd-class">₫</span>
                          </span>
                          <span className="product__related-sell">
                            Đã bán 9.9k
                          </span>
                        </div>
                      </div>
                      <div className="home-product-item__favorite">
                        <i className="fas fa-check" />
                        <span>Yêu thích</span>
                      </div>
                      <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">10%</span>
                        <span className="home-product-item__sale-off-label">GIẢM</span>
                      </div>
                    </a>
                  </div>
                  <div className="col p-2 t-4 m-6">
                    <a href="#" className="product__related-item">
                      <div className="product__related-img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/5e58a3202032f1eecc722887331a7612_tn")'}} />
                      <div className="product__related-content">
                        <div className="product__related-name">
                          Áo thun thể thao form rộng croptop CERA-Y màu đen CR001
                        </div>
                        <div className="product__related-sale content-discount--item">10% GIẢM</div>
                        <div className="product__related-price">
                          <span className="product__related-price-text detail__top-product--price">
                            89.000
                            <span className="vnd-class">₫</span>
                          </span>
                          <span className="product__related-sell">
                            Đã bán 9.9k
                          </span>
                        </div>
                      </div>
                      <div className="home-product-item__favorite">
                        <i className="fas fa-check" />
                        <span>Yêu thích</span>
                      </div>
                      <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">50%</span>
                        <span className="home-product-item__sale-off-label">GIẢM</span>
                      </div>
                    </a>
                  </div>
                  <div className="col p-2 t-4 m-6">
                    <a href="#" className="product__related-item">
                      <div className="product__related-img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/2eaaf9d13854346929ccd0ef6395fc74_tn")'}} />
                      <div className="product__related-content">
                        <div className="product__related-name">
                          Áo thể thao bra hai dây CERA-Y bản 1cm croptop CRA018
                        </div>
                        <div className="product__related-sale content-discount--item">10% GIẢM</div>
                        <div className="product__related-price">
                          <span className="product__related-price-text detail__top-product--price">
                            80.000
                            <span className="vnd-class">₫</span>
                          </span>
                          <span className="product__related-sell">
                            Đã bán 2.9k
                          </span>
                        </div>
                      </div>
                      <div className="home-product-item__favorite">
                        <i className="fas fa-check" />
                        <span>Yêu thích</span>
                      </div>
                      <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">16%</span>
                        <span className="home-product-item__sale-off-label">GIẢM</span>
                      </div>
                    </a>
                  </div>
                  <div className="col p-2 t-4 m-6">
                    <a href="#" className="product__related-item">
                      <div className="product__related-img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/05fd8241aaa4ec2e1e539ffa879bf16b_tn")'}} />
                      <div className="product__related-content">
                        <div className="product__related-name">
                          Áo 2 dây basic vintage chất liệu vải cao cấp phong cách Hàn
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
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
                  <div className="col p-2 t-4 m-6">
                    <a href="#" className="product__related-item">
                      <div className="product__related-img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/6d5199bb9d2156e0de99183321d39e53_tn")'}} />
                      <div className="product__related-content">
                        <div className="product__related-name">
                          Áo thể thao bra yếm nữ croptop CERA-Y màu trắng CRA034
                        </div>
                        <div className="product__related-sale content-discount--item">
                          10% GIẢM
                        </div>
                        <div className="product__related-price">
                          <span className="product__related-price-text detail__top-product--price">
                            50.000
                            <span className="vnd-class">₫</span>
                          </span>
                          <span className="product__related-sell">
                            Đã bán 1.9k
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
                    </a>
                  </div>
                  <div className="col p-2 t-4 m-6">
                    <a href="#" className="product__related-item">
                      <div className="product__related-img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/0e4bbbc777412fd35bc21795edf61a90_tn")'}} />
                      <div className="product__related-content">
                        <div className="product__related-name">
                          Quần thun thể thao CERA-Y lửng ngố ôm body màu đen CRQ013
                        </div>
                        <div className="product__related-sale product__related-sale--disabled content-discount--item" />
                        <div className="product__related-price">
                          <span className="product__related-price-text detail__top-product--price">
                            150.000
                            <span className="vnd-class">₫</span>
                          </span>
                          <span className="product__related-sell">
                            Đã bán 190
                          </span>
                        </div>
                      </div>
                      <div className="home-product-item__favorite">
                        <i className="fas fa-check" />
                        <span>Yêu thích</span>
                      </div>
                      <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">27%</span>
                        <span className="home-product-item__sale-off-label">GIẢM</span>
                      </div>
                    </a>
                  </div>
                  <div className="col p-2 t-4 m-6">
                    <a href="#" className="product__related-item">
                      <div className="product__related-img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/b592121ddd925cc21599ab13c3bff5c7_tn")'}} />
                      <div className="product__related-content">
                        <div className="product__related-name">
                          Áo thể thao bra croptop CERA-Y màu đen CRA028
                        </div>
                        <div className="product__related-sale product__related-sale--disabled content-discount--item" />
                        <div className="product__related-price">
                          <span className="product__related-price-text detail__top-product--price">
                            100.000
                            <span className="vnd-class">₫</span>
                          </span>
                          <span className="product__related-sell">
                            Đã bán 9.9k
                          </span>
                        </div>
                      </div>
                      <div className="home-product-item__favorite">
                        <i className="fas fa-check" />
                        <span>Yêu thích</span>
                      </div>
                      <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">10%</span>
                        <span className="home-product-item__sale-off-label">GIẢM</span>
                      </div>
                    </a>
                  </div>
                  <div className="col p-2 t-4 m-6">
                    <a href="#" className="product__related-item">
                      <div className="product__related-img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/5e58a3202032f1eecc722887331a7612_tn")'}} />
                      <div className="product__related-content">
                        <div className="product__related-name">
                          Áo thun thể thao form rộng croptop CERA-Y màu đen CR001
                        </div>
                        <div className="product__related-sale content-discount--item">10% GIẢM</div>
                        <div className="product__related-price">
                          <span className="product__related-price-text detail__top-product--price">
                            89.000
                            <span className="vnd-class">₫</span>
                          </span>
                          <span className="product__related-sell">
                            Đã bán 9.9k
                          </span>
                        </div>
                      </div>
                      <div className="home-product-item__favorite">
                        <i className="fas fa-check" />
                        <span>Yêu thích</span>
                      </div>
                      <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">50%</span>
                        <span className="home-product-item__sale-off-label">GIẢM</span>
                      </div>
                    </a>
                  </div>
                  <div className="col p-2 t-4 m-6">
                    <a href="#" className="product__related-item">
                      <div className="product__related-img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/2eaaf9d13854346929ccd0ef6395fc74_tn")'}} />
                      <div className="product__related-content">
                        <div className="product__related-name">
                          Áo thể thao bra hai dây CERA-Y bản 1cm croptop CRA018
                        </div>
                        <div className="product__related-sale content-discount--item">10% GIẢM</div>
                        <div className="product__related-price">
                          <span className="product__related-price-text detail__top-product--price">
                            80.000
                            <span className="vnd-class">₫</span>
                          </span>
                          <span className="product__related-sell">
                            Đã bán 2.9k
                          </span>
                        </div>
                      </div>
                      <div className="home-product-item__favorite">
                        <i className="fas fa-check" />
                        <span>Yêu thích</span>
                      </div>
                      <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">16%</span>
                        <span className="home-product-item__sale-off-label">GIẢM</span>
                      </div>
                    </a>
                  </div>
                  <div className="col p-2 t-4 m-6">
                    <a href="#" className="product__related-item">
                      <div className="product__related-img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/05fd8241aaa4ec2e1e539ffa879bf16b_tn")'}} />
                      <div className="product__related-content">
                        <div className="product__related-name">
                          Áo 2 dây basic vintage chất liệu vải cao cấp phong cách Hàn
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
                    </a>
                  </div>
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
              <div className="detail__top-product--img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/6d5199bb9d2156e0de99183321d39e53_tn")'}} />
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
              <div className="detail__top-product--img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/2eaaf9d13854346929ccd0ef6395fc74_tn")'}} />
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
              <div className="detail__top-product--img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/a6a6082ec157bd1801c217a594995041_tn")'}} />
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
              <div className="detail__top-product--img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/f53558ea21555919f4d506ace10b7118_tn")'}} />
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
              <div className="detail__top-product--img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/c7ce41ce9cc32c1f40572c634b10eaef_tn")'}} />
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
  <footer className="footer">
    <div className="grid wide fix-wide-on-tablet footer-size">
      {/* Footer list */}
      <div className="row">
        <div className="col p-2-4 t-4 m-6">
          <h3 className="footer__heading">Chăm sóc khách hàng</h3>
          <ul className="footer-list">
            <li className="footer-item">
              <a href="#" className="footer-item__link">Trung tâm trợ giúp</a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-item__link">F8-Shop Mall</a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-item__link">Hướng dẫn mua hàng</a>
            </li>
          </ul>
        </div>
        <div className="col p-2-4 t-4 m-6">
          <h3 className="footer__heading">Giới thiệu</h3>
          <ul className="footer-list">
            <li className="footer-item">
              <a href="#" className="footer-item__link">Giới thiệu</a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-item__link">Tuyển dụng</a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-item__link">Điều khoản</a>
            </li>
          </ul>
        </div>
        <div className="col p-2-4 t-4 m-6">
          <h3 className="footer__heading">Danh mục</h3>
          <ul className="footer-list">
            <li className="footer-item">
              <a href="#" className="footer-item__link">Trang phục nữ</a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-item__link">Mĩ phẫm nam giới</a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-item__link">Mĩ phẫm nữ giới</a>
            </li>
          </ul>
        </div>
        <div className="col p-2-4 t-4 m-6">
          <h3 className="footer__heading">Theo dõi</h3>
          <ul className="footer-list">
            <li className="footer-item">
              <a href="#" className="footer-item__link">
                <i className="footer-item__icon fab fa-facebook" />
                Facebook
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-item__link">
                <i className="footer-item__icon fab fa-instagram" />
                Instagram
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-item__link">
                <i className="footer-item__icon fab fa-linkedin" />
                Linkedin
              </a>
            </li>
          </ul>
        </div>
        <div className="col p-2-4 t-8 m-12">
          <h3 className="footer__heading">Vào cửa hàng trên ứng dụng</h3>
          <div className="footer__download">
            <img src="assets/img/qr_code.png" alt="Download QR" className="footer__download-qr" />
            <div className="footer__download-apps">
              <a href="#" className="footer__download-app-link">
                <img src="assets/img/app_store.png" alt="Google Play" className="footer__download-app-img" />
              </a>
              <a href="#" className="footer__download-app-link">
                <img src="assets/img/google_play.png" alt="App Store" className="footer__download-app-img" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer copyright */}
    <div className="footer__bottom footer__bottom--mobile">
      <div className="grid wide fix-wide-on-tablet">
        <p className="footer__copyright-text">© 2021 - Bản quyền thuộc về Công ty MH</p>
      </div>
    </div>
  </footer>
</div>


        </>

    );
}

export default ProductDetails;
