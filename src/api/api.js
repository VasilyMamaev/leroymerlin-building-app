import * as axios from 'axios'

const instance = axios.create({
  // withCredentials: true,
  baseURL: 'https://leroy-merlin-building-app.firebaseio.com/',
  // headers: {
  //   "API-KEY": 'AIzaSyC_Zw0CvpC480daLKZUr39t3XGHN_JiNks'
  // }
})

export const lastCalcsAPI = {
  postCalc (calc) {
    return instance.post('lastCalcs.json', {calc})
  },
  getLastCalcs () {
    return instance.get('lastCalcs.json?orderBy="$key"&limitToLast=20&print=pretty')
    .then(response => ({data: response.data, status: response.status}))
  }
}