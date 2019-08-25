document.querySelector('button').onclick = function () {
  document.querySelector('#switch').innerHTML = '678-756-6941';
}

// Git Hub Repos

function loadRepos() {
  $("#repos").empty();
  let url = "https://api.github.com/users/" +
          $("#username").val() + "/repos";
  $.ajax({
      url,
      success: displayRepos,
      error: displayError
  });
  function displayRepos(respos) {
      for (let repo of respos) {
          let link = $('<a>').text(repo.full_name);
          link.attr('href', repo.html_url);
          $("#repos").append($('<li>').append(link));
      }
  }

  function displayError(err) {
      $("#repos").append($("<li>Error</li>"));
  }
}
