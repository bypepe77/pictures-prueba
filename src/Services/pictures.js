import axios from 'axios';
import { credentials } from '../config';

export const getPictures = async ( tags = "sunset" ) => {
    
console.log("API_KEY: " + credentials.API_KEY );
    const data = await axios.get(`https://api.flickr.com/services/rest/?format=json&api_key=${ credentials.API_KEY }&method=flickr.photos.search&sort=relevance&nojsoncallback=1&per_page=50&media=photos&extras=url_l&tags=${ tags }&tag_mode=all&place_id=&min_date_taken=2022-01-01&min_date_upload=2022-08-01`);
    if(data.data) return data.data.photos.photo;
    else return { error: 'No data' };
}