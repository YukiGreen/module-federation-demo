import Axios from 'axios';
import baseURL, { URLs } from './URLS';

const instance = Axios.create({
  baseURL,
  params: {},
});

const getList = () => instance.get(
  URLs.list,
);

export default {
  getList
};
