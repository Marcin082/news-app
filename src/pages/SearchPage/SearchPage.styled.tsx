import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
    color:white;
`
export const ArticleCard = styled(Link)`
    display:flex;
    gap:10px;
    text-decoration:none;
    color:white;
`
export const Img = styled.img`
    width:350px;
    height:200px;
    ${ArticleCard}:hover &{
        opacity:0.9;
    }
`
export const Title = styled.p`
    font-family:${({ theme: { fonts } }) => fonts.main};
    font-size:2vh;
    ${ArticleCard}:hover &{
        text-decoration:underline;
    }
`
export const KeyWord = styled.h2`
    &::before{
        content:'Search Result for ';
        font-weight:300;
    }
    font-size:27px;
    font-family:${({ theme: { fonts } }) => fonts.heading};
    text-align:left;
`
