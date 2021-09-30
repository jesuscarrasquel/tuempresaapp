import axios from 'axios';

import * as cons from './constants';

export async function sendEmail(formulario) {
    try {
        
        const res = await axios.post(cons.url_server, formulario);
        return res.data;
    } catch (error) {
        return error
    }
}