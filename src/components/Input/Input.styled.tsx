import styled from 'styled-components'
import { ImSearch } from 'react-icons/im'
export const Wrapper = styled.div`
  display:flex;
  align-items:center;
  
`
export const NavInput = styled.input`
  width:100%;
  height:35px;
  border:none;
  outline:none;
  font-weight:400;
  font-family:${({ theme: { fonts } }) => fonts.interFont};
  background-color:#0c0c0c;
  margin-left:10px;
  font-size:17px;
  color:white;
  transition:all 2s ease;
  display:flex;
  flex:3;
  padding-left:7px;
`
export const SearchIcon = styled(ImSearch)`
  width:30px;
  height:25px;
  padding:6px;
  background-color:#0c0c0c;
  color:white;
  opacity:0.5;
  transform:translateY(2px);
  &:hover{
    transition: opacity 0.5s ease ;
    cursor: pointer;
    opacity:0.8;
  }
`
