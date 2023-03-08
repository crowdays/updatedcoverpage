import { Application } from "@hotwired/stimulus"
import "controllers"
import "will_paginate-bootstrap4"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }

$(function() {
  $('#show-more').click(function() {
    $.ajax({
      url: '/?page=' + ($('#show-more').data('page') + 1),
      type: 'get',
      dataType: 'script',
      success: function() {
        $('#show-more').data('page', ($('#show-more').data('page') + 1));
      }
    });
  });
});

