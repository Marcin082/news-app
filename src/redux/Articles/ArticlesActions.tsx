import axios from "axios";
import { Articles,Article } from "../../types/types";
import { ActionArticlesTypes } from "./ArticlesTypes";

export const getArticles = (option:String) => {
  return function (dispatch: any) {
    dispatch(fetchArticlesRequest())
    axios
      .get<Articles>(
        !option.includes('q=')?
        `https://newsapi.org/v2/top-headlines?country=us${option}&pageSize=30&apiKey=9fe21f158d6446568e1bf5c118ef7bc0`:
        `https://newsapi.org/v2/everything?${option}&apiKey=9fe21f158d6446568e1bf5c118ef7bc0`
        )
      .then((response) => {
        console.log(response.data)
        dispatch({
          type: ActionArticlesTypes.GET_ARTICLES,
          payload: response.data.articles,
        });
      })
      .catch(error => {
        dispatch(fetchArticlesFailure(error.message))
      })
  };
};
export const setArticle = (article:Article) => {
  return {
    type:ActionArticlesTypes.SET_ARTICLE,
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

