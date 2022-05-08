import { Articles,Article } from "../../types/types"
import { ActionArticlesTypes, articlesAction } from "./ArticlesTypes"

const initialState = {
    articles:[],
    article:{},
    loading:false,
    error: '',
}
interface State{
  articles:Articles |any,
  article:Article|any,
  loading:boolean,
  error: string,
}
export const articlesReducer = (state:State = initialState, action:articlesAction):State => {
  switch (action.type) {
    case ActionArticlesTypes.FETCH_ARTICLES_REQUEST:
      return {
        ...state,
        loading: true
      }
    case ActionArticlesTypes.GET_ARTICLES:
      console.log(action.payload)
      return {
        ...state,
        loading:false,
        error:'',
        articles:action.payload
      }
    case ActionArticlesTypes.SET_ARTICLE:
      return {
        ...state,
        article:action.payload
      }
    case ActionArticlesTypes.FETCH_ARTICLES_FAILURE:
      return {
        loading: false,
        articles: [],
        article:{},
        error: action.payload,
      }
    default: return state
  }
}