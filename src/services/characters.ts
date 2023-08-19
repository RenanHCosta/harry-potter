import { HttpClientType } from "./http-client";

export class CharactersService {
  constructor (private baseEndpoint: string, private httpClient: HttpClientType) {}

  findAll() {
    return this.httpClient.Get(this.baseEndpoint)
  }

  findOne(id: string) {
    const endpoint = `${this.baseEndpoint.slice(0, -1)}/${id}`
    return this.httpClient.Get(endpoint)
  }
}
