import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from "react-spring";
import { Link } from "react-router-dom";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  let menu = "";
  let menuItems = [
    { to: "/", info: "Home" },
    { to: "/tweet", info: "Tweet" },
  ];

  const transitions = useTransition(showMenu, null, {
    from: { position: "absolute", transform: "translateX(-100%)", opacity: 1 },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0.5, transform: "translateX(-100%)" },
    config: { duration: 250 },
  });

  if (showMenu) {
    menu = (
      <nav className="menu">
        <div
          style={{
            textAlign: "center",
            fontSize: 16 + "px",
            padding: 2 + "em",
            backgroundColor: "rgb(204, 126, 126)",
          }}
        >
          Welcome to Reddit 2.0!
        </div>

        {menuItems.map((item) => (
          <Link to={item.to}> {item.info} </Link>
        ))}
      </nav>
    );
  }

  return (
    <div>
      <div style={{ fontSize: 30 + "px" }}>
        <FontAwesomeIcon
          icon={faBars}
          style={{ cursor: "pointer", userSelect: "none" }}
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>

      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              className="menu-container"
              config={{ duration: 50000 }}
              key={key}
              style={props}
            >
              {menu}
            </animated.div>
          )
      )}
    </div>
  );
}

export default Navigation;
