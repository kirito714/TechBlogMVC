const router = require("express").Router();

// <!-- Loop over each object in the projects array -->
{{#each projects as |project| }}
<div class="row mb-4 project">
  <div class="col-md-5">
    <h2>
      <!-- Call helper function with triple brackets to render the emoji span as HTML -->
      {{{get_emoji}}}
      <a href="/project/{{project.id}}">{{project.name}}</a>
    </h2>
    <p>
      <span for="img" aria-label="money">💲</span>
      <!-- Pass needed_funding value to the helper function -->
      <span class="dollar-amount">{{format_amount project.needed_funding}}</span>
      needed!
    </p>
    <p>Created by {{project.user.name}} on {{format_date project.date_created}}</p>
  </div>
  <div class="col-md-7">
    <p>
      {{project.description}}
    </p>
  </div>
</div>
{{/each}}


module.exports = router;