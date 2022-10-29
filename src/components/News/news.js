import './news.css';
import React, { useState, useEffect } from 'react';
import moment from 'moment'
import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom';

const News = ({card}) => {
  const navigate = useNavigate();

  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <>
      <div className='card'>
        <Link to={`/choosenNews/${card.data.id}`}>{card.data.title}</Link>
          <div className='newDiv left'>
            <div className="newDiv-sm">
              <p className='text'> author: {card.data.by}</p>
              {/* moment(new Date(card.data.time * 1000)).fromNow() */}
              <p>{new Date(card.data.time*1000).toLocaleString() + ''}</p>
            </div>
            <p id='right'>rating: {card.data.score}</p>
          </div>
      </div>
    </>
    )
}


News.propTypes = {
  card: PropTypes.array.isRequired
}

export default News;
