import React from 'react'
import { Wrapper, Description, SideArticleImg, ArticleLink } from './MainHeadlines.styled'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../redux/rootReducer'
import { Article } from '../../../../types/types'
import { setArticle } from '../../../../redux/Articles/ArticlesActions'

const MainHeadlines:React.FC = () => {
  const news = useSelector((state: RootState) => state.news)
  const { articles, loading } = news
  const dispatch = useDispatch()
  return (
        <Wrapper>
            {articles.slice(0, 4).map((article:Article) => {
              return (
                    <ArticleLink key={article.title} to={'/article/' + article.title} onClick={() => dispatch(setArticle(article)) }>
                        {!loading
                          ? <>
                        <Description>{article.title}</Description>
                        <SideArticleImg src={article.urlToImage} />
                        </>
                          : <>
                        <Description></Description>
                        <SideArticleImg src="https://linda-hoang.com/wp-content/uploads/2014/10/img-placeholder-dark.jpg"/>
                        </>}
                    </ArticleLink>
              )
            })}
        </Wrapper>
  )
}

export default MainHeadlines
