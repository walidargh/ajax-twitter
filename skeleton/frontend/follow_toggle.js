function FollowToggle (el) {
  this.$el = $(el);
  this.userId = this.$el.data("user-id");
  this.followState = this.$el.data("initial-follow-state") ? 'followed' : 'unfollowed';
  this.render();
  this.handleClick();
 }

FollowToggle.prototype.render = function() {
  if (this.followState === 'followed') {
    this.$el.text("Following");
    this.$el.prop("disabled", false);

  } else if (this.followState === 'unfollowed'){
    this.$el.text("Follow");
    this.$el.prop("disabled", false);
  }
};

FollowToggle.prototype.handleClick = function () {
  var self = this;
  this.$el.on("click", function(e) {
    e.preventDefault();
    var requestType = (self.followState === 'followed') ? 'DELETE' : 'POST';
    self.followState = (self.followState === 'unfollowed') ?  'following' : 'unfollowing';
    self.$el.prop("disabled", true);
    $.ajax({
      type: requestType,
      url: "/users/" + self.userId + "/follow",
      dataType: "json",
      success: function(data) {
        self.followState = (self.followState === 'following') ?  'followed' : 'unfollowed';
        self.render();
      }
    });
  });
};
module.exports = FollowToggle;
