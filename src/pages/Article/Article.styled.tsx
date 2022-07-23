import styled from 'styled-components'
export const Wrapper = styled.div`
    display:flex;
    flex-direction:column ;
    font-family:${({ theme: { fonts } }) => fonts.heading};
    text-align:left;
    margin:30px 0;
    color:white;
`
export const HeadTitle = styled.h1`
    padding-bottom:0;
    margin-bottom: 0;
`
export const Author = styled.span`
    opacity:0.7;
    font-size:13px;
`
export const Time = styled.span`
    opacity:0.7;
    font-size:13px;
    margin-bottom: 20px;
`
export const Image = styled.img`
    width:90%;
`
export const Content = styled.p`
    font-size:20px;
    text-indent:20px;
    font-family:${({ theme: { fonts } }) => fonts.main};
`
export const Url = styled.a`

`
