import React, { useEffect } from 'react';
import Articles from './Components/Articles/Articles';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../../redux/rootReducer';
import MainHeadlines from './Components/MainHeadlines/MainHeadlines';
import StockIndexes from './Components/StockIndexes/StockIndexes';
import { HomeWrapper } from './Home.styled';
import { getArticles } from '../../redux/Articles/ArticlesActions';
import { useParams } from 'react-router';

const Home = () => {
    const stocks = useSelector((state: RootState) => state.market.stocks?.quoteResponse?.result);
    const currencies = useSelector((state: RootState) => state.exchange.currencies?.quoteResponse?.result);
    const dispatch = useDispatch();
    let { option } = useParams();
    useEffect(()=>{
        dispatch(getArticles(option?'&category='+option:''))
    },[])
    
    return (
        <HomeWrapper>
            <MainHeadlines/>
            <StockIndexes data={stocks}/>
            <Articles section="first"/>
            <StockIndexes data={currencies}/>
            <Articles section="second"/>
        </HomeWrapper>
    );
};

export default Home; 