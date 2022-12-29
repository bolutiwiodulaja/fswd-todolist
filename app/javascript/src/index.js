import $ from "jquery";

import { indexTasks, postTask } from "./requests.js";

indexTasks(function (response) {
  var htmlString = response.tasks.map(function (task) {
    return (
      "<div class='col-12 mb-3 d-flex p-2 border rounded task' data-id='" +
      task.id +
      "'> \
      " +
      "<div class='col-8'>task.content</div>" +
      "\
      " +
      "<div class='col-3'><button>Delete</button></div>" +
      "\
      " +
      "<div class='col-1'><input type='checkbox'></input></div>" +
      "\
      </div>"
    );
  });

  $("#tasks").html(htmlString);
});
