import React from 'react'
import { Wrapper, ArticleCard, ArticleImg, Title, Time, Info } from './Articles.styled'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../redux/rootReducer'
import { Article } from '../../../../types/types'
import Weather from '../Weather/Weather'
import { Link } from 'react-router-dom'
import { setArticle } from '../../../../redux/Articles/ArticlesActions'
type Props = {
    section:string
};
const Articles:React.FC<Props> = ({ section }:Props) => {
  const news = useSelector((state: RootState) => state.news)
  const { articles, loading } = news
  const dispatch = useDispatch()
  const IMGDEFURL = 'https://linda-hoang.com/wp-content/uploads/2014/10/img-placeholder-dark.jpg'
  const handleImgError = (e: any) => {
    e.target.src = IMGDEFURL
  }
  return (
        <Wrapper>
            {articles.slice((section === 'second' ? 14 : 4), (section === 'second' ? 23 : 9)).map((article:Article) => {
              const date:Date = new Date(article.publishedAt)
              const time = 'today, ' + date.getHours() + ':' + date.getSeconds()
              return (
                    <Link key={article.title} to={'/article/' + article.title} style={{ textDecoration: 'none' }} onClick={() => dispatch(setArticle(article)) }>
                        <ArticleCard >
                            {!loading
                              ? <>
                            <ArticleImg onError={(e: any) => handleImgError(e)} src={article.urlToImage ? article.urlToImage : IMGDEFURL} title={article.title}/>
                            <Info>
                            <Time>{time}</Time>
                                <Title>{article.title}</Title>
                            </Info>
                            </>
                              : <>
                            <ArticleImg src={IMGDEFURL} />
                            <Info>
                            <Time></Time>
                                <Title></Title>
                            </Info>
                            </>
                        }
                        </ArticleCard>
                    </Link>
              )
            })}
            {section === 'first' &&
            <ArticleCard>
               <Weather/>
            </ArticleCard>
            }
            {section === 'first' && articles.slice(9, 14).map((article:Article) => {
              const date:Date = new Date(article.publishedAt)
              const time = 'today, ' + date.getHours() + ':' + date.getSeconds()
              return (
                    <Link key={article.title} to={'/article/' + article.title} style={{ textDecoration: 'none' }} onClick={() => dispatch(setArticle(article)) }>
                    <ArticleCard>
                        <ArticleImg onError={(e: any) => handleImgError(e)} src={article.urlToImage ? article.urlToImage : IMGDEFURL} title={article.title}/>
                        <Info>
                           <Time>{time}</Time>
                            <Title>{article.title}</Title>
                        </Info>

                    </ArticleCard>
                    </Link>
              )
            })}
        </Wrapper>
  )
}

export default Articles
