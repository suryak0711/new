// import React, { useState, useEffect } from "react";
// import Axios from 'axios';
// import { Toolbar, Box, Typography } from "@mui/material";
// import Footer from "./userfooter";

// function Myorder() {
//     const [orderList, setOrderList] = useState([]);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await Axios.get("http://localhost:3001/myorder", {
//                     // Optionally include credentials if using session-based authentication
//                     withCredentials: true,
//                 });
//                 setOrderList(response.data);
//             } catch (err) {
//                 setError('Failed to fetch order data');
//                 console.error('Error fetching order data:', err);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <>
//             <Toolbar />
//             <Box sx={{ background: '#ccc', padding: 3 }}>
//                 <Typography variant="h4" sx={{ mb: 3 }}>
//                     My Orders
//                 </Typography>
//                 {error && <p>{error}</p>}
//                 <table className="layout display responsive-table">
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Product ID</th>
//                             <th>Quantity</th>
//                             <th>Total Price</th>
//                             <th>Address</th>
//                             <th>Phone Number</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {orderList.map((order) => (
//                             <tr key={order.id}>
//                                 <td>{order.id}</td>
//                                 <td>{order.product_id}</td>
//                                 <td>{order.quantity}</td>
//                                 <td>{order.total_price}</td>
//                                 <td>{order.address}</td>
//                                 <td>{order.phone}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </Box>
//             <Footer />
//         </>
//     );
// }

// export default Myorder;


import React, { useEffect, useState } from 'react';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const loggedInUserId = 1; // Replace with the actual logged-in user ID

  useEffect(() => {
    fetch(`/my-orders/${loggedInUserId}`)
      .then(res => res.json())
      .then(data => setOrders(data))
      .catch(err => console.log('Error fetching orders:', err));
  }, [loggedInUserId]);

  return (
    <div>
      <h2>My Orders</h2>
      {orders.length > 0 ? (
        orders.map(order => (
          <div key={order.order_id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0' }}>
            <h3>Order #{order.order_id}</h3>
            <p><strong>Date:</strong> {new Date(order.order_date).toLocaleDateString()}</p>
            <p><strong>Product:</strong> {order.product_name}</p>
            <p><strong>Quantity:</strong> {order.quantity}</p>
            <p><strong>Total Price:</strong> ${(order.total_price).toFixed(2)}</p>
          </div>
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default MyOrders;


