import { Rarity, VirginCharacter } from "./VirginCharacter";

export default class GalliumFlow {
  static init(): Promise<string> {
    return new Promise<string>( (resolve,reject) => {
      // let test we can find the server
      let request : XMLHttpRequest = new XMLHttpRequest();
      request.onload = () => {
        resolve(request.response);
      }
      request.onerror = () => {
        reject("onerror");
      }
      request.timeout = 2000;
      request.ontimeout = () => {
        reject("ontimeout");
      }
      request.open('GET', "http://hornet.deanoc.com:3000/", true);
      request.send();
    })
  }

  static virginCharacters(): Promise<Array<VirginCharacter>> {
    return new Promise<Array<VirginCharacter>>((resolve, reject) => {
      let request: XMLHttpRequest = new XMLHttpRequest();
      request.onload = () => {
        resolve(JSON.parse(request.response));
      }
      request.onerror = () => {
        reject("onerror");
      }
      request.timeout = 2000;
      request.ontimeout = () => {
        reject("ontimeout");
      }

      request.open('GET', "http://hornet.deanoc.com:3000/virgin-characters", true);
      request.send();
    })
  }

  static virginCharacterCreate(json: string): Promise<VirginCharacter> {
    return new Promise<VirginCharacter>((resolve, reject) => {
      let request: XMLHttpRequest = new XMLHttpRequest();
      request.onload = () => {
        resolve(JSON.parse(request.response));
      }
      request.onerror = () => {
        reject("onerror");
      }
      request.timeout = 2000;
      request.ontimeout = () => {
        reject("ontimeout");
      }

      request.open('POST', "http://hornet.deanoc.com:3000/virgin-characters", true);
      request.setRequestHeader("Content-type", "application/json")
      request.send(json);
      console.log(json)
    })
  }

}
