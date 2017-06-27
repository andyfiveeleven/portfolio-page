'use strict';
var app = app || {};

page('/about', app.aboutController.init);

page('/projects', app.projectController.init);

page('/skills', app.skillsController.init);

page('/', app.homeController.init);

page();
