import styled from 'styled-components'
import { ImSearch } from 'react-icons/im';
import { ImMenu } from 'react-icons/im';
import { Link } from 'react-router-dom';

export const NaviagtionWrapper = styled.header`
  display:flex;
  justify-content:space-between;
  background-color:${({ theme: { colors } }) => colors.dark};
  padding: 5px 0px;
  width:100%;
  align-items:center;
  margin:0;
`
export const NavOption = styled.div`
  color:white;
  font-family:${({ theme: { fonts } }) => fonts.main};
  font-size:20px;
  &:last-child {
    padding-right:20px;
  }
  &:hover {
    cursor: pointer;
    color:${({ theme: { colors } }) => colors.grey};
  }
`
export const Logo = styled.div`
  color:${({ theme: { colors } }) => colors.grey};
  display:flex;
  align-items:center;
`
export const Menu = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:9px;
  
`
export const Content = styled.div`
  display:flex;
  align-items:center;
`
export const Globe = styled.img`
  width:70px;
  padding: 0 20px;
  &:hover {
    cursor: pointer;
  }
`
export const SearchIcon = styled(ImSearch)`
  width:30px;
  height:50px;
  color:${({ theme: { colors } }) => colors.grey};
`
export const MenuIcon = styled(ImMenu)`
  width:30px;
  height:50px;
  color:${({ theme: { colors } }) => colors.grey};
`
export const IconButton = styled.button`
  background:transparent;
  outline:none;
  border:none;
  cursor:pointer;
`
export const NavLink = styled(Link)`
  text-decoration:none;
`
