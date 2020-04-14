import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { storeState, stateChanger, blueFood, sunnyDay, enoughWater } from './plant.js';

$(document).ready(function(){
  
  $("form#plantNameForm").submit(function(event){
    event.preventDefault();
    var plantName = $("#textInput").val();
    const plant = storeState(plantName);
    const newState = plant(blueFood);
    $('#plant-name').text(`${newState.name}'s Values`);

  });
  
  $('#feed').click(function() {
    const newState = stateChanger(blueFood);
    $('#soil-value').text(newState.soil);
    
  });


  $('#sunlight').click(function() {
    const newState = stateChanger(sunnyDay);
    $('#sunlight-value').text(newState.sunlight);
  });

  $('#water').click(function() {
    const newState = stateChanger(enoughWater);
    $('#soil-water').text(newState.water);
  });
});