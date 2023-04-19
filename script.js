$(document).ready(function(){
  $("#filterInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#iconTable td").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

function dismissSwb() {
  document.getElementById('sitewide-banner').style.display = "none";
}

function getFocus(){
  document.getElementById('filterInput').focus();
}

function getSearchURL(){
  const term = document.getElementById('filterInput').value;
  console.log(`https://washingtonpa.findhelp.com/search/text?term=${term}&postal=15301`);
}

function searchFindHelp(){
  const term = document.getElementById('filterInput').value;
  location.href = `https://washingtonpa.findhelp.com/search/text?term=${term}&postal=15301`;
}