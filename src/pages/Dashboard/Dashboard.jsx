import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/formatCurrency";
import StatusComponent from "../../components/Status/StatusComponent";
import Button from "../../components/Button/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { signOut } from "../../store/authSlice";
import NoDataFound from "../../components/NoDataFound/NoDataFound";

const Dashboard = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const order = useSelector((state) => state.orders); // Assuming you have an orders slice
  const [orders, setOrder] = useState(null);

  useEffect(() => {
    const savedOrder = sessionStorage.getItem("order");
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("order");
    dispatch(signOut());
  };
  return (
    <div>
      <div className=" flex-center justify-between">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <Button
          onClick={handleLogout}
          className="w-48 mt-4 bg-red-500 text-white py-2 rounded-md"
          suffixIcon={<Icon icon="majesticons:logout" className="text-white" />}
        >
          Logout
        </Button>
      </div>
      <div className="max-w-4xl mx-auto my-4 p-4 border rounded">
        <h2 className="text-2xl font-bold mb-4">Welcome, {user.name}</h2>
        <h3 className="text-xl font-semibold mb-2">Your Recent Orders</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Order ID</th>
                <th className="py-2 px-4 border">Date</th>
                <th className="py-2 px-4 border">Total</th>
                <th className="py-2 px-4 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders?.items.length === 0 ? (
                <NoDataFound />
              ) : (
                orders?.items.map((order) => (
                  <tr key={order.id}>
                    <td className="py-2 px-4 border">{order.id}</td>
                    <td className="py-2 px-4 border">
                      {new Date(order.date).toLocaleDateString()}
                    </td>
                    <td className="py-2 px-4 border">
                      {formatCurrency(order.price)}
                    </td>
                    <td className="py-2 px-4 border">
                      <StatusComponent value={"completed"} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
