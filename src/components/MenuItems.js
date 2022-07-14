import Dropdown from "./Dropdown";
import { useState } from "react";

const MenuItems = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <li className="menu-items">
            {items.submenu ? (
                <>
                    <button type="button" aria-haspopup="menu" onClick={() => setDropdown((prev) => !prev)}>
                        {items.title}{" "}
                        {depthLevel > 0 ? <span></span> : <span className="arrow" />}
                    </button>
                    <Dropdown submenus={items.submenu} depthLevel={depthLevel} dropdown={dropdown} />
                </>
            ) : (
                <a href="/#">{items.title}</a>
            )}
        </li>
    );
};

export default MenuItems;
