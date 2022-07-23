import React, { useEffect, useState } from 'react'
import Navigation from './components/Navigation/Navigation'
import { RootState } from './redux/rootReducer'
import { useDispatch, useSelector } from 'react-redux'
import { getArticles } from './redux/Articles/ArticlesActions'
import Home from './pages/Home/Home'
import { getStocks } from './redux/Stocks/StocksActions'
import { getCurrencies } from './redux/Currency/CurrencyActions'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SearchPage from './pages/SearchPage/SearchPage'
import Article from './pages/Article/Article'
import Footer from './components/Footer/Footer'
import { GlobalStyle, Content, AppWrapper } from './App.styled'
function App () {
  const stocks = useSelector((state: RootState) => state.market)
  const [showInput, setshowInput] = useState<boolean>(false)
  const [searchWord, setSearchWord] = useState<string>('')
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getArticles(''))
    dispatch(getStocks())
    dispatch(getCurrencies())
  }, [])
  console.log(stocks)
  const onClickHandler = () => {
    if (!searchWord) {
      setshowInput(false)
    }
  }
  return (
    <AppWrapper onClick={() => onClickHandler()}>
      <GlobalStyle />
      <Router basename={process.env.PUBLIC_URL}>
    <Navigation setshowInput={setshowInput} showInput={showInput} searchWord={searchWord} setSearchWord={ setSearchWord} />
      <Content>
      <Routes>
        <Route path="/article/:title" element={<Article/>}></Route>
        <Route path="/:option" element={<Home/>}></Route>
         <Route path="/" element={<Home/>}></Route>
        <Route path="/search=:word" element={<SearchPage />}></Route>
      </Routes>
      </Content>
      <Footer/>
      </Router>
    </AppWrapper>
  )
}

export default App
