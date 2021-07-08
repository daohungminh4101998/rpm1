
import axios from 'axios'
import * as BEERAPP from './../utils/index';

export async function CallApi() {
    try {
        alert('1')
        const response = await axios.get(`${BEERAPP.BASE_URL}`, {
            headers: {
                Accept: "*/*",
            }
        });
        // setFakeApi(response.data)
    } catch (error) {
        console.error(error);
    }
}
