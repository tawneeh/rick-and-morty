import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CharacterService from './js/rick-service.js';

$(document).ready(function() {
  $('#characterInfo').click(function() {

    let promise = CharacterService.getCharacter();
    promise.then(function(response) {
      const body = JSON.parse(response);
      console.log(`${body.results[0].name}`);
      $('.show-character').text(`${body.results[0].name}`);
      console.log(`${body.results[0].name}`);
      // this is where I specify what part of the API call response to show
      // probably a .val not .text 
    },  function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});