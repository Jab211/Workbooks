"use strict";

// let partCode = {
//   supplierCode: "itismine",
//   productNumber: "02101001",
//   size: "2x4",
// };

function parsePartCode(partCode) {
  let supplierCode = getSupplierCode(partCode);
  let productNumber = getProductNumber(partCode);
  let size = getSize(partCode);
  let partCodeObject = {
    supplierCode: supplierCode,
    productNumber: productNumber,
    size: size,
  };
}
return partCodeObject;
const supplierCode = "itismine";
const productNumber = "02101001";
const size = "2x4";
// parsePartCode(part1);
// console.log(
//   "Supplier: " +
//     partCode.supplierCode +
//     " Product Number: " +
//     partCode.productNumber +
//     " Size: " +
//     partCode.size
// );
let retunedObject = parsePartCode(supplierCode);
console.log(retunedObject);