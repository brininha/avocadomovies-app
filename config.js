import Constants from 'expo-constants';

const { manifest } = Constants;
const API_URL = manifest?.extra?.apiUrl || 'https://2cab-2804-7f0-b900-12f7-c018-1dd0-5585-eb89.ngrok-free.app/api';

export { API_URL };
