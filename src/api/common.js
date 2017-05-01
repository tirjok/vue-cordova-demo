import axios from 'axios'

export const getCompanyInfo = () => {
  return axios.get('api/v1/settings')
}

export const updateCompanyInfo = (data) => {
  data['_method'] = 'PUT'
  return axios.post('api/v1/settings/' + data.id, data)
}

export const saveSettings = (data) => {
  return axios.post('api/v1/settings', data)
}

export const getMyInfo = (data) => {
  return axios.get('api/v1/users/profile')
}

export const updateMyProfile = (data) => {
  data['_method'] = 'PUT'
  return axios.post('api/v1/users/profile', data)
}
