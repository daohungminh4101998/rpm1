import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import * as BEERAPP from './../utils/index';
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import fake from '../assets/img/fake.jpg'
function CartProduct(props) {
    let location = useLocation();
    let locationId = location.state !== undefined ? location.state.listOrder.id : []
    const [fakeApi, setFakeApi] = useState([])
    async function getBeerById() {
        try {
            const response = await axios.get(`${BEERAPP.BASE_URL}/${locationId}`, {
                headers: {
                    Accept: "*/*",
                }
            });
            setFakeApi(response.data)

        } catch (error) {
            console.error(error);
        }

    }
    const styleTable = {
        height: '50px',
        lineHeight: '50px'
    }
    // let cls;
    useEffect(() => {
        getBeerById()

        // eslint-disable-next-line react-hooks/exhaustive-deps

    }, [])
    let totalCount = 0;
    const renderOrder = fakeApi.orderTotalPrice !== undefined ? fakeApi.orderTotalPrice.map((item, index) => {
        totalCount += item.price.taxIncludedAmount.value
        return (
            <tbody className="text-center" key={index} style={styleTable} >
                <tr>
                    <td>{index}</td>
                    <td>{item.name}</td>
                    <td><img src={fake} width="50px" height="50px" alt={item.name} /></td>
                    <td>1</td>
                    <td>{fakeApi.state}</td>
                    <td>hom nay</td>
                    <td>{BEERAPP.digitalNumber(item.price.taxIncludedAmount.value)}</td>
                </tr>
            </tbody >
        )
    }) : []
    // const renderOrderProgress = fakeApi.length > 0 ? fakeApi.map((item, index) => {
    //     if (item.state == 'inProgress') {
    //         return (
    //             <tbody>
    //                 <tr>
    //                     <td>{index}</td>
    //                     <td>{item.category}</td>
    //                     <td>1</td>
    //                     <td>1000</td>
    //                     <td>hom nay</td>
    //                     <td>{item.state}</td>

    //                 </tr>
    //             </tbody>
    //         )
    //     } else {
    //         return false
    //     }

    // }) : []

    return (
        <>
            <Table className="table table-hover">
                <thead class="text-center">
                    <tr>
                        <th colSpan={7}>danh sach order</th>

                    </tr>
                </thead>
                <thead>
                    <tr class="text-center">

                        <th>stt</th>
                        <th>ten sp</th>

                        <th>hinh anh mo ta</th>
                        <th>so luong</th>
                        <th>trang thai</th>
                        <th>ngay order</th>
                        <th>gia</th>
                    </tr>
                </thead>
                {renderOrder}
                <tr>
                    <th colSpan={6}>TONG GIA :</th>
                    <th className="text-center">{BEERAPP.digitalNumber(totalCount)} VND</th>
                </tr>
            </Table>
            <Table>
                {/* <thead>
                    <tr>
                        <th colSpan={3}>danh sach dang order</th>
                    </tr>
                </thead>
                <thead>
                    <tr>

                        <th>stt</th>
                        <th>ten sp</th>
                        <th>so luong</th>
                        <th>gia</th>
                        <th>ngay order</th>
                        <th>trang thai</th>
                    </tr>
                </thead> */}
                {/* {renderOrderProgress} */}
            </Table>


        </>
    );
}

export default CartProduct;