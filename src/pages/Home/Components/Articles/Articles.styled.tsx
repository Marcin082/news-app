import styled from 'styled-components'
export const Wrapper = styled.div`
    display: grid;
    grid-template-columns:repeat(3,minmax(0,1fr) );
    gap:10px;
`
export const ArticleCard = styled.div`
   display:flex;
   flex-direction:column;
   gap:5px;
   max-width:600px;
   width:100%;
   height:60%;
   color:white;
   
   &:nth-child(6){
      grid-column-start:3;
   grid-column-end:3;
   grid-row-start:2;
   grid-row-end:4;
   &:hover{
      opacity:1;
      cursor:auto;
   }
   }
   &:hover{
      opacity:0.9;
      cursor:pointer;
   }

`
export const Info = styled.div`
   display:flex;
   flex-direction:column;
   text-align:left;
   gap:5px;
   width:100%;
`
export const ArticleImg = styled.img`
   width:100%;
   height: 100%;
   aspect-ratio: 16/9;
   object-fit:cover;
   border-radius:3px;
`
export const Time = styled.span`
   font-family:${({ theme: { fonts } }) => fonts.main};
   font-size:13px;
`
export const Title = styled.h3`
   padding:0;
   margin:0;
   font-family:${({ theme: { fonts } }) => fonts.heading};
   ${ArticleCard}:hover &{
      text-decoration:underline;
   }
`
