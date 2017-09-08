import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
  private router: Router, private currentRoute : ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload(){
    //below one wont work. we are in servers, and relative to server, loading server
    //again. Fix if needed.
    // this.router.navigate(['servers'], {relativeTo:this.currentRoute});
  }

}
