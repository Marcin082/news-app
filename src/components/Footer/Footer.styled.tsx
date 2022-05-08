import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.footer`
    background-color:${({ theme: { colors } }) => colors.dark};
    display:flex;
    padding: 10px 60px;
    align-items:center ;
    font-family:${({ theme: { fonts } }) => fonts.interFont};
    color:white;
    opacity:0.8;
    justify-content:space-between ;
    margin-top:30px;
`
export const About = styled.section`
    display:flex;
    align-items:center;
    gap:30px;
    width:40%;
`
export const Links = styled.section`
    display:flex;
    align-items:center;
    gap:100px;
`

export const Nav = styled.ul`
    display: flex;
    flex-direction:column;
    gap:5px;
`
export const TopTopics = styled.ul`
    display: flex;
    flex-direction:column;
    gap:5px;
`
export const Logo = styled.div`

`
export const NavLink = styled(Link)`
    text-decoration:none;
`
export const NavOption = styled.li`
    font-size:12px;
    color:white;
    opacity:0.6;
    list-style:none;
`
export const Description = styled.div`
    width:80%;
    font-size:14px;
`

export const Globe = styled.img`
    width:100px;
`
export const Head = styled.h2`
    margin:0;
    padding:0;
    font-size:14px;
`
