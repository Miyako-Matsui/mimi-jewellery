import request from 'superagent'

export function getItems() {
  return request.get(`/api/v1/items`).then((res) => res.body)
}

export function getItem(id) {
  return request.get(`/api/v1/items/${id}`).then((res) => res.body || [])
}

export function getComments(id) {
  return request.get(`/api/v1/items/${id}/comments`).then((res) => res.body)
}
//ここのidはuseParamのitem_id
