import React from 'react';
import { Link } from 'react-router-dom';

const data = [
    {
      "id": 1,
      "applicationNumber": "A12345",
      "applicationCategory": "TEC",
      "productName":"PON Family of Broadband Equipment",
      "models": "Model X",
      "estimatedTime": "2023-11-01",
      "actualTime": "2023-11-02",
    },
    {
      "id": 2,
      "applicationNumber": "B56789",
      "applicationCategory": "WPC",
      "productName":"Mobile",
      "models": "Model Y",
      "estimatedTime": "2023-11-03",
      "actualTime": "2023-11-04",
    },
    {
      "id": 3,
      "applicationNumber": "C98765",
      "applicationCategory": "BIS",
      "productName":"Bluetooth",
      "models": "Model Z",
      "estimatedTime": "2023-11-05",
      "actualTime": "2023-11-06",
    },
    {
      "id": 4,
      "applicationNumber": "D54321",
      "applicationCategory": "WPC",
      "productName":"Laptop",
      "models": "Model W",
      "estimatedTime": "2023-11-07",
      "actualTime": "2023-11-08",
    },
    {
      "id": 5,
      "applicationNumber": "E13579",
      "applicationCategory": "TEC",
      "productName":"Tabs and fliped phone",
      "models": "Model V",
      "estimatedTime": "2023-11-09",
      "actualTime": "2023-11-10",
    },
  ];
  
const Table = () => {


  return (
    <div className="overflow-x-auto">
      <h1 className="text-2xl mb-4 text-center font-bold">Application Progress & Reports</h1>

      <table className="min-w-full bg-white border rounded shadow-md">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="border p-3">S.NO</th>
            <th className="border p-3">Application Number</th>
            <th className="border p-3">Application Category</th>
            <th className="border p-3">Product Name</th>
            <th className="border p-3">Models</th>
            <th className="border p-3">Estimated Time</th>
            <th className="border p-3">Actual Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className={`${item.id % 2 === 0 ? 'bg-gray-100' : ''} hover:bg-gray-100`}>
              <td className="border p-3 text-center">{item.id}</td>
              <td className="border p-3 text-center">
                <Link to={`/${item.applicationCategory}/${item.applicationNumber}`} className="text-blue-500">
                  Eik/{item.applicationCategory}/{item.applicationNumber}
                </Link>
              </td>
              <td className="border p-3 text-center">{item.applicationCategory}</td>
              <td className="border p-3 text-center">{item.productName}</td>
              <td className="border p-3 text-center">{item.models}</td>
              <td className="border p-3 text-center">{item.estimatedTime}</td>
              <td className="border p-3 text-center">{item.actualTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
