import axios from 'axios'

import { URL_BASE_RANDOMUSER } from '@/constants/urlConstants'

export const getRandomuserPerPage = async()=>{
const {data}= await axios.get (URL_BASE_RANDOMUSER)
return data.results

}