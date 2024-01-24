import style from './NavbarComponent.module.css';


const NavbarComponent = () => {
    return <>
    <body className='body'>
    <nav className={style.navbar}>
         <div className={style.logo}>
            <h2><img src="./image/logo2.png" alt='logo' className='imgLogo' style={{width: "100px", height: "50px" }} /></h2>
        </div>
        <ul className={style.value}>
            <li>
                <a href='#' className='navLink' style={{color:"white"}}>Home</a>
            </li>
            <li>
                <a href='#' className='navLink'>Contact</a>
            </li>
            <li>
                <a href='#' className='navLink'>About</a>
            </li>
            <li>
                <a href='#'className='navLink'>Sign In</a>
            </li>
        </ul>
    </nav>
    <ul className={style.categories}>
        <li>Man</li>
        <li>Woman</li>
        <li>Kid</li>
        <li>On Sale!</li>
    </ul>
    
    </body>
    </>
};

export default NavbarComponent