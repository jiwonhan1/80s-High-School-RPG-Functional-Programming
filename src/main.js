import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { storeState, stateChanger, lily, blueFood, sunnyDay, enoughWater, rose } from './plant.js';

$(document).ready(function(){
  // $("form#plantNameForm").submit(function(event){
  //event.preventDefault();
  //   var plantName = $("#textInput").val();
  //   const plant = lily(blueFood("plantName"));
  //   $('#plant-name').text(`${plant.name}'s Values`);
  // });

  $('#lily').click(function() {
    event.preventDefault();
    $('#lily-value').show();
    $('#lily-feed').click(function() {
      const lilyValue = lily(blueFood());
      $('#lily-soil').text(lilyValue.soil);    
    });
    $('#lily-sunlight').click(function() {
      const lilyValue= lily(sunnyDay());
      $('#lily-sunlight').text(lilyValue.sunlight);
    });
    $('#lily-water').click(function() {
      const lilyValue= lily(enoughWater());
      $('#lily-water').text(lilyValue.water);
    });
    //$('#plant-value').hide();
  })

  $('#rose').click(function() {
    event.preventDefault();
    $('#rose-value').show();

    // $('#soil-value').text(0);
    // $('#sunlight-value').text(0);
    // $('#water-value').text(0);
    $('#feed').click(function() {
      const roseValue = rose(blueFood());
      $('#rose-soil').text(roseValue.soil);    
    });
    $('#sunlight').click(function() {
      const roseValue = rose(sunnyDay());
      $('#rose-sunlight').text(roseValue.sunlight);
    });
    $('#water').click(function() {
      const roseValue = rose(enoughWater());
      $('#rose-water').text(roseValue.water);
    });
    //$('#plant-value').hide();
  })
  
  // $('#feed').click(function() {
  //   const plant = stateChanger(blueFood());
  //   $('#soil-value').text(plant.soil);
    
  // });

  // $('#sunlight').click(function() {
  //   const newState = stateChanger(sunnyDay());
  //   $('#sunlight-value').text(newState.sunlight);
  // });

  // $('#water').click(function() {
  //   const newState = stateChanger(enoughWater());
  //   $('#soil-water').text(newState.water);
  // });
});