export default class CharacterService {
  static getCharacter() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://rickandmortyapi.com/api/character`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}