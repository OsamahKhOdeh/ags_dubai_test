import React from "react";
import { useState } from "react";
import ProformaInvoiceOrders from "./ProformaInvoiceOrders/ProformaInvoiceOrders";
import SignedProformaInvoices from "./SignedProformaInvoices/SignedProformaInvoices";
import { Link, useLocation } from "react-router-dom";
import "./Orders.css";
import PurchaseOrderOrders from "./PurchaseOrderOrders/PurchaseOrderOrders";
import PackingListOrders from "./PackingListOrders/PackingListOrders";
import OrderTrackingUser from "../../Components/OrderTrackingUser/OrderTrackingUser";

const Orders = () => {
  const { state } = useLocation();
  console.log("statestatestatestatestatestate", state);
  let pageContent = state === "purchaseOrderOrders" ? <PurchaseOrderOrders /> : <ProformaInvoiceOrders />;
  const [page, setPage] = useState(state === "purchaseOrderOrders" ? "purchaseOrderOrders" : "orders");
  switch (page) {
    case "orders":
      pageContent = <ProformaInvoiceOrders />;
      break;
    case "confirmedOrders":
      pageContent = <SignedProformaInvoices />;
      break;
    case "PackingListOrders":
      pageContent = <PackingListOrders />;
      break;
    case "purchaseOrderOrders":
      pageContent = <PurchaseOrderOrders />;
      break;
    case "ordersTracking":
      pageContent = <OrderTrackingUser />;
      break;
    default:
  }
  return (
    <div>
      <div className="navigation_bar">
        <button className="btn_nav" onClick={() => setPage("orders")}>
          PI Orders
        </button>
        <button className="btn_nav" onClick={() => setPage("confirmedOrders")}>
          Confirmed Orders
        </button>
        <button className="btn_nav" onClick={() => setPage("purchaseOrderOrders")}>
          PurchaceOrder Orders
        </button>
        <button className="btn_nav" onClick={() => setPage("PackingListOrders")}>
          PKL Orders
        </button>
        <button className="btn_nav" onClick={() => setPage("ordersTracking")}>
          Orders Tracking
        </button>
      </div>

      {pageContent}
    </div>
  );
};

export default Orders;
