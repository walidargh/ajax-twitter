var FollowToggle = require ('./follow_toggle');
var UsersSearch = require('./users_search');

$(function () {
  var $followToggleButtons = $("button.follow-toggle");
  $followToggleButtons.each(function(idx, button) {
    new FollowToggle(button);
  });

  var $usersSearch = $("nav.users-search");
  $usersSearch.each(function(idx, searchBar) {
    new UsersSearch(searchBar);
  });

});
