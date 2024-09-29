import React, { useRef, useEffect, useState } from "react";
import { Platform, StyleSheet, View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Device from 'expo-device';
import * as Location from 'expo-location';

export default function Locais() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Device.isDevice) {
        setErrorMsg(
          'Oops! O aplicativo não funciona no Snack com emulador. Acesse pelo seu dispositivo.'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permissão para acessar localização negada');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Aguardando...';
  if (errorMsg) {
    text = errorMsg;
  }

  const mapRef = useRef(null);

  // Coordenadas dos marcadores
  const markers = [
    location ? {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      title: "Sua localização",
      description: "Você está aqui",
      pinColor: "pink",
    } : null,
    {
      latitude: -23.552770148147246,
      longitude: -46.39961693397657,
      title: "Etec de Guaianazes",
      description: "Escola técnica estadual de Guaianazes.",
      pinColor: "pink",
    },
    {
      latitude: -23.55224909680388,
      longitude: -46.40518712055651,
      title: "Etec de Itaquera",
      description: "Escola técnica estadual de Itaquera",
      pinColor: "blue",
    },
    {
      latitude: -23.546587997864034,
      longitude: -46.40827272050799,
      title: "Etec de Tiradentes",
      description: "Escola técnica estadual de Cidade Tiradentes",
      pinColor: "purple",
    },
  ].filter(Boolean);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.fitToCoordinates(
        markers.map((marker) => ({
          latitude: marker.latitude,
          longitude: marker.longitude,
        })),
        {
          edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
          animated: true,
        }
      );
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: -23.552770148147246,
          longitude: -46.39961693397657,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.title}
            description={marker.description}
            pinColor={marker.pinColor}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
