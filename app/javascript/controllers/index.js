// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"

// Eager load all controllers defined in the import map under controllers/**/*_controller
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

$(document).on("turbolinks:load", function() {
    $("#load-more").click(function() {
      var last_id = $(".card").last().data("id");
  
      $.ajax({
        type: "GET",
        url: "/load_more",
        data: { last_id: last_id },
        dataType: "html",
        success: function(data) {
          $("#post-container").append(data);
        },
        error: function(xhr, status, error) {
          console.error(xhr);
        }
      });
    });
  });
  