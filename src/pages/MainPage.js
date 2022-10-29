import React, { useEffect, useState } from 'react';
import Header from '../components/Header/header'
import News from '../components/News/news'
import axios from 'axios';
import Footer from '../components/Footer/footer'
import { getItemById, getAllNewsId, getAllItems, getCommentsById} from '../api/apiNews'
import { useDispatch, useSelector } from 'react-redux';
import { addNews } from '../store/store';


export const MainPage =  () => {
  const state = useSelector(state => state.news)
  const dispatch = useDispatch()
  const [animation, setAnimation] = useState(false)

  async function getI(){
    const data = await  getAllItems()
    dispatch(addNews(data))
  }
  useEffect(() => {
    getI()
  }, []);

  setInterval(() => getI(), 60000)

  function handleRefresh(){
    getI()
    setAnimation(true)
    setTimeout(() => setAnimation(false),3000)
  }
  // getCommentsById(state[0].data)
  return (
    <div className="container-main">
      <div>
        <Header />
        <div className="update">
          <button onClick={handleRefresh}>
            <img className={!state[99]||animation ? 'rotate': 'norotate'} src="/reload.png" alt="refresh"/>
          </button>
        </div>
      </div>
        {
          state.map((item) => (
            <News card={item} key={item.id}/>
          ))
        }
        <Footer />
    </div>
  )
}
export default MainPage
