import $ from 'jquery';
import _ from 'lodash';


  // Add the first paragraph
  $('body').append($('<p>').text('Holberton Dashboard'));

  // Add the second paragraph
  $('body').append($('<p>').text('Dashboard data for the students'));

  // Add the button
  const button = $('<button>').text('Click here to get started');
  $('body').append(button);

  // Add the count paragraph
  $('body').append($('<p>').attr('id', 'count'));

  // Add the last paragraph
  $('body').append($('<p>').text('Copyright - Holberton School'));

  let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

// Bind the debounce function to the click event of the button
  button.on('click', _.debounce(updateCounter, 500));
