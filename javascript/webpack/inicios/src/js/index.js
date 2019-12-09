import personas from './other.js';
import $ from 'jquery';

require('../css/bootstrap.min.css');
require('../css/style.css');


$.each(personas, (key, value)=>{
    $('#main').append("<h2>"+personas[key].name+"</h2>");
});