function UsersSearch (el) {
  this.$el = $(el);
  this.input = this.$el.find(".query").val();
  this.users = this.$el.children(".users");
  this.handleInput();
  $(this.$el.find(".query")).focus();
}

UsersSearch.prototype.handleInput = function () {
  var self = this;
  this.$el.children().children(".query").on("keyup", function (e) {
    self.input = self.$el.children().children(".query").val();
    $.ajax({
      type: 'GET',
      url: "/users/search",
      data: {query: self.input},
      dataType: "json",
      success: function(matchedUsers) {
        self.renderResults(matchedUsers);
      }
    });
  });
};

UsersSearch.prototype.renderResults = function (matchedUsers) {
  this.users.empty();
  var self = this;
  matchedUsers.forEach(function(matchedUser) {
    var user = $("<li>").append("<a href=/users/" + matchedUser.id + ">"+ matchedUser.username  + "</a>");
    self.users.append(user);
  });
};

module.exports = UsersSearch;
