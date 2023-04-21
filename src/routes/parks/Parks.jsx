import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Styles from '../../assets/styles/parks.module.scss';
import { fetchParks } from '../../redux/slices/parkSlice';
import ThemeSwitch from '../../components/ThemeSwitch';

function Parks() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const parks = useSelector((store) => store.parks.parks);
  const loading = !(useSelector((store) => store.parks.fetched));

  const activityId = location.pathname.split('/').slice(-1)[0];

  useEffect(() => {
    const park = parks.find((park) => park.id === activityId);
    if (!park) {
      dispatch(fetchParks(activityId));
    }
  });

  return (
    <div className={Styles['parks-page']}>
      <header className={Styles.header}>
        <div>
          <button type="button" onClick={() => navigate('/')}>
            <i className="fa fa-chevron-left" />
          </button>
          <h1>PARKS PLAZA</h1>
        </div>
        <ThemeSwitch />
      </header>
      <main>
        <section>
          {
            loading && (
              <div className={Styles['loader-container']}>
                <div className={Styles.loader} />
              </div>
            )
          }
          {
            !loading && (
              <div className={Styles.title}>
                <span className={Styles['activity-name']}>
                  {`${parks.find((park) => park.id === activityId)?.name.toUpperCase()} `.repeat(20)}
                </span>
                <h2>
                  <i className="fa-solid fa-person-running" />
                  &nbsp;
                  {parks.find((park) => park.id === activityId)?.name.toUpperCase()}
                </h2>
                <p>
                  {parks.find((park) => park.id === activityId)?.parks.length}
                  {' '}
                  parks
                </p>
              </div>
            )
            }
        </section>
        <section className={Styles.parks}>
          <h3>
            <i className="fa-regular fa-rectangle-list" />
            &nbsp;
            ALL PARK LOCATIONS
          </h3>
          {
            loading && (
              <div className={Styles.loader} />
            )
          }
          <ul>
            {
              !loading && (
                parks.find((park) => park.id === activityId)?.parks.map((park) => (
                  <li key={park.parkCode}>
                    <div>
                      <div className={Styles['park-name']}>{park.name.toUpperCase()}</div>
                      <div className={Styles['park-location']}>{park.states.split(',')[0]}</div>
                    </div>
                    <div>
                      <a href={park.url} target="_blank" rel="noreferrer">
                        <i className="fa fa-circle-arrow-right" />
                      </a>
                    </div>
                  </li>
                ))
              )
            }
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Parks;
