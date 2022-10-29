import axios from 'axios';
import { configApi } from './configApi';
const { baseUrl, fileExtension } = configApi;

const API_STORIES = '/newstories';
const API_ITEM = '/item/'
export const getAllNewsId = async () => {
  try{
    let request = await axios(baseUrl + API_STORIES + fileExtension)
    let result = await request.data.slice(0,100)
    return result
  }catch(error){
    console.log(error);
  }
}

export const getItemById = async (id) => {
  try{
    let request = await axios(baseUrl + API_ITEM + id + fileExtension)
    let result = request.data
    if (!result) {
      console.log('Could not axios', result.status)
      return false
    }
    return result
  }catch(error){
    console.log(error);
  }
}

export const getCommentsById = async (id) => {
  try{
    let comments = Promise.all(id.map((item) => getItemById(item)));
    console.log(8888, comments);
    return comments;
  }catch(error){
    console.log(error);
  }
};

export const getAllItems = async () => {
  try{
    let request = await axios(baseUrl + API_STORIES + fileExtension)
    // const ad = setInterval(() => console.log(6666, request))
    let ids = await request.data.slice(0, 100)
    let arr = await Promise.all(ids.map(async (id) => {
      return await axios(baseUrl + API_ITEM + id + fileExtension)
    }))
    const res = arr.sort((a, b) => a-b )
    return res
  }catch(error){
    return error
  }
}
