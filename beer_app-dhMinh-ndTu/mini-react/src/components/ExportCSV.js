// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import * as FileSaver from 'file-saver';
// import * as XLSX from 'xlsx';

// export const ExportCSV = ({ csvData, fileName }) => {
//     const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
//     const fileExtension = '.xlsx';
//     const exportToCSV = (csvData, fileName) => {
//         const ws = XLSX.utils.json_to_sheet(csvData);
//         const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
//         const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
//         const data = new Blob([excelBuffer], { type: fileType });
//         FileSaver.saveAs(data, fileName + fileExtension);
//     }

//     return (
//         <Button onClick={(e) => exportToCSV(csvData, fileName)}>Xuat don thanh cong</Button>
//     )
// }



import React from 'react'
import { CSVLink } from 'react-csv'
import Button from 'react-bootstrap/Button';

export const ExportCSV = ({ csvData, fileName }) => {
    const csvDataHardCode = [
        ["firstname", "lastname", "email"],
        ["Ahmed", "Tomi", "ah@smthing.co.com"],
        ["Raed", "Labes", "rl@smthing.co.com"],
        ["Yezzi", "Min l3b", "ymin@cocococo.com"]
    ];
    return (
        <Button variant="warning">
            <CSVLink data={csvDataHardCode} filename={fileName}>Export</CSVLink>
        </Button>
    )
}
