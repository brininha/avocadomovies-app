import Constants from 'expo-constants';

const { manifest } = Constants;
const API_URL = manifest?.extra?.apiUrl || 'https://88a8-2804-7f0-b900-12f7-e158-e528-c382-81cc.ngrok-free.app/api';

export { API_URL };
