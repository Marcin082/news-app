import React from 'react'
import { useDispatch } from 'react-redux'
import { Margins } from '../../App.styled'
import { getArticles } from '../../redux/Articles/ArticlesActions'
import { Wrapper, About, Nav, TopTopics, Logo, Links, NavLink, Globe, Head, Description, NavOption } from './Footer.styled'
const Footer = () => {
  const dispatch = useDispatch()
  return (
        <Margins>
            <Wrapper>
                <About>
                    <Logo>
                        <NavLink to="/"><Globe src={require('../../assets/world.png')} onClick={() => dispatch(getArticles(''))}/></NavLink>
                    </Logo>
                    <Description>
                    You can see all the latest news from all over the world here. In addition, information from the stock exchange and the currency market can also be found on our page.Thanks to us, the weather in your city will always be known.
                    </Description>
                </About>
                <Links>
                    <Nav>
                        <Head>Navigation</Head>
                        <NavLink to="/bussines"><NavOption onClick={() => dispatch(getArticles('&category=business'))}>Business</NavOption></NavLink>
                        <NavLink to="/entertainment"><NavOption onClick={() => dispatch(getArticles('&category=entertainment'))}>Entertainment</NavOption></NavLink>
                        <NavLink to="/general"><NavOption onClick={() => dispatch(getArticles('&category=general'))}>General</NavOption></NavLink>
                        <NavLink to="/sport"><NavOption onClick={() => dispatch(getArticles('&category=sport'))}>Sport</NavOption></NavLink>
                        <NavLink to="/health"><NavOption onClick={() => dispatch(getArticles('&category=health'))}>Health</NavOption></NavLink>
                        <NavLink to="/science"><NavOption onClick={() => dispatch(getArticles('&category=science'))}>Science</NavOption></NavLink>
                        <NavLink to="/technology"><NavOption onClick={() => dispatch(getArticles('&category=technology'))}>Technology</NavOption></NavLink>
                    </Nav>
                    <TopTopics>
                        <Head>Top Topics</Head>
                        <NavLink to={'/search=Ukraine'}><NavOption >Ukraine</NavOption></NavLink>
                        <NavLink to={'/search=Russia'}><NavOption >Russia</NavOption></NavLink>
                        <NavLink to={'/search=Biden'}><NavOption >Biden</NavOption></NavLink>
                        <NavLink to={'/search=Elon Musk'}><NavOption >Elon Musk</NavOption></NavLink>
                        <NavLink to={'/search=China'}><NavOption >China</NavOption></NavLink>
                        <NavLink to={'/search=NFL'}><NavOption >NFL</NavOption></NavLink>
                        <NavLink to={'/search=NBA'}><NavOption >NBA</NavOption></NavLink>
                    </TopTopics>
                </Links>

            </Wrapper>
        </Margins>
  )
}

export default Footer
