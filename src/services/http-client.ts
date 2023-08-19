import axios from "axios";
import { API_BASE_URL } from 'constants/envs'

const api = axios.create({
  baseURL: API_BASE_URL,
});

async function Get<T>(endpoint: string) {
  const { data, status } = await api.get<T>(endpoint)

  return { data, status }
}

export const httpClient = {
  Get
}

export type HttpClientType = typeof httpClient
