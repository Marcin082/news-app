import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getArticles, setArticle } from '../../redux/Articles/ArticlesActions'
import { RootState } from '../../redux/rootReducer'
import { Article } from '../../types/types'
import { Wrapper, ArticleCard, Img, Title, KeyWord } from './SearchPage.styled'

const SearchPage = () => {
  const { word } = useParams()
  const news = useSelector((state: RootState) => state.news)
  const { articles, loading } = news
  const IMGDEFURL = 'https://linda-hoang.com/wp-content/uploads/2014/10/img-placeholder-dark.jpg'
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getArticles(`q=${word}`))
  }, [word])
  return (
        <Wrapper>
            <KeyWord>{word}</KeyWord>
            {articles.map((article:Article) => {
              return (
                    <ArticleCard key={article.title} to={'/article/' + article.title} onClick={() => dispatch(setArticle(article)) }>
                        {!loading
                          ? <>
                        <Img src={article.urlToImage}/>
                        <Title>{article.title}</Title>
                        </>
                          : <>
                        <Img src={IMGDEFURL}/>
                        <Title></Title>
                        </>
                        }
                    </ArticleCard>
              )
            })}
        </Wrapper>
  )
}

export default SearchPage
