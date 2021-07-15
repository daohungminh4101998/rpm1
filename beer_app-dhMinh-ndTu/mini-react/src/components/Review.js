import React, { useEffect, useState } from 'react';
import { Col, Button } from 'reactstrap';
import CustomIput from './CustomComponent/CustomIput';
import Https from './../service/Https'
import { useLocation, useParams } from 'react-router-dom';
import * as BEERAPP from '../utils/index'
function Review(props) {
    const [infoProduct, setInfoProduct] = useState(
        {
            review: '',
        }
    )
    const [getReview, setGetReview] = useState([])
    const location = useLocation();
    const [changeState, setStateChange] = useState('')
    const { slug } = useParams();
    let dataArr = []
    useEffect(() => {
        async function getBeerById() {
            const response = await Https.get(slug);
            setGetReview(response.data.note)
        }
        getBeerById()
    }, [infoProduct.review, changeState])


    const reviewCustomer = getReview !== undefined ? getReview.map((review, indexReview) => {
        return (
            // <div className="row" key={indexReview}>
            //     <div className="col-md-2">
            //         <img src="https://image.ibb.co/jw55Ex/def_face.jpg" className="img img-rounded img-fluid" />
            //         <p className="text-secondary text-center">{review.date !== null ? BEERAPP.convertDate(review.date) : '15 Minutes Ago'}</p>
            //     </div>
            //     <div className="col-md-10">
            //         <p>
            //             <strong> {review.author}</strong>
            //             <span className="float-right"><i className="text-warning fa fa-star" /></span>
            //             <span className="float-right"><i className="text-warning fa fa-star" /></span>
            //             <span className="float-right"><i className="text-warning fa fa-star" /></span>
            //             <span className="float-right"><i className="text-warning fa fa-star" /></span>
            //         </p>
            //         <div className="clearfix" />
            //         <p>{review.text}.</p>
            //         <p>
            //             <a className="float-right btn btn-outline-primary ml-2"> <i className="fa fa-reply" /> Reply</a>
            //             <a className="float-right btn text-white btn-danger"> <i className="fa fa-heart" /> Like</a>
            //         </p>
            //     </div>
            // </div>

            <div className="col p-12 m-12 t-12">

                <h3 className="product__review-head">
                    ĐÁNH GIÁ SẢN PHẨM
                </h3>
                <div className="product__review-pane product__review-pane-first">
                    <a href="#" className="product__review-link">
                        <img src="https://cf.shopee.vn/file/f53558ea21555919f4d506ace10b7118" alt="Avatar" className="review__pane-img" />
                    </a>
                    <div className="review__pane-info">
                        <a href="#" className="product__review-link">
                            <span className="review__pane-info--name">    <strong> {review.author}</strong></span>
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
                            {review.text}😀😬😇😘😗😉😁😂😊😙☺😃😄😋😚😜😍😌😅😆😚😙😗😶😚😚😚
                        </p>
                        {/* <div className="review__pane-feedback">
                            <div className="review__pane-feedback--item">
                                Chất lượng sản phẩm tuyệt vời
                            </div>
                            <div className="review__pane-feedback--item">
                                Đóng gói sản phẩm rất đẹp và chắc chắn
                            </div>
                        </div>
                        <div className="review__pane-feedback--img-list">
                            <img src="https://cf.shopee.vn/file/90edda778e02f7bf14439fbed0de7cd4_tn" alt="Img feedback" className="review__pane-feedback--img" />
                        </div> */}
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
                                    {review.date !== null ? BEERAPP.convertDate(review.date) : '15 Minutes Ago'}
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
                <div className="review__pane-pagination--mobile show-on-mobile">
                    <a href="#" className="more__review-mobile">
                        Xem tất cả (2.9k)
                        <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0} className="breadcrumb--icon more__review-mobile--icon">
                            <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
                        </svg>
                    </a>
                </div>
            </div>

        )
    }) : [];

    async function getComment(dataArr) {

        const sendData = {
            "id": slug,
            "href": null,
            "price": null,
            "nameProduct": null,
            "cancellationDate": null,
            "cancellationReason": null,
            "category": null,
            "completionDate": null,
            "description": null,
            "expectedCompletionDate": null,
            "externalId": null,
            "notificationContact": null,
            "orderDate": null,
            "priority": null,
            "requestedCompletionDate": null,
            "requestedStartDate": null,
            "agreement": null,
            "billingAccount": null,
            "channel": null,
            "note": dataArr,
            "orderTotalPrice": null,
            "payment": null,
            "productOfferingQualification": null,

            "quote": [
                {
                    "validFor": null,
                    "state": null,
                    "note": null,
                    "lastStateChangedDate": null,
                    "id": null,
                    "href": null,
                    "name": "BIA ORDER-DEMO 12121212",
                    "description": "Là thức uống lúa mạch sản xuất theo dây chuyền việt nam",
                    "@baseType": null,
                    "@schemaLocation": null,
                    "@type": "QuoteRef",
                    "@referredType": null
                }
            ],
            "state": "acknowledged",
            "@baseType": null,
            "@schemaLocation": null,
            "@type": "BeerOrder"
        }
        const tamp = await Https.post(`${process.env.REACT_APP_API_URL}`, sendData);
        setInfoProduct('')
        console.log(tamp)
        setStateChange('haha')
    }
    const handleReview = () => {
        // setGetReview([...getReview, {
        //     "id": "111111111",
        //     "author": "Cao van mit",
        //     "date": null,
        //     "text": "Ok cho 5 *",
        //     "@baseType": null,
        //     "@schemaLocation": null,
        //     "@type": "Note"
        // }])

        const orderNow = Date.now();
        var dateobj = new Date(orderNow);
        var convertDateISO = dateobj.toISOString();
        dataArr = [...getReview,
        {
            "id": "22222222",
            "author": "tran van minh",
            "date": convertDateISO,
            "text": infoProduct.review,
            "@baseType": null,
            "@schemaLocation": null,
            "@type": "Note"
        }
        ]
        getComment(dataArr)

    }

    return (
        <div className="pt-5 pb-5 pl-5 pr-5">

            {reviewCustomer}
            <h1 className="pt-4">Review san pham</h1>
            <CustomIput width="100%" setInfoProduct={setInfoProduct} infoProduct={infoProduct} forLabel="" name="review" type="textarea" valueInput="valueInput" placeholder="Review" />

            {/* <div className="card-inner">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-2">
                            <img src="https://image.ibb.co/jw55Ex/def_face.jpg" className="img img-rounded img-fluid" />
                            <p className="text-secondary text-center">15 Minutes Ago</p>
                        </div>
                        <div className="col-md-10">
                            <p><a href="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong>Maniruzzaman Akash</strong></a></p>
                            <p>Lorem Ipsum is simply dummy text of the pr make  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p>
                                <a className="float-right btn btn-outline-primary ml-2">  <i className="fa fa-reply" /> Reply</a>
                                <a className="float-right btn text-white btn-danger"> <i className="fa fa-heart" /> Like</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
            <Col md="12" sm="12">
                <Button className="btn btn-primary col-sm-12 col-md-12" onClick={handleReview}>
                    Post
                </Button>
            </Col>
        </div>

    );
}

export default Review;
