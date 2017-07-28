- Angular is a JS framework. It helps mainly to build single page applications.

**## Angular 1 vs 2 vs 4**
 angular 2 is a complete rewrite of angualr 1. Angular 4 is an update on angular 2, compatable with angular 2. From version 4, the name is just Angular
 
 - Angular CLI is a set of tools that helps with creating, managaing and building Angular projects. We can also avoid CLI and do the manual way of importing to html. But using CLI takes care of a lots of things for us.
 
 - @angular/cli. '@'  is a new feature of NPM called 'scoped packages'. They effectively allow NPM packages to be namespaced - any package that starts with @angular/ will get grouped into a @angular folder in your node_modules.
The reason that scoped packages don't show up in public search is because a lot of them are private packages created by organizations using NPM's paid services, and they're not comfortable opening the search up until they can be totally certain they're not going to make anything public that shouldn't be public - from a legal perspective, this is pretty understandable.

- ng new < app name> to create new app in angular cli
ng-serve to build and run the code. This command will covnert type script to JS, build and deploy it. Also start a development server.
e2e folder: End to end testing scripts

**### Typescript**
Its a super set to JS. Features like classes, interfaces, types etc. So we can have type of variable here instead of dynamic variables in js. So code gets checked in compile time and not at run time. CLI takes care of converting ts to js that browser can understand

- Behing the scene, CLI uses webpack to bring ts, js, css etc together. We can add our custom style to ang4 project, by changing the config file angular-cli.json. So to use bootstrap, we install it using npm and then add to the json style section

-CSS @import is relative to the current working directory.
So using the prefix ~ at the start of the path tells the Webpack loader to resolve the import "like a module".