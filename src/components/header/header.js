import React from "react";
import styles from "./header.module.scss";
import { useSelector } from "react-redux";

function Header() {
  const rockets = useSelector((state) => state.spaceX.rockets);
  const launches = useSelector((state) => state.spaceX.launches);
  const username = useSelector((state) => state.user.username);

  return (
    <div className={styles.headerWrapper}>
      <div>
        <p>Name: {username}</p>
      </div>
      <div>
        <p>Rockets: {rockets.length}</p>
      </div>
      <div>
        <p>Launches: {launches.length}</p>
      </div>
    </div>
  );
}

export default Header;
