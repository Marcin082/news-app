import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { Margins } from '../../App.styled';
import { getArticles } from '../../redux/Articles/ArticlesActions';
import Input from '../Input/Input';
import { Globe,Content,NavLink, Logo,Menu,IconButton, NaviagtionWrapper, NavOption, SearchIcon, MenuIcon } from './Navigation.styled';
type Props ={
    showInput:Boolean,
    setshowInput:any,
    searchWord:string,
    setSearchWord:any,
}
const Navigation:React.FC<Props> = ({setshowInput,showInput,searchWord,setSearchWord}:Props) => {
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
    const dispatch = useDispatch();
    React.useEffect(() => {
        function handleResize() {
          setScreenWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
      });
    
    return (
        <Margins>
            <NaviagtionWrapper>
                <Logo>
                    <NavLink to="/"><Globe src={require('../../assets/world.png')} onClick={()=>dispatch(getArticles(''))}/></NavLink>
                </Logo>
                <Content>
                    {screenWidth>700&&<Menu>
                        <NavLink to="/bussines"><NavOption onClick={()=>dispatch(getArticles('&category=business'))}>Business</NavOption></NavLink>
                        <NavLink to="/entertainment"><NavOption onClick={()=>dispatch(getArticles('&category=entertainment'))}>Entertainment</NavOption></NavLink>
                        <NavLink to="/general"><NavOption onClick={()=>dispatch(getArticles('&category=general'))}>General</NavOption></NavLink>
                        <NavLink to="/sport"><NavOption onClick={()=>dispatch(getArticles('&category=sport'))}>Sport</NavOption></NavLink>
                    {(screenWidth>700||!showInput)&&<NavLink to="/health"><NavOption onClick={()=>dispatch(getArticles('&category=health'))}>Health</NavOption></NavLink>}
                    {(screenWidth>800||!showInput)&&<NavLink to="/science"><NavOption onClick={()=>dispatch(getArticles('&category=science'))}>Science</NavOption></NavLink>}
                    {(screenWidth>900||!showInput)&&<NavLink to="/technology"><NavOption onClick={()=>dispatch(getArticles('&category=technology'))}>Technology</NavOption></NavLink>}
                </Menu>}
                {(showInput||screenWidth<700)&&<Input setshowInput={setshowInput} searchWord={searchWord} setSearchWord={ setSearchWord}/>}
                {!showInput&&<IconButton onClick={(e:React.MouseEvent<HTMLElement>)=> {
                    e.stopPropagation() 
                    setshowInput(!showInput)
                    }}><SearchIcon /></IconButton>}
                {screenWidth<700&&<IconButton><MenuIcon/></IconButton>}
                </Content>
                
            </NaviagtionWrapper>
        </Margins>
    );
}; 

export default Navigation;