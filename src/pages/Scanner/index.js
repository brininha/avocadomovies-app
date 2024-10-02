import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  ActivityIndicator,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import styles from "./style";
import { API_URL } from "../../../config";

export default function Scanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [loading, setLoading] = useState(true);
  const [idIngresso, setIdIngresso] = useState(0);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
      setLoading(false);
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setIdIngresso(data);
    alert(`Ingresso foi escaneado com sucesso!`);
    fetch(`${API_URL}/usarIngresso/${idIngresso}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        statusIngresso: 1,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Sucesso na atualização:", data); 
      })
      .catch((error) => {
        console.error("Erro na atualização:", error);
      });
  };

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color="#0000ff"
        style={styles.loadingIndicator}
      />
    );
  }

  if (hasPermission === null) {
    return <Text>Requisitando permissão da câmera...</Text>;
  }

  if (hasPermission === false) {
    return <Text>Sem acesso à câmera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {!scanned && (
        <Text style={styles.text}>Escaneie o QR Code para ler o Ingresso</Text>
      )}
      {scanned && (
        <Button title={"Escanear de novo"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}
