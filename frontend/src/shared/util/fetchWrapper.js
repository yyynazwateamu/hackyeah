import axios from 'axios';

const BASE_URL = '';

const getAccessToken = () => {
  let JWT = JSON.parse(localStorage.getItem('JWT'));

  return JWT ? `JWT ${JWT}` : null;
};

export const fetchWrapper = {
  GET,
  POST,
  DELETE,
  PATCH,
  PUT,
};

function GET(URL, options = {}) {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: getAccessToken(),
      ...options.headers,
    },
    ...options,
  };
  return axios.get(`${BASE_URL}${URL}`, requestOptions);
}

function POST(URL, body = {}, options = {}) {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: getAccessToken(),
      ...options.headers,
    },
    ...options,
  };
  return axios.post(`${BASE_URL}${URL}`, body, requestOptions);
}

function DELETE(URL, options = {}) {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: getAccessToken(),
      ...options.headers,
    },
    ...options,
  };
  return axios.delete(`${BASE_URL}${URL}`, requestOptions);
}

function PATCH(URL, options = {}) {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: getAccessToken(),
      ...options.headers,
    },
    ...options,
  };
  return axios.patch(`${BASE_URL}${URL}`, requestOptions);
}

function PUT(URL, options = {}) {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: getAccessToken(),
      ...options.headers,
    },
    ...options,
  };
  return axios.put(`${BASE_URL}${URL}`, requestOptions);
}