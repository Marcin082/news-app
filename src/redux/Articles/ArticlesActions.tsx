import axios from 'axios'
import { Articles, Article } from '../../types/types'
import { ActionArticlesTypes } from './ArticlesTypes'

export const getArticles = (option:string) => {
  return function (dispatch: any) {
    dispatch(fetchArticlesRequest())
    axios
      .get<Articles>(
        !option.includes('q=')
          ? `https://newsapi.org/v2/top-headlines?country=us${option}&pageSize=30&apiKey=7929319b2de7410cb4b73874f4167a2e`
          : `https://newsapi.org/v2/everything?${option}&apiKey=7929319b2de7410cb4b73874f4167a2e`
      )
      .then((response) => {
        console.log(response.data)
        dispatch({
          type: ActionArticlesTypes.GET_ARTICLES,
          payload: response.data.articles
        })
      })
      .catch(error => {
        dispatch(fetchArticlesFailure(error.message))
      })
  }
}
export const setArticle = (article:Article) => {
  return {
    type: ActionArticlesTypes.SET_ARTICLE,
    payload: article
  }
}
export const fetchArticlesRequest = () => {
  return {
    type: ActionArticlesTypes.FETCH_ARTICLES_REQUEST
  }
}

export const fetchArticlesFailure = (error:string) => {
  return {
    type: ActionArticlesTypes.FETCH_ARTICLES_FAILURE,
    payload: error
  }
}
