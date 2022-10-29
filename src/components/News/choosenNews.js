import './news.css';
import cn from 'classnames';
import React, { useState, useEffect } from 'react';
import { getItemById, getAllNewsId} from '../../api/apiNews'
import configApi from '../../api/configApi'
import moment from 'moment'
import PropTypes from 'prop-types'
import { Link, useNavigate, useHistory } from 'react-router-dom';

export const ChoosenNews = ({card}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="right_back">
        <button onClick={() => navigate(-1)}>
          <img src="/back.png"/>
        </button>
      </div>
      <div className='card-news'>
        <p className='black'>{card.title}</p>
          <div className='newDiv left'>
            <div className="newDiv-sm">
              <p className={cn("text", "grey")}> author: {card.by}</p>
              <p>{moment(new Date(card.time * 1000)).fromNow()}</p>
            </div>
            <p id='right'>rating: {card.score}</p>
          </div>
          <div className='center'>
            <a href={card.url}>{card.url}</a>
          </div>
          <div className="left comment_icon">
            <img class="adlet" width={25} src="/comment.png" align="left"/>
            <span>{card.descendants}</span>
          </div>
          {card.text}
      </div>
    </>
    )
}

export default ChoosenNews;
