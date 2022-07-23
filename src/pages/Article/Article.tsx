import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/rootReducer'
import { Wrapper, HeadTitle, Author, Time, Content, Url, Image } from './Article.styled'

const Article = () => {
  const article = useSelector((state: RootState) => state.news.article)
  const date = new Date(article.publishedAt)
  const date2 = date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate()
  return (
        <Wrapper>
            <HeadTitle>{article.title}</HeadTitle>
            <Author>by {article.author}</Author>
            <Time>{date2}</Time>
            <Image src={article.urlToImage}/>
            <Content>{article.content} See all <Url href={article.url}>there</Url></Content>
        </Wrapper>
  )
}

export default Article
