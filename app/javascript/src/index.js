import $ from "jquery";

import { indexTasks, postTask, deleteTask, completeTask } from "./requests.js";

indexTasks(function (response) {
  var htmlString = response.tasks.map(function (task) {
    return (
      "<div class='col-12 d-flex mb-3 p-2 border rounded task' data-id='" +
      task.id +
      "' data-completed='" +
      (task.completed ? "checked" : "") +
      "'> \
      " +
      task.content +
      "\
      " +
      "<button class='col-2 delete'>Delete</button>" +
      "\
      " +
      "<input class='col-1 completed' type='checkbox'></input>" +
      "\
      </div>"
    );
  });

  console.log(htmlString);

  $("#tasks").html(htmlString);

  $("#post-task").on("submit", function (e) {
    e.preventDefault();
    postTask($("#input").val());
    location.reload();
  });

  $(document).on("click", ".delete", function () {
    deleteTask($(this).closest("div").data("id"));
    location.reload();
  });

  $(document).on("change", ".completed", function () {
    if (this.checked) {
      completeTask($(this).closest("div").data("id"));
    } else {
      console.log("reopened");
    }
  });
});
