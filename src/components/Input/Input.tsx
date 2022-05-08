import React,{useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getArticles } from '../../redux/Articles/ArticlesActions';
import { NavInput, SearchIcon,Wrapper } from './Input.styled';
type Props={
    setshowInput:any,
    searchWord:string,
    setSearchWord:any,
}
const Input:React.FC<Props> = ({setshowInput,searchWord,setSearchWord}:Props) => {
    
    const handleChildElementClick = (e:React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        if (searchWord) {
            setshowInput(true);
        }
      };
    return (
        <Wrapper>
            <NavInput 
            onClick={(e:React.MouseEvent<HTMLElement>)=>handleChildElementClick(e)} 
            type="text" 
            onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setSearchWord(e.target.value)}/>
            <Link to={'/search='+searchWord}><SearchIcon/></Link>
        </Wrapper>
        
    );
};

export default Input;