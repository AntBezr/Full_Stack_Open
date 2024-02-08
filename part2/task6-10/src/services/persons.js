import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
  const request = axios.get(baseUrl)
  return request
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log('fail', error);
    })
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject);
  return request
    .then(response => {
      response.data

    })
    .catch(error => {
      console.log('fail', error);
    })
}

const deletePerson = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request
    .then(response => {
      console.log('delete', response.data);
      response.data
    })
    .catch(error => {
      console.log('fail', error);
    })
}

export default { getAll, create, deletePerson }