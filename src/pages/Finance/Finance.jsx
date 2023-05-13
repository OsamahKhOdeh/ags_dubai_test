import React, { useEffect, useState } from "react";
import "./Finance.css";
import { getSignedProformaInvoicesAction } from "../../actions/proformaInvoice";
import { useDispatch, useSelector } from "react-redux";
import DownloadPDFButton from "../Orders/ProformaInvoiceOrders/DownloadPDFButton";
import { colorByStatus } from "../../helpers/piOrdersFunctions";
import PaymentsModal from "./Paynemts/PaymentsModal";
import StatusSelect from "./StatusSelect";
import SearchBox from "../../Components/SearchBox/SearchBox";
import DropDownSelect from "../../Components/DropDownSelect/DropDownSelect";
import axios from "axios";
import { BASE_URL } from "../../api/index";

const Finance = () => {
  const [popupClass, setPopupClass] = useState("form-popup hidden");

  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSignedProformaInvoicesAction());
  }, [dispatch]);
  let proformaInvoices = useSelector((state) => state.proformaInvoices.proformaInvoices);

  /* -------------------------------- Reject Pi ------------------------------- */

  const handleReject = (id) => {
    setPopupClass("form-popup showing");
    //dispatch(updateProformaInvoiceStatus({id, newStatus : 'Rejected'}))
  };

  const handleRejectMessage = (event) => {
    event.preventDefault();
    console.log(event.target.rej_msg.value);
    //const id = currentPi._id;
    // dispatch(updateProformaInvoiceStatus({id, newStatus : 'Rejected' , managerMessage : event.target.rej_msg.value ,  manager : username}))
    setPopupClass("form-popup hidden");
    event.target.rej_msg.value = "";
  };
  /* -------------------------------------------------------------------------- */

  /* ------------------------------- searchQuery ------------------------------ */
  console.log(filter);

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  if (filter.length > 0 && searchQuery.length > 0) {
    proformaInvoices = proformaInvoices.filter((item) => item[filter].toString().toLowerCase().includes(searchQuery.toLowerCase()));
  }

  if (searchQuery.length > 0 && filter.length === 0) {
    proformaInvoices = proformaInvoices.filter((item) => item.pi_no.toString().includes(searchQuery.toLowerCase()));
  }

  const options = [
    { name: "PI Number", value: "pi_no" },
    { name: "Employee", value: "employee" },
    { name: "Customer", value: "buyer_address" },
    { name: "Status", value: "status" },
  ];

  const handleBookClick = (id) => {
    axios
      .patch(`${BASE_URL}/products/bookpiproducts/${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        // setIsLoading(false);
      });
  };

  /* -------------------------------------------------------------------------- */

  return (
    <div className="page_container">
      <div className={popupClass} id="myForm">
        <form onSubmit={handleRejectMessage} className="form-container">
          <h1>Reject with note</h1>

          <label htmlFor="rej_msg">
            <b>Rejection message</b>
          </label>
          <input type="text" placeholder="Enter why you reject this proforma invoice" name="rej_msg" />

          <button type="submit" className="btn">
            Send
          </button>
          <button
            style={{ position: "absolute", right: "23px" }}
            type="button"
            className="btn cancel"
            onClick={() => {
              setPopupClass("form-popup hidden");
            }}
          >
            Close
          </button>
        </form>
      </div>

      <div className="search_container">
        <SearchBox onChange={handleSearchQueryChange}></SearchBox>
        <DropDownSelect onChange={handleFilterChange} options={options} />
      </div>

      <table className="pi__table table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Employee</th>
            <th scope="col">Date/Time</th>
            <th scope="col">Customer</th>
            <th scope="col">Proforma Invoice</th>
            <th scope="col">Book Stock</th>
            <th scope="col">Reject</th>
            <th scope="col">Payments</th>
            <th scope="col">Change Status</th>
            <th scope="col">Current Status</th>
          </tr>
        </thead>
        <tbody>
          {proformaInvoices.map((proformaInvoice, index) => (
            <tr key={index}>
              <th scope="row">{proformaInvoice.pi_no}</th>
              <td>{proformaInvoice.employee}</td>
              <td>{proformaInvoice.createdAt}</td>
              <td>{proformaInvoice.buyer_address}</td>
              <td>
                <DownloadPDFButton
                  pi_id={proformaInvoice.pi_id}
                  pdfName={`signed_${proformaInvoice.pi_no}_${proformaInvoice.employee}_${proformaInvoice.manager}_${proformaInvoice.pi_id}`}
                />
              </td>
              <td>
                <div className="book_but" onClick={() => handleBookClick(proformaInvoice.pi_id)}>
                  BOOK
                </div>
              </td>
              <td className="rej_cell">
                <button
                  className="fi_butt rej_button"
                  onClick={() => {
                    handleReject(proformaInvoice.pi_id);
                  }}
                >
                  Reject
                </button>
              </td>
              <td>
                <PaymentsModal pi={proformaInvoice} />
              </td>
              <td>
                <StatusSelect pi={proformaInvoice} />
              </td>

              <td className={colorByStatus(proformaInvoice?.status)}>{proformaInvoice.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Finance;
