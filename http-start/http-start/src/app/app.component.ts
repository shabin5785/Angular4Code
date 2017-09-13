import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  appname  = this.serverService.getAppName();

  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];

  constructor(private serverService : ServersService){}

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }

  onSaveServer(){
    this.serverService.storeServers(this.servers)
      .subscribe(
        (response : Response) => {
          console.log(response)
        },
        (error) => {
          console.log(error);
        }
      );
  }

  onGetServer(){
    this.serverService.getServers()
    .subscribe(
      (servers : any[]) => {
        console.log(servers);
        this.servers = servers;
        // const data = response.json(); //moved to service for reusability
        // console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }


}
