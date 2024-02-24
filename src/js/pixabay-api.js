import axios from "axios";
import { value } from '../main.js';

const searchValue = document.getElementById('search').value;


export async function getPhotoBySearch(searchValue) {
    try {
        const KEY = '42424645-ecd3f1048329df1dec069e6a8';
        const response = await axios.get('https://pixabay.com/api/', {
            params: {
                key: KEY,
                q: searchValue,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: 'true',
                page: '1',
                per_page: '15'
            }
        });

        if (response.data.total === 0) {
            throw new Error('No images found');
        }

      return response.data;
    } catch (error) {
        throw error; 
    }
}

let page = 1;
let perPage = 15;


export async function fetchMoreImages(value) {
    try {
        const params = new URLSearchParams({
            key: '42424645-ecd3f1048329df1dec069e6a8',
            q: searchValue,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: 'true',
            _limit: perPage,
            _page: page
        });

      const response = await axios.get(
            `https://pixabay.com/api/?${params}`
        );
        if (response.data.total === 0) {
            throw new Error('No images found');
        }

        return response.data;
    } catch (error) {
        throw error;
    }
}
