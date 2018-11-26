FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render('App_body', {main: 'tmpl_home'});
  }
});

