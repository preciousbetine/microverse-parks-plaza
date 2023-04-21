import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import Styles from '../../assets/styles/activities.module.scss';
import { fetchActivities } from '../../redux/slices/activitySlice';
import ThemeSwitch from '../../components/ThemeSwitch';

function Activities() {
  const loading = useSelector((store) => store.activities.loading);
  const activities = useSelector((store) => store.activities.activities);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading && !activities.length) dispatch(fetchActivities());
  });

  return (
    <div className={Styles['activities-page']}>
      <header className={Styles.header}>
        <div>
          <i className="fa-solid fa-square-parking" />
          <h1>PARKS PLAZA</h1>
        </div>
        <ThemeSwitch />
      </header>
      <main>
        <section className={Styles.title}>
          <div className={Styles.bg}>
            {
              'AMERICA PARKS'.repeat(10)
            }
          </div>
          <div className={Styles['header-text']}>
            <h2>USA</h2>
            <p>
              {activities.length}
              {' '}
              activities
            </p>
          </div>
        </section>
        <section className={Styles.activities}>
          <h3>
            <i className="fa-regular fa-rectangle-list" />
            &nbsp;
            ALL ACTIVITIES
          </h3>
          {
            loading && (
              <div className={Styles.loader} />
            )
          }
          <ul>
            {
              !loading && (
                activities.map((activity) => (
                  <LinkContainer key={activity.id} to={`/parks/${activity.id}`}>
                    <li>
                      <span className={Styles['activity-bg']}>{activity.name.toUpperCase()[0]}</span>
                      <i className="fa-regular fa-circle-right" />
                      <span className={Styles['activity-name']}>{activity.name.toUpperCase()}</span>
                    </li>
                  </LinkContainer>
                ))
              )
            }
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Activities;
