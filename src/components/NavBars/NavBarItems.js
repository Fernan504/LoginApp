function NavBarItems ({label, uri}){
    return(
        <li className="hover:bg-indigo-600"><a alt={label} href={uri}> {label} </a></li>
    );
}

export default NavBarItems;