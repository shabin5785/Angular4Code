import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef,
  OnChanges, SimpleChanges, DoCheck} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit, OnChanges, DoCheck {

  @Output() serverCreated = new EventEmitter<{ name: string, content: string }>();
  @Output() blueprintCreated = new EventEmitter<{ name: string, content: string }>();

  newServerName = '';
  newServerContent = '';

  @ViewChild('serverContentInput') serverContent: ElementRef;

  constructor() {
    console.log('Constructor');
  }

  ngOnInit() {
    console.log('Init');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('onchange');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('do Check');
  }

  onAddServer(serverName: HTMLInputElement) {
    this.serverCreated.emit({ name: serverName.value, content: this.serverContent.nativeElement.value });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({ name: this.newServerName, content: this.newServerContent });
  }



}
