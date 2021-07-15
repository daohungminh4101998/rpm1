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
            <div className="row" key={indexReview}>
                <div className="col-md-2">
                    <img src="https://image.ibb.co/jw55Ex/def_face.jpg" className="img img-rounded img-fluid" />
                    <p className="text-secondary text-center">{review.date !== null ? BEERAPP.convertDate(review.date) : '15 Minutes Ago'}</p>
                </div>
                <div className="col-md-10">
                    <p>
                        <strong> {review.author}</strong>
                        <span className="float-right"><i className="text-warning fa fa-star" /></span>
                        <span className="float-right"><i className="text-warning fa fa-star" /></span>
                        <span className="float-right"><i className="text-warning fa fa-star" /></span>
                        <span className="float-right"><i className="text-warning fa fa-star" /></span>
                    </p>
                    <div className="clearfix" />
                    <p>{review.text}.</p>
                    <p>
                        <a className="float-right btn btn-outline-primary ml-2"> <i className="fa fa-reply" /> Reply</a>
                        <a className="float-right btn text-white btn-danger"> <i className="fa fa-heart" /> Like</a>
                    </p>
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
        <div className="container">
            <CustomIput setInfoProduct={setInfoProduct} infoProduct={infoProduct} forLabel="Review san pham" name="review" type="textarea" valueInput="valueInput" placeholder="Review" />

            {reviewCustomer}
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
