import styled, { keyframes } from "styled-components";
import { WiDegrees } from 'react-icons/wi';

export const Wrapper = styled.div`
  background: hsla(214, 84%, 48%, 1);
    background: linear-gradient(270deg, hsla(214, 84%, 48%, 1) 0%, hsla(211, 100%, 77%, 1) 100%);
    background: -moz-linear-gradient(270deg, hsla(214, 84%, 48%, 1) 0%, hsla(211, 100%, 77%, 1) 100%);
    background: -webkit-linear-gradient(270deg, hsla(214, 84%, 48%, 1) 0%, hsla(211, 100%, 77%, 1) 100%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#136DE2", endColorstr="#8AC3FF", GradientType=1 );
    font-family:${({ theme: { fonts } }) => fonts.main};
    width:100%;
    padding:20px;
    -webkit-box-sizing: border-box;

`
export const LocationSearch = styled.input`
    border:none;
    outline:none;
    width:90%;
    height:30px;
    font-size:18px;
    padding-left:10px;
`
export const TodayDegree = styled.div`
    
    font-size:50px;
    text-align:center ;
    position:relative;
`
export const TodayDescription = styled.span`
    font-size:15px;
    font-family:${({ theme: { fonts } }) => fonts.interFont};
    font-weight:200;
`
export const City = styled.h2`
    font-family:${({ theme: { fonts } }) => fonts.interFont};
    font-size:28px;
    font-weight:300;
    color:white;
    padding:0;
    margin:0;
    margin-top:20px;
`
export const DayCard = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    text-align:left;
`
export const Details = styled.div`
    display:flex;
    align-items:center ;
    flex:3;
    justify-content:right;
`
export const DayName = styled.p`
    font-size:20px;
    flex:3;
    font-weight:300;
`
export const Degree = styled.div`
    display:flex;
    align-items:center;

`

export const Value = styled.span`
    font-size:20px;
    transform:translateX(20px);
`
export const FahrenheitIcon = styled(WiDegrees)`
    &:first-child{
        font-Size:90px;
        position:absolute;
        transform:translate(-35px,-5px);
    }
    transform:translateY(3px);
    font-Size:50px;
`
export const WeatherDraw = styled.img`
width:50px;
`
