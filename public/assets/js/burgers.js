// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devourBurger").on("click", function(event) {
        console.log("you clicked the devour button!");
      var id = $(this).data("id");
      console.log("id is :"+id);
      var newDevouredState = {
          devoured: true
      };

      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed sleep to...");
          console.log(newDevouredState);
          // Reload the page to get the updated list
          location.reload();  //may need to add true as a parameter
        }
      );

    });

      $(".createBurgerForm").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          name: $("#newBurger").val().trim(),
          devoured: false
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
  /*    var newSleep = $(this).data("newsleep");
  
      var newSleepState = {
        sleepy: newSleep
      };
  
      // Send the PUT request.
      $.ajax("/api/cats/" + id, {
        type: "PUT",
        data: newSleepState
      }).then(
        function() {
          console.log("changed sleep to", newSleep);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    */
  /*
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newCat = {
        name: $("#ca").val().trim(),
        sleepy: $("[name=sleepy]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/cats", {
        type: "POST",
        data: newCat
      }).then(
        function() {
          console.log("created new cat");
          // Reload the page to get the updated list
          location.reload();
        }
      );
      */
    });

    
  });
  