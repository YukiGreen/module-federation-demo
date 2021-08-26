import Axios from 'axios';
import baseURL, { URLs } from './URLS';

const instance = Axios.create({
  baseURL,
  params: {},
});

const Search = (value) => instance.get(
  URLs.search,
  { params: { keywords: value } },
);
const getDragonBall = () => instance.get(
  URLs.dragonBall
);
const getBanner = () => instance.get(
  URLs.banner
);
const getPersonalized = (value) => instance.get(
  URLs.personalized,
  { params: { limit: value } },
);
const getDjHotList = (value) => instance.get(
  URLs.djHot,
  { params: { limit: value } },
);
const getSongUrl = (ids) => instance.get(
  URLs.songUrl,
  { params: { ids } },
);

export default {
  Search,
  getDragonBall,
  getBanner,
  getPersonalized,
  getDjHotList,
  getSongUrl,
};
