import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactive-guard.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit,CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService,
  private currRoute: ActivatedRoute, private router: Router) { }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean{
    if(!this.allowEdit){
      return true;
    }
    if((this.serverName !=this.server.name || this.serverStatus != this.server.status) && !this.changesSaved ){
      return confirm('Do you want to discard changes?');
    }
    else{
      return true;
    }
  }

  ngOnInit() {
    console.log(this.currRoute.snapshot.queryParams);
    console.log(this.currRoute.snapshot.fragment);
    this.currRoute.queryParams
      .subscribe(
        (params: Params) => {
          console.log("aa "+params['allow']);
          this.allowEdit = params['allow']==='1'?true: false;
        }
      );
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'],{relativeTo: this.currRoute});
  }

}
