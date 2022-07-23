import styled, { keyframes } from 'styled-components'
export const scrolling = keyframes`
  0% { transform: translateX(0); }
    100% { transform: translateX(calc(-250px * 9))}
`
export const Overflow = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;
    margin: auto;
    height: 50px;
    place-items:center;
    
`
export const Wrapper = styled.div`
    display:flex;
    width: calc(250px * 18);
    height: 50px;
    animation: ${scrolling} 40s linear infinite;
    
`
export const IndexCard = styled.div`
    display:flex;
    align-items:center;
    color:white;
    font-family:${({ theme: { fonts } }) => fonts.main};
    width: 250px;
    height: 50px;
    gap:10px;
`
export const Names = styled.div`
    display:flex;
    flex-direction:column ;


`
export const Details = styled.div`
    display:flex;

    flex-direction:column ;
`
export const Symbol = styled.p`
    padding:0;
    margin:0;

`
export const Price = styled.p`
    padding:0;
    margin:0;


`
export const Name = styled.span`
    font-weight: 200;
    font-size: 13px;
    opacity:0.5;
`
export const Change = styled.span`
    font-size: 13px;
    color:${props => props.color};
`
