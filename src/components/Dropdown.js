const Dropdown = ({ submenus, dropdown }) => {
    return (
        <ul className={`dropdown ${dropdown ? "show" : ""}`}>
            {submenus.map((submenu, index) => (
                <li key={index} className="menu-items">
                    <a href="/#" className={`${submenu.icon ? "icon" : console.log("elo")}`}>
                        {/* {submenu.icon ? console.log(submenu.icon) : console.log()} */}
                        <img src={submenu.icon}></img> {submenu.title}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Dropdown;

// className={`${submenus.icon === undefined ? "" : "icon"}`}