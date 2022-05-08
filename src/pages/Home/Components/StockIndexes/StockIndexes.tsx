import React,{useState,Component } from 'react';
import { Overflow,Wrapper,IndexCard,Names,Details,Name,Symbol,Price ,Change} from './StockIndexes.styled';
import { Stock } from '../../../../types/types';
type Props = {
    data:Stock[]
};
const StockIndexes:React.FC<Props> = ({data}:Props) => {
   
    return (
        <Overflow>
            <Wrapper>
                {data?.map((stock:Stock)=>{
                    return(
                        <IndexCard>
                            <Names>{stock.quoteType!=="CURRENCY"?
                            <>
                                <Symbol>{stock.symbol}</Symbol>
                                <Name>{stock.shortName}</Name>
                            </>:
                            <>
                            <Symbol>{stock.shortName}</Symbol>
                            </>
                                }
                            </Names>
                            <Details>
                                <Price>{Math.round(stock.ask * 100) / 100}</Price>
                                <Change color={stock.regularMarketChangePercent>0?'green':'red'}>{stock.regularMarketChangePercent>0?"+"+(Math.round(stock.regularMarketChangePercent * 100) / 100):(Math.round(stock.regularMarketChangePercent * 100) / 100)}%</Change>
                            </Details>
                        </IndexCard>    
                    )
                })}
                {data?.map((stock:Stock)=>{
                    return(
                        <IndexCard> 
                           <Names>{stock.quoteType!=="CURRENCY"?
                            <>
                                <Symbol>{stock.symbol}</Symbol>
                                <Name>{stock.shortName}</Name>
                            </>:
                            <>
                            <Symbol>{stock.shortName}</Symbol>
                            </>
                                }
                            </Names>
                            <Details>
                                <Price>{Math.round(stock.ask * 100) / 100}</Price>
                                <Change color={stock.regularMarketChangePercent>0?'green':'red'}>{Math.round(stock.regularMarketChangePercent * 100) / 100}</Change>
                            </Details>
                        </IndexCard>
                    )
                })}
            </Wrapper>
        </Overflow>
    );
};

export default StockIndexes;