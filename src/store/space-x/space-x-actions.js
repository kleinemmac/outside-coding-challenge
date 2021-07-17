import axios from "axios";
import { FETCH_ROCKETS_LAUNCHES_SUCCESS } from "./space-x-types";

export function fetchRocketsLaunchesSuccess(rockets, launches) {
  return {
    type: FETCH_ROCKETS_LAUNCHES_SUCCESS,
    rockets,
    launches
  };
}

export function fetchRocketsLaunches() {
  return (dispatch) => {
    return axios
      .post("https://api.spacex.land/graphql/query", {
        query: `{
          rockets {
            name
            success_rate_pct
            description
            cost_per_launch
          }
          launches {
            mission_name
            rocket {
              rocket_name
              rocket_type
            }
            launch_site {
              site_name_long
            }
            launch_date_utc
          }
        }`
      })
      .then((response) => {
        dispatch(
          fetchRocketsLaunchesSuccess(
            response.data.data.rockets,
            response.data.data.launches
          )
        );
        return Promise.resolve();
      })
      .catch((e) => {
        return Promise.reject(e);
      });
  };
}
