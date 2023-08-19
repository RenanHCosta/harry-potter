import { CHARACTERS } from "constants/endpoints";
import { CharactersService } from "./characters";
import { httpClient, HttpClientType } from "./http-client";

class ApiService {
  constructor(private httpClient: HttpClientType) {}
  
  get characters() {
    return new CharactersService(CHARACTERS, this.httpClient)
  }
}

export default new ApiService(httpClient)