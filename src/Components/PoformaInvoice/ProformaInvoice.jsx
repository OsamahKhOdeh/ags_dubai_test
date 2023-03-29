import React from 'react';
import ReactPDF, { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import Invoice from '../Invoice/Invoice'
import { PDFViewer } from '@react-pdf/renderer';
import invoice from '../../data/invoice-data'
import { useDispatch, useSelector } from 'react-redux';
import { setPiEmployee, setPiProudcts } from '../../store/piSlice';
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

const ProformaInvoice = ({adminPi}) => {
  console.log(adminPi);
  const cart = useSelector((state)=>state.cart.cart);
  const {username , status} = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {dispatch(setPiProudcts(cart))
 dispatch(setPiEmployee(username+" "+status))  
  },[])
  
  
   const pi = useSelector((state)=>state.pi);
   const currency = useSelector((state)=>state.filters.currency);
   const location =useSelector((state)=>state.filters.location);
   const usdToAedRate = useSelector((state) => state.filters.usdToAedRate);
   let newPi = {};
if(adminPi){
    newPi = {
    piProducts: adminPi.products,
    piInfo: {
      invoiceNo: adminPi.no,
      date: new Date(adminPi.date).toLocaleDateString({ year: 'numeric', month: 'numeric', day: 'numeric' }),
      exporter: adminPi.exporter,
      buyerAdress: adminPi.buyer_address,
      consignee: adminPi.consignee,
      notifyParty: adminPi.notify_party,
      partyOfDischarge: adminPi.party_of_discharge,
      finalDistination: adminPi.final_distination,
      discount: adminPi.discount,
      additions : adminPi.additions,
      terms : adminPi.terms,
      employee : adminPi.employee,
      phoneNumber : adminPi.phone_number,
      note : adminPi.note,
      currency : adminPi.currency,
      location : adminPi.location

    },
    isPi : true
  }
   console.log(newPi);
}
   console.log(pi);


  return (
    <div style={{width:"100%"}}>
   <PDFViewer width="100%" height="1200" className="app" >
     {/*<Invoice pi={pi} currency={currency} location={location}  usdToAedRate={usdToAedRate} /> */}
    {adminPi ?<Invoice pi={newPi} currency={adminPi.currency} location={adminPi.location}  usdToAedRate={usdToAedRate}/>:<Invoice pi={pi} currency={currency} location={location}  usdToAedRate={usdToAedRate} />
    }
   </PDFViewer>
 
    </div>
  )
}

export default ProformaInvoice

/*
   
<PDFDownloadLink document={<MyDocument />} fileName="fee_acceptance.pdf">
  {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
</PDFDownloadLink>

*/