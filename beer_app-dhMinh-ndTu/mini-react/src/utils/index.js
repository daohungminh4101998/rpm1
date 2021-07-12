export const BASE_URL = "http://codetrau.com:8082/order/beerOrders";

export const VND = "VND";

export const digitalNumber = (value) => {
    return Number.parseInt(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
};
// var tamLogic = Number.parseInt(logic).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
//C:/Program Files (x86)/Google/Chrome/Application --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp
//"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp