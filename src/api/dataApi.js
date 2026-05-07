import axiosInstance from './axiosConfig'

export const getAll = async () => {
  try {
    const response = await axiosInstance.get('/posts')
    return response.data
  } catch (error) {
    throw new Error('Kunde inte hämta posts')
  }
}

export const getById = async (id) => {
  try {
    const response = await axiosInstance.get(`/posts/${id}`)
    return response.data
  } catch (error) {
    throw new Error('Kunde inte hämta post')
  }
}

export const create = async (data) => {
  try {
    const response = await axiosInstance.post('/posts', data)
    return response.data
  } catch (error) {
    throw new Error('Kunde inte skapa post')
  }
}

export const update = async (id, data) => {
  try {
    const response = await axiosInstance.put(`/posts/${id}`, data)
    return response.data
  } catch (error) {
    throw new Error('Kunde inte uppdatera post')
  }
}

export const deletePost = async (id) => {
  try {
    await axiosInstance.delete(`/posts/${id}`)
  } catch (error) {
    throw new Error('Kunde inte ta bort post')
  }
}