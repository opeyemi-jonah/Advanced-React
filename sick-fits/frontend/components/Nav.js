import Link from 'next/link'
import NavStyles from './styles/NavStyles'

export const Nav =()=>(

    <NavStyles>
        <Link href="/items"><a>Items</a></Link>
        <Link href="/sell"><a>Sell</a></Link>
        <Link href="/sign-up"><a>Sign-up</a></Link>
        <Link href="/orders"><a>Orders</a></Link>
        <Link href="/me"><a>Account</a></Link>
    </NavStyles>

)

export default Nav