export class App {
  configureRouter(config, router){
    config.title = 'Aurelia - SPA as it should be';
    config.map([
      { route: ['','welcome'],  name: 'welcome',      moduleId: 'welcome',      nav: true, title:'Welcome to Aurelia' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title:'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title:'Child Router' }
    ]);

    this.router = router;
  }
}
