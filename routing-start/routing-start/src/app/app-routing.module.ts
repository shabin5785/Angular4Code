import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-gaurd.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactive-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver  } from './servers/server/server-resolver.service';

const appRoutes: Routes = [
    { path:'user', component:UsersComponent, children:[
      { path:':id/:name', component:UserComponent}
    ]},
   
    { path:'server', 
     // canActivate:[AuthGuard],//will block parent and child. below blocks only child
    canActivateChild:[AuthGuard],
     component:ServersComponent, children:[
      { path:':id/edit', component:EditServerComponent, canDeactivate:[CanDeactivateGuard]},
      { path:':id', component:ServerComponent, resolve:{ss: ServerResolver}}
    ]},
    { path:'', component:HomeComponent},
    // {path:'not-found', component:PageNotFoundComponent},//commented.. works fine. Below has static mesasge.
    {path:'not-found', component:ErrorPageComponent, data : { message: 'Page not found!'}},
    {path:'**', redirectTo:'/not-found'}
  ];

@NgModule({
    imports:[
        // RouterModule.forRoot(appRoutes, {useHash : true})
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})
export class AppRountingModule{

}