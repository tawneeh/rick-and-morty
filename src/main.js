import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CharacterService from './js/rick-service.js';

$(document).ready(function() {
  $('.btn-info').click(function() {

    const id = $('#id :selected').val();

    let promise = CharacterService.getCharacter();
    promise.then(function(response) {
      const body = JSON.parse(response);

      $('.show-name').text(`${body.results[id].name}`);
      $('.show-image').html(`<img src="${body.results[id].image}">`);

      $('.show-info').html(`<ul>Status: ${body.results[id].status}</ul> <ul>Species: ${body.results[id].species}</ul> <ul>Location: ${body.results[id].location.name}</ul> <ul>Number of Episodes: ${body.results[id].episode.length}</ul>`);

    },  function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});