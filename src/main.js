import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { lily, blueFood, sunnyDay, enoughWater, rose } from './plant.js';

$(document).ready(function(){
  // $("form#plantNameForm").submit(function(event){
  //event.preventDefault();
  //   var plantName = $("#textInput").val();
  //   const plant = lily(blueFood("plantName"));
  //   $('#plant-name').text(`${plant.name}'s Values`);
  // });

  // $('#lily').click(function() {
  //   event.preventDefault();
  //   $('#lily-value').show();
    $('#lily-feed-btn').click(function() {
      const lilyValue = lily(blueFood());
      $('#lily-soil').text(lilyValue.soil);    
    });
    $('#lily-sunlight-btn').click(function() {
      const lilyValue= lily(sunnyDay());
      $('#lily-sunlight').text(lilyValue.sunlight);
    });
    $('#lily-water-btn').click(function() {
      const lilyValue= lily(enoughWater());
      $('#lily-water').text(lilyValue.water);
    });
    //$('#plant-value').hide();
  // })

  // $('#rose').click(function() {
  //   event.preventDefault();
  //   $('#rose-value').show();

    // $('#soil-value').text(0);
    // $('#sunlight-value').text(0);
    // $('#water-value').text(0);
    $('#rose-feed-btn').click(function() {
      const roseValue = rose(blueFood());
      $('#rose-soil').text(roseValue.soil);    
    });
    $('#rose-sunlight-btn').click(function() {
      const roseValue = rose(sunnyDay());
      $('#rose-sunlight').text(roseValue.sunlight);
    });
    $('#rose-water-btn').click(function() {
      const roseValue = rose(enoughWater());
      $('#rose-water').text(roseValue.water);
    });
    //$('#plant-value').hide();
  // })
});