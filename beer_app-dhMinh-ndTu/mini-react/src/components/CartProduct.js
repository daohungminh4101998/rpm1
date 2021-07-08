import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import * as BEERAPP from './../utils/index';
import axios from 'axios'
function CartProduct(props) {
    const [fakeApi, setFakeApi] = useState([])
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



    const renderOrder = fakeApi.length > 0 ? fakeApi.map((item, index) => {
        if (item.state == 'completed') {
            return (
                // <tbody>
                //     <tr>
                //         <th scope="row">{item.id}</th>
                //         <td>{item.category}</td>
                //         <td>{item.productOrderItem[0] != undefined ? item.productOrderItem[0].quantity : ""}</td>
                //         <td></td>

                //         <td>{item.orderDate}</td>

                //         <td>{item.state}</td>

                //         <td style={{ textAlign: 'center' }}>        <ButtonToggle onClick={() => handleComPlete(item.id)} color="success">Duyet</ButtonToggle>{' '}</td>

                //         <td style={{ textAlign: 'center' }}>        <ButtonToggle onClick={() => hendleReject(item.id)} color="danger">Tu choi</ButtonToggle>{' '}</td>
                //     </tr>
                // </tbody>

                <tbody>
                    <tr>
                        <td>{index}</td>
                        <td>bia</td>
                        <td>1</td>
                        <td>1000</td>
                        <td>hom nay</td>

                        <td>{item.state}</td>
                    </tr>
                </tbody>
            )
        } else {
            return false
        }

    }) : []



    const renderOrderProgress = fakeApi.length > 0 ? fakeApi.map((item, index) => {
        console.log(item)
        if (item.state == 'inProgress') {
            return (
                // <tbody>
                //     <tr>
                //         <th scope="row">{item.id}</th>
                //         <td>{item.category}</td>
                //         <td>{item.productOrderItem[0] != undefined ? item.productOrderItem[0].quantity : ""}</td>
                //         <td></td>

                //         <td>{item.orderDate}</td>

                //         <td>{item.state}</td>

                //         <td style={{ textAlign: 'center' }}>        <ButtonToggle onClick={() => handleComPlete(item.id)} color="success">Duyet</ButtonToggle>{' '}</td>

                //         <td style={{ textAlign: 'center' }}>        <ButtonToggle onClick={() => hendleReject(item.id)} color="danger">Tu choi</ButtonToggle>{' '}</td>
                //     </tr>
                // </tbody>

                <tbody>
                    <tr>
                        <td>{index}</td>
                        <td>{item.category}</td>
                        <td>1</td>
                        <td>1000</td>
                        <td>hom nay</td>

                        <td>{item.state}</td>
                    </tr>
                </tbody>
            )
        } else {
            return false
        }

    }) : []

    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th colSpan={3}>danh sach order thanh cong</th>

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
                </thead>
                {renderOrder}



            </Table>

            <Table>
                <thead>
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
                </thead>
                {renderOrderProgress}



            </Table>


        </>
    );
}

export default CartProduct;