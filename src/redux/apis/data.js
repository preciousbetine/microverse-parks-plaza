import axios from 'axios';

const apiKey = '5ZWsVnK8X4PHyffv6Co1HbOPJTDi6sqaOwxH8goc';
const apiBase = 'https://developer.nps.gov/api/v1';
const endpoints = {
  allActivities: 'activities',
  allParks: 'activities/parks',
};

async function getActivities() {
  const response = await axios.get(`${apiBase}/${endpoints.allActivities}?api_key=${apiKey}`);
  return response.data.data;
}

async function getParks(activityId) {
  const response = await axios.get(`${apiBase}/${endpoints.allParks}?api_key=${apiKey}&id=${activityId}`);
  return response.data.data[0];
}

export {
  getActivities,
  getParks,
};
