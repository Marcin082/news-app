import styled from 'styled-components'
import { Link } from 'react-router-dom';


export const Wrapper = styled.div`
    display: grid;
    grid-template-columns:60% 40%;
    justify-items: center;
    margin-top:30px;
    row-gap:5px;
    column-gap:10px;
    background:${({ theme: { colors } }) => colors.dark};
    padding:20px;
    width:96%;
    position:relative;
    
`
export const ArticleLink = styled(Link)`
    text-decoration:none;
    display:flex;
    width:100%;
    height:100%;
    justify-self:center;
    align-self: center;
    &:hover{
        opacity:0.9;
    }
    &:first-child{
        color:white;
        width:100%;
        height:100%;
        font-size:13px;
        grid-column-start:1;
        grid-column-end:1;
        grid-row-start:1;
        grid-row-end:4;
    }
    &:nth-child(2){
        
        grid-column-start:2;
        grid-column-end:2;
        grid-row-start:1;
        grid-row-end:2;
    }
    &:nth-child(3){
        grid-column-start:2;
        grid-column-end:2;
        grid-row-start:2;
        grid-row-end:2;
    }
    &:nth-child(4){
        grid-column-start:2;
        grid-column-end:2;
        grid-row-start:3;
        grid-row-end:3;
    }
`


export const Description = styled.h1`   
    justify-self: center;
    width:100%;
    font-family:${({ theme: { fonts } }) => fonts.heading};
    font-weight:300;
    font-size:1.3vmax;
    color:white;
    letter-spacing:1px;
    text-shadow: 3px 2px 4px rgba(66, 68, 90, 1);
    text-align:left;
    flex:3;
    align-self: center;
    ${ArticleLink}:first-child &{
        font-size:29px;
        width:55%;
        color:white;
        position:absolute;
        bottom: 8px;
        left: 26px;
        font-weight:400;
    }
    ${ArticleLink}:hover &{
        text-decoration:underline;
    }
    @media screen and (min-width: 1500px) {
        font-size:15px;
    }
`

export const SideArticleImg = styled.img` 
    object-fit:cover ;
    flex:2;
    ${ArticleLink}:first-child &{ 
        width:100%;
        height:100%;
    }
    aspect-ratio: 16/9;
    width:50%;
    font-size:7px;
    color:white;
    background-color:white;
`

