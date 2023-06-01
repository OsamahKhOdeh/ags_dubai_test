import React from "react";
import { PDFViewer } from "@react-pdf/renderer";

import Invoice from "./Invoice.js";
import InvoiceInfo from "./InvoiceInfo.js";

const pkl = {
  _id: "647489ec4c49fa1e945254eb",
  date: "2023-05-29T11:18:03.984Z",
  exporter: "pklInfo.exporter",
  piNo: 40086,
  piId: "6461ea04a63e014a3850fbd7",
  invoiceNo: "123-124",
  customer: "AL QALAM COMPANY",
  buyerAddress: "ADWAA UMM ALQASRABA",
  truckItems: [
    {
      _id: "647489ec4c49fa1e945254ec",
      truckNo: "23646",
      truckDriverName: "Osama Odeh",
      truckDriverTel: "+971222356889",
      truckNetWeight: 12737.2,
      truckGrossWeight: 13062.8,
      truckTotalPackages: 535,
      truckTotalAmount: 9695,
      truckTotalPallets: 0,
      truckBls: "ERROPVCLKLD898843848 TY3453JGHGSDF",
      truckProductItems: [
        {
          productBl: [],
          _id: "647489ec4c49fa1e945254ed",
          productId: "644d2f00f6ac4351d41d5c3b",
          productCode: "SMF N200",
          productCategory: "Battery",
          productCapacity: "200 AH",
          productGrossWeight: 53.33,
          productNetWeight: 52.42,
          productPrice: 12,
          productQty: 160,
          productPalletQty: 0,
          productTotalNetWeight: 8387.2,
          productTotalGrossWeight: 8532.8,
          productTotalAmount: 1920,
          productWarehouses: [
            {
              _id: "647489ec4c49fa1e945254ee",
              warehouse: "ags showroom",
              qty: 40,
            },
            {
              _id: "647489ec4c49fa1e945254ef",
              warehouse: "lebanon wh",
              qty: 120,
            },
          ],
        },
        {
          productBl: [],
          _id: "647489ec4c49fa1e945254f0",
          productId: "645e3aba2d073e0413c733f7",
          productCode: "IVEM5048-SOLAR INVERTER  IVEM5048",
          productCategory: "Inverter",
          productCapacity: "5k",
          productGrossWeight: 13.2,
          productNetWeight: 13,
          productPrice: 10,
          productQty: 200,
          productPalletQty: 0,
          productTotalNetWeight: 2600,
          productTotalGrossWeight: 2640,
          productTotalAmount: 2000,
          productWarehouses: [
            {
              _id: "647489ec4c49fa1e945254f1",
              warehouse: "our wh 2 (new)",
              qty: 200,
            },
          ],
        },
        {
          productBl: [],
          _id: "647489ec4c49fa1e945254f2",
          productId: "645e3af02d073e0413c733f9",
          productCode: "IVEM3024-SOLAR INVERTER  IVEM3024",
          productCategory: "Inverter",
          productCapacity: "3k",
          productGrossWeight: 10.8,
          productNetWeight: 10,
          productPrice: 33,
          productQty: 175,
          productPalletQty: 0,
          productTotalNetWeight: 1750,
          productTotalGrossWeight: 1890.0000000000002,
          productTotalAmount: 5775,
          productWarehouses: [
            {
              _id: "647489ec4c49fa1e945254f3",
              warehouse: "azb",
              qty: 150,
            },
            {
              _id: "647489ec4c49fa1e945254f4",
              warehouse: "our wh 2 (new)",
              qty: 25,
            },
          ],
        },
      ],
    },
    {
      _id: "647489ec4c49fa1e945254f5",
      truckNo: "41235",
      truckDriverName: "Ahmad Khalil",
      truckDriverTel: "+968000254655",
      truckNetWeight: 19285.6,
      truckGrossWeight: 19859.4,
      truckTotalPackages: 1030,
      truckTotalAmount: 19860,
      truckTotalPallets: 0,
      truckBls: "SWL3343543IO TYU667899LK",
      truckProductItems: [
        {
          productBl: [],
          _id: "647489ec4c49fa1e945254f6",
          productId: "644d2f00f6ac4351d41d5c3b",
          productCode: "SMF N200",
          productCategory: "Battery",
          productCapacity: "200 AH",
          productGrossWeight: 53.33,
          productNetWeight: 52.42,
          productPrice: 12,
          productQty: 180,
          productPalletQty: 0,
          productTotalNetWeight: 9435.6,
          productTotalGrossWeight: 9599.4,
          productTotalAmount: 2160,
          productWarehouses: [
            {
              _id: "647489ec4c49fa1e945254f7",
              warehouse: "ags showroom",
              qty: 60,
            },
            {
              _id: "647489ec4c49fa1e945254f8",
              warehouse: "lebanon wh",
              qty: 120,
            },
          ],
        },
        {
          productBl: [],
          _id: "647489ec4c49fa1e945254f9",
          productId: "645e3aba2d073e0413c733f7",
          productCode: "IVEM5048-SOLAR INVERTER  IVEM5048",
          productCategory: "Inverter",
          productCapacity: "5k",
          productGrossWeight: 13.2,
          productNetWeight: 13,
          productPrice: 10,
          productQty: 450,
          productPalletQty: 0,
          productTotalNetWeight: 5850,
          productTotalGrossWeight: 5940,
          productTotalAmount: 4500,
          productWarehouses: [
            {
              _id: "647489ec4c49fa1e945254fa",
              warehouse: "our wh 2 (new)",
              qty: 200,
            },
            {
              _id: "647489ec4c49fa1e945254fb",
              warehouse: "ags showroom",
              qty: 250,
            },
          ],
        },
        {
          productBl: [],
          _id: "647489ec4c49fa1e945254fc",
          productId: "645e3af02d073e0413c733f9",
          productCode: "IVEM3024-SOLAR INVERTER  IVEM3024",
          productCategory: "Inverter",
          productCapacity: "3k",
          productGrossWeight: 10.8,
          productNetWeight: 10,
          productPrice: 33,
          productQty: 400,
          productPalletQty: 0,
          productTotalNetWeight: 4000,
          productTotalGrossWeight: 4320,
          productTotalAmount: 13200,
          productWarehouses: [
            {
              _id: "647489ec4c49fa1e945254fd",
              warehouse: "azb",
              qty: 25,
            },
            {
              _id: "647489ec4c49fa1e945254fe",
              warehouse: "our wh 2 (new)",
              qty: 375,
            },
          ],
        },
      ],
    },
    {
      _id: "647489ec4c49fa1e945254ff",
      truckNo: "555666",
      truckDriverName: "Hussam Alahmad",
      truckDriverTel: "+98745545222",
      truckNetWeight: 12887.2,
      truckGrossWeight: 13182.8,
      truckTotalPackages: 535,
      truckTotalAmount: 8545,
      truckTotalPallets: 0,
      truckProductItems: [
        {
          productBl: [],
          _id: "647489ec4c49fa1e94525500",
          productId: "644d2f00f6ac4351d41d5c3b",
          productCode: "SMF N200",
          productCategory: "Battery",
          productCapacity: "200 AH",
          productGrossWeight: 53.33,
          productNetWeight: 52.42,
          productPrice: 12,
          productQty: 160,
          productPalletQty: 0,
          productTotalNetWeight: 8387.2,
          productTotalGrossWeight: 8532.8,
          productTotalAmount: 1920,
          productWarehouses: [
            {
              _id: "647489ec4c49fa1e94525501",
              warehouse: "ags showroom",
              qty: 20,
            },
            {
              _id: "647489ec4c49fa1e94525502",
              warehouse: "lebanon wh",
              qty: 140,
            },
          ],
        },
        {
          productBl: [],
          _id: "647489ec4c49fa1e94525503",
          productId: "645e3aba2d073e0413c733f7",
          productCode: "IVEM5048-SOLAR INVERTER  IVEM5048",
          productCategory: "Inverter",
          productCapacity: "5k",
          productGrossWeight: 13.2,
          productNetWeight: 13,
          productPrice: 10,
          productQty: 250,
          productPalletQty: 0,
          productTotalNetWeight: 3250,
          productTotalGrossWeight: 3300,
          productTotalAmount: 2500,
          productWarehouses: [
            {
              _id: "647489ec4c49fa1e94525504",
              warehouse: "ags showroom",
              qty: 250,
            },
          ],
        },
        {
          productBl: [],
          _id: "647489ec4c49fa1e94525505",
          productId: "645e3af02d073e0413c733f9",
          productCode: "IVEM3024-SOLAR INVERTER  IVEM3024",
          productCategory: "Inverter",
          productCapacity: "3k",
          productGrossWeight: 10.8,
          productNetWeight: 10,
          productPrice: 33,
          productQty: 125,
          productPalletQty: 0,
          productTotalNetWeight: 1250,
          productTotalGrossWeight: 1350,
          productTotalAmount: 4125,
          productWarehouses: [
            {
              _id: "647489ec4c49fa1e94525506",
              warehouse: "azb",
              qty: 25,
            },
            {
              _id: "647489ec4c49fa1e94525507",
              warehouse: "our wh 2 (new)",
              qty: 100,
            },
          ],
        },
      ],
      truckBls: "KLOKOOOD4445 TKKFJWELKKLLR4443 OKVRLK343KFLRGL",
    },
  ],
  createdAt: "2023-05-29T11:18:04.021Z",
  updatedAt: "2023-05-29T11:18:04.021Z",
  pklNo: 70009,
  __v: 0,
};
const PackingListPdf = ({ pkl }) => {
  return (
    <div style={{ width: "100%" }}>
      <PDFViewer width="100%" height="1200" className="app">
        <Invoice pkl={pkl} />
      </PDFViewer>
    </div>
  );
};

export default PackingListPdf;
