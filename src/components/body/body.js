import React, { useState } from "react";
import styles from "./body.module.scss";
import { Button, Spinner } from "@storybook/design-system";
import { useDispatch, useSelector } from "react-redux";
import { fetchRocketsLaunches } from "../../store/space-x/space-x-actions";
import { setUsername } from "../../store/user/user-actions";

function Body() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [dataFetched, setDataFetched] = useState(false);

  const rockets = useSelector((state) => state.spaceX.rockets);
  const launches = useSelector((state) => state.spaceX.launches);
  const username = useSelector((state) => state.user.username);

  const fetchData = () => {
    setLoading(true);
    dispatch(fetchRocketsLaunches())
      .then(() => {
        setDataFetched(true);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const updateUsername = (e) => {
    dispatch(setUsername(e.target.value));
  };

  return (
    <div className={styles.bodyWrapper}>
      <div className={styles.nameField}>
        <label>
          Name:
          <input type="text" value={username} onChange={updateUsername} />
        </label>
      </div>
      {!dataFetched && (
        <Button
          appearance="secondaryOutline"
          onClick={fetchData}
          isDisabled={loading}
        >
          Fetch Rockets &amp; Launches
        </Button>
      )}
      {loading && <Spinner className={styles.spinner} />}
      {dataFetched && (
        <React.Fragment>
          <h2>Rockets</h2>
          <div className={styles.rockets}>
            {rockets.length === 0 && <p>No Rockets</p>}
            {rockets.map((rocket) => {
              return (
                <div key={rocket.name} className={styles.rocket}>
                  <h3>{rocket.name}</h3>
                  <p>{rocket.description}</p>
                  <p>Success Rate: {rocket.success_rate_pct}</p>
                  <p>Cost Per Launch: ${rocket.cost_per_launch}</p>
                </div>
              );
            })}
          </div>
          <h2>Launches</h2>
          <div className={styles.launches}>
            {launches.length === 0 && <p>No Launches</p>}
            {launches.map((launch) => {
              return (
                <div key={launch.mission_name} className={styles.launch}>
                  <h3>{launch.mission_name}</h3>
                  <p>Launch Date: {launch.launch_date_utc}</p>
                  <p>Rocket Name: {launch.rocket.rocket_name}</p>
                  <p>Rocket Type: {launch.rocket.rocket_type}</p>
                  <p>Site Name: {launch.launch_site.site_name_long}</p>
                </div>
              );
            })}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default Body;
