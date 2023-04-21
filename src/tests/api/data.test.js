import { getActivities, getParks } from '../../redux/apis/data';

describe('fetch all activities', () => {
  it('fetches all activities successfully', async () => {
    const activities = await getActivities();
    expect(activities).toHaveLength(40);
  });
});

describe('fetch parks for an activity', () => {
  it('fetches all parks for the first activity', async () => {
    const activities = await getActivities();

    const parks = await getParks(activities[0].id);
    expect(parks.parks.length).toBeGreaterThan(0);
  });

  it('fetches all parks for the second activity', async () => {
    const activities = await getActivities();

    const parks = await getParks(activities[1].id);
    expect(parks.parks.length).toBeGreaterThan(0);
  });

  it('fetches all parks for the fourteenth activity', async () => {
    const activities = await getActivities();

    const parks = await getParks(activities[13].id);
    expect(parks.parks.length).toBeGreaterThan(0);
  });
});
