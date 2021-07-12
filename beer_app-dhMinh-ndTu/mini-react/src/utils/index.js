export const BASE_URL = "http://codetrau.com:8082/order/beerOrders";

export const VND = "VND";

export const digitalNumber = (value) => {
    return Number.parseInt(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
};

export const sendData = (nameProduct, desProduct) => {
    return {
        "id": null,
        "href": null,
        "nameProduct": "Bia Hà Nội tu client",
        "price": 100000000000,
        "cancellationDate": null,
        "cancellationReason": null,
        "category": nameProduct,
        "completionDate": null,
        "description": desProduct,
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
        "note": [
            {
                "id": "333333333333333",
                "author": null,
                "date": null,
                "text": "http://www.tesst.com",
                "@baseType": null,
                "@schemaLocation": null,
                "@type": "Note"
            }
        ],
        "orderTotalPrice": null,
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
        "state": "acknowledged",
        "@baseType": null,
        "@schemaLocation": null,
        "@type": "BeerOrder"
    }

}
// var tamLogic = Number.parseInt(logic).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
//C:/Program Files (x86)/Google/Chrome/Application --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp
//"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp