import axios from 'axios';
import {API_URL} from '../configs/environment';

export async function http(method, endpoint, formData) {
	if (method === 'POST') {
		const response = await axios.post(`${API_URL}${endpoint}`, formData);
		const {data} = response;

		return data;
	}
}
