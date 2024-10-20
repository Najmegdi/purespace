
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const links = [
    { id: 1, url: '/', text: 'home' },
    { id: 2, url: '/about', text: 'about' },
    { id: 3, url: '/products', text: 'products' },
    { id: 4, url: '/cart', text: 'cart' },
    { id: 5, url: '/checkout', text: 'checkout' },
];

const NavLinks = () => {
    const user = useSelector((state) => state.userState.user);
    return (
        <>
            {links.map((link) => {
                const { id, url, text } = link;
                if ((url === 'checkout') && !user) return null;
                return (
                    <li key={id} className="gap-4 py-[4px]">
                        <NavLink to={url} className='rounded-full text-lg capitalize px-4 py-0.5'>{text}</NavLink>
                    </li>
                )
            })}
        </>
    );
};

export default NavLinks;