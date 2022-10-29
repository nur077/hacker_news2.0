import React, { useEffect, useState } from 'react';
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
import { getCommentsById, getItemById} from '../api/apiNews'
import ChoosenNews from '../components/News/choosenNews';


export const NewsPage =  () => {
  const [newState, setNewState] = useState({})
const [comment, setComment] = useState(null)
  useEffect(() => {
    async function getItemId () {
      const location = window.location.href.split('/')
      const id = +location[location.length - 1]
      const data = await getItemById(id)
      setNewState(data)
      return data
    }
    getItemId()
    async function getComments() {
      const location = window.location.href.split('/')
      const id = +location[location.length - 1]
      const data = await getItemById(id)
      console.log(3434, data);
      if(data.type === 'story'){
          if(data.kids){
            let arr = await getCommentsById(data.kids)
            setComment(arr)
          }
      }
    }
    getComments()
  }, []);
  // const er = setInterval(() => console.log(comment),2000)

  return (
    <div>
        <Header />
            <ChoosenNews card={newState} />
        <Footer />
    </div>
  )
}
export default NewsPage

