import $ from 'jquery'
import './styles.css' 
// import {
//   storeState,
//   changeState,
//   battle,
//   brainLeveler,
//   sportLeveler,
//   coolLeveler,
//   vitalityLeveler,
//   checkInitialState,
//   leveler,
//   life,
// } from "../src/character-functional.js";
// import { jock, nerd, prep, beaten, leveler } from "../src/constants.js";

$(document).ready(function(){
  $('#start').click(function() {
    $('#choosePage').show();
    $('#introPage').hide();
    console.log('hi')
  })
})
