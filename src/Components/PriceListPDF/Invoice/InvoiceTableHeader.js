import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "black";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderLeft: 1,
    borderRight: 1,
    borderColor: "black",
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    alignItems: "center",
    height: 24,
    textAlign: "center",
    fontStyle: "bold",
    flexGrow: 1,
  },
  no: { width: "5%", borderRightColor: borderColor, borderRightWidth: 1 },
  description: {
    width: "45%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },

  qty: {
    width: "15%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  price: {
    width: "20%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  image: {
    width: "30%",
  },
});

const InvoiceTableHeader = ({ currency }) => (
  <View style={styles.container}>
    <Text style={styles.no}>No</Text>
    <Text style={styles.description}>ITEMS</Text>
    <Text style={styles.price}>UNIT PRICE ({currency})</Text>
    <Text style={styles.image}>Image </Text>
  </View>
);

export default InvoiceTableHeader;
