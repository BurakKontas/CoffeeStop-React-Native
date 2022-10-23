import React from "react";
import { View, Text } from "react-native";
import QRCode from 'react-native-qrcode-svg';
import CryptoJS from "react-native-crypto-js";
import { QR_SECRET_KEY } from "@env";

export const QR = ({data}) => {
    var json = JSON.stringify(data)
    let ciphertext = CryptoJS.AES.encrypt(json, QR_SECRET_KEY).toString();
    // // Decrypt
    // let bytes  = CryptoJS.AES.decrypt(ciphertext, QR_SECRET_KEY);
    // let originalText = bytes.toString(CryptoJS.enc.Utf8);
    return (
    <QRCode
      value={ciphertext}
      logoSize={60}
      size={250}
    />
    )
}