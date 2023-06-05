import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import InvoiceTableHeader from "./InvoiceTableHeader";
import InvoiceTableRow from "./InvoiceTableRow";
import InvoiceTableBlankSpace from "./InvoiceTableBlankSpace";
import InvoiceTableFooter from "./InvoiceTableFooter";

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 3,
    borderWidth: 1,
    borderColor: "black",
  },
});

const InvoiceItemsTable = ({ truckItem, withPrice }) => {
  return (
    <View style={styles.tableContainer}>
      <InvoiceTableHeader truckItem={truckItem} withPrice={withPrice} />
      <InvoiceTableRow truckItem={truckItem} withPrice={withPrice} />
      <InvoiceTableFooter truckItem={truckItem} withPrice={withPrice} />
    </View>
  );
};

export default InvoiceItemsTable;
