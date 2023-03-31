import {Link, link} from 'react-router-dom'

import styles from './Header.module.css'


function Header() {



    return (
        <header classname={style.header}>    
        <h1>Pokémon</h1>
        <nav className={style.menu}>

            <ul>
                <li> <Link></Link></li>
                <li>Pokemon</li>
            </ul>



        </nav>


        </header>
    )



}


export default Header