import { createStore } from 'redux';

const defaultState = {
    isLoading: false,
    news: [],
    comments: [],
    cash: 0
  }

  export const addNews = (news) => ({
    type: 'ADD_NEWS',
    payload: news,
  });

  export const setLoading = (isLoading) => ({
    type: 'SET_LOADING',
    payload: isLoading,
  });

  export const reducer = (state = defaultState, action) => {
    switch(action.type){
      case 'ADD_NEWS':
        return {...state, news: action.payload};
      case 'SET_LOADING':
        return {
          ...state,
          isLoading: action.payload,
        };
      default:
        return state
    }
  }

export const store = createStore(reducer)
