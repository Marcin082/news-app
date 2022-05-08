import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
export const AppWrapper = styled.div`
    text-align: center;
    width:100%;
`
export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;;
    margin:0;
    background-color:black;
    width:100%;
  }
`
export const Content = styled.div`
    @media screen and (min-width: 1500px) {
        margin:0 300px;
    }
`
export const Margins = styled.div`
    background-color:${({ theme: { colors } }) => colors.dark};
    @media screen and (min-width: 1500px) {
        padding:0 300px;
    }
`