import Nav from './Nav';
import Link from 'next/link';
import styled from 'styled-components'
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart =()=>{
    console.log('onRouteChange Triggered')
}
Router.onRouteChangeComplete =()=>{
    console.log('onRouteComplete Triggered')
}
Router.onRouteChangeError =()=>{
    console.log('onRouteError Triggered')
}

const Logo = styled.h1`
font-size: 4rem;
margin-left: 2rem;
position: relative;
z-index: 2;
transform: skew(-7deg);
a{
    padding: 0.5rem 1 rem;
    background: ${props => props.theme.red};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
}
@media (max-width:1300px){
    marin: 0;
    text-align: center;
}
`
const StyledHeader = styled.header`
.bar{
    border-bottom: 10px solid ${props => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;

    @media (max-width: 1300px){
        grid-template-columns: 1fr;
        justify-content: center;
    }
}
.sub-bar{
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props=> props.theme.lightGrey}
}

`

 const Header = ()=>(

<StyledHeader>
<div>
        <div className="bar">
            <Logo>

            <Link href="/">
            <a>Jonah Wears</a>
            </Link>
           
            </Logo>
            <Nav />
        </div>
        <div className="sub-bar">
            <p>Search</p>
        </div>
        <div>Cart</div>

    </div>


</StyledHeader>
  
)
export default Header;