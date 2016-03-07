define(['jquery', 'underscore', 'backbone', 'mustache', '/js/model/page.js', 'text!/templates/page.mustache'], function ($, _, Backbone, Mustache, PageModel, pageTemplate) {
  var DefaultView = Backbone.View.extend({
    el: $('.main--page--container'),
    data: {},

    initialize: function() {
      this.data = {
          content: {
          title: 'Tava pirmā slimnīca',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.t in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
      };
    },

    render: function(pageType){
      if (debug === "TRUE") {
        var debugtext = pageType + " page loaded";
        console.log(debugtext);
      }
      var compiledTemplate = Mustache.render( pageTemplate, this.data[pageType] );
      this.$el.html( compiledTemplate );

      var compiledHeadTemplate = Mustache.render( headTemplate, this.data2[pageType] );
      this.el2.html( compiledHeadTemplate );

      var compiledMenuTemplate = Mustache.render( menuTemplate, this.data3[pageType] );
      this.el3.html( compiledMenuTemplate );
    }
  });
  return DefaultView;
});
