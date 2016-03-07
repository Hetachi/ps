define(['jquery', 'underscore', 'backbone', 'view/default'],
function ($, _, Backbone, DefaultView) {
  var SiteRouter = Backbone.Router.extend({
    routes: {
      '*other': 'defaultAction',
    }
  });

  var initialize = function () {
    var siteRouter = new SiteRouter();
    var defaultView = new DefaultView();
    siteRouter.on('route:defaultAction', function(){
      defaultView.render();
    });
    Backbone.history.start();
  };


  return {
    initialize: initialize
  };
});
