if(Meteor.isClient) {

Template.redirect.onRendered( function () {
var linkTarget = $(".search").text();
console.log(linkTarget);
window.location =  "http://" + linkTarget;
});

}