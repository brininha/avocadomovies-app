import Constants from 'expo-constants';

const { manifest } = Constants;
const API_URL = manifest?.extra?.apiUrl || 'https://4c6d-2804-7f0-b900-12f7-f5b5-f839-6bca-5a1a.ngrok-free.app/api';

export { API_URL };
