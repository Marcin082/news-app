/* eslint-disable no-unused-vars */
import { Article, Articles } from '../../types/types'

export enum ActionArticlesTypes {
  GET_ARTICLES = 'GET_ARTICLES',
  SET_ARTICLE = 'SET_ARTICLE',
  FETCH_ARTICLES_REQUEST='FETCH_ARTICLES_REQUEST',
  FETCH_ARTICLES_FAILURE='FETCH_ARTICLES_FAILURE'
}
interface Request {
  type: ActionArticlesTypes.FETCH_ARTICLES_REQUEST;
}
interface Error {
  type: ActionArticlesTypes.FETCH_ARTICLES_FAILURE;
  payload:string;
}
interface GettingArticles {
  type: ActionArticlesTypes.GET_ARTICLES;
  payload:Articles;
}
interface SettingArticle {
  type: ActionArticlesTypes.SET_ARTICLE;
  payload:Article;
}

export type articlesAction = GettingArticles|SettingArticle|Request|Error;
