import React, { useState, useEffect } from 'react';
import { View, Dimensions, ActivityIndicator, Text } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import styles from './style';
import { API_URL } from '../../../config';

export default function Charts() {
    const screenWidth = Dimensions.get("window").width;
    const [generoData, setGeneroData] = useState([]);
    const [faixaEtariaData, setFaixaEtariaData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch filmes por gênero
    const fetchGeneroData = async () => {
        try {
            const response = await fetch(`${API_URL}/filmes/dados/generos`);
            const generos = await response.json();
            const formattedData = generos.map((genero, index) => ({
                name: `- ${genero.nomeGenero}`,
                population: genero.total,
                color: [
                    "#fbd789",
                    "#fbf089",
                    "#d3fb89",
                    "#98fb89",
                    "#89fbd5",
                    "#89cbfb",
                    "#8f89fb",
                ][index % 7],
                legendFontColor: "#333",
                legendFontSize: 15,
            }));
            setGeneroData(formattedData);
        } catch (error) {
            console.error("Erro ao buscar os dados de gêneros:", error);
        }
    };

    // Fetch filmes por faixa etária
    const fetchFaixaEtariaData = async () => {
        try {
            const response = await fetch(`${API_URL}/filmes/dados/faixas`);
            const faixaEtaria = await response.json();
            const formattedData = faixaEtaria.map((faixa, index) => ({
                name: `- ${faixa.faixaEtariaFilme}`,  // Apenas o nome da faixa etária
                population: faixa.total,  // O valor numérico que define a fatia
                color: [
                    "ghostwhite",
                    "springgreen",
                    "deepskyblue",
                    "yellow",
                    "orange",
                    "red",
                    "black",
                ][index % 7],
                legendFontColor: "#333",
                legendFontSize: 15,
            }));
            setFaixaEtariaData(formattedData);
        } catch (error) {
            console.error("Erro ao buscar os dados de faixa etária:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGeneroData();
        fetchFaixaEtariaData();
    }, []);

    return (
        <View style={[styles.container, { alignItems: 'center' }]}>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
                        Distribuição de Filmes por Gênero
                    </Text>
                    <PieChart
                        data={generoData}
                        width={screenWidth * 0.9}
                        height={250}
                        chartConfig={{
                            backgroundColor: "#ffffff",
                            backgroundGradientFrom: "#f0f0f0",
                            backgroundGradientTo: "#ffffff",
                            decimalPlaces: 0,
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            style: {
                                borderRadius: 16,
                            }
                        }}
                        accessor={"population"}
                        backgroundColor={"transparent"}
                        paddingLeft={"10"}
                        center={[0, 0]}
                        absolute
                    />

                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginTop: 20 }}>
                        Distribuição de Filmes por Faixa Etária
                    </Text>
                    <PieChart
                        data={faixaEtariaData}
                        width={screenWidth * 0.9}
                        height={250}
                        chartConfig={{
                            backgroundColor: "#ffffff",
                            backgroundGradientFrom: "#f0f0f0",
                            backgroundGradientTo: "#ffffff",
                            decimalPlaces: 0,
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            style: {
                                borderRadius: 16,
                            }
                        }}
                        accessor={"population"}
                        backgroundColor={"transparent"}
                        paddingLeft={"10"}
                        center={[0, 0]}
                        absolute
                    />
                </>
            )}
        </View>
    );
}
