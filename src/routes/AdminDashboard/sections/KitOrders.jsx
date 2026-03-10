import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axiosInstance from "../../../api/axiosInstance";

function KitOrders() {

  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {

    try {

      const res = await axiosInstance.get("/orders");

      setOrders(res.data);

    } catch (error) {

      console.error("Fetch orders error:", error);

    }

  };

  useEffect(() => {

    fetchOrders();

  }, []);

  return (
    <div className="p-4">

      <h3 className="mb-4">Kit Orders</h3>

      <Table bordered hover>

        <thead>

          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Amount</th>
            <th>Payment</th>
            <th>Delivery</th>
          </tr>

        </thead>

        <tbody>

          {orders.map((order) => (

            <tr key={order._id}>

              <td>{order.customer?.name}</td>

              <td>{order.customer?.phone}</td>

              <td>
                {order.customer?.address}, {order.customer?.city}
              </td>

              <td>₹{order.amount}</td>

              <td>{order.payment_status}</td>

              <td>{order.delivery_status}</td>

            </tr>

          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default KitOrders;
