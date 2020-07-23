import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  ComponentFactoryResolver,
  ComponentRef,
  ViewContainerRef,
  ViewChild,
} from '@angular/core';
import { AlertComponent } from '../alert/alert.component';

interface Metric {
  used: number;
  available: number;
}

interface Node {
  name: string;
  cpu: Metric;
  mem: Metric;
}

@Component({
  selector: 'app-datadashboard',
  templateUrl: './datadashboard.component.html',
  styleUrls: ['./datadashboard.component.css'],
})
export class DatadashboardComponent implements OnInit, OnDestroy {
  cpu: Metric;
  mem: Metric;
  cluster1: Node[];
  cluster2: Node[];
  interval: any;

  alertRef: ComponentRef<AlertComponent>;
  @ViewChild('alertBox', { read: ViewContainerRef }) alertBox: ViewContainerRef;
  constructor(private ComponentFactoryResolver: ComponentFactoryResolver) {}

  alert(date) {
    if (!this.alertRef) {
      const alertComponent = this.ComponentFactoryResolver.resolveComponentFactory(
        AlertComponent
      );
      this.alertRef = this.alertBox.createComponent(alertComponent);
    }

    this.alertRef.instance.date = date;
    this.alertRef.changeDetectorRef.detectChanges();

    setTimeout(() => this.destroyAlert(), 5000);
  }

  destroyAlert() {
    if (this.alertRef) {
      this.alertRef.destroy();
      delete this.alertRef;
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  ngOnInit(): void {
    this.generateData();

    this.interval = setInterval(() => {
      this.refresh();
    }, 15000);
  }

  refresh(): void {
    this.generateData();
    this.alert(new Date());
  }

  generateData(): void {
    this.cluster1 = [];
    this.cluster2 = [];
    this.cpu = { used: 0, available: 0 };
    this.mem = { used: 0, available: 0 };
    for (let i = 1; i < 4; i++) this.cluster1.push(this.randomNode(i));
    for (let i = 4; i < 7; i++) this.cluster2.push(this.randomNode(i));
  }

  private randomNode(i): Node {
    let node = {
      name: 'node' + i,
      cpu: { available: 16, used: this.randomInteger(0, 16) },
      mem: { available: 48, used: this.randomInteger(0, 48) },
    };
    this.cpu.used += node.cpu.used;
    this.cpu.available += node.cpu.available;
    this.mem.used += node.mem.used;
    this.mem.available += node.mem.available;
    return node;
  }

  private randomInteger(min: number = 0, max: number = 100): number {
    return Math.floor(Math.random() * max) + 1;
  }
}
