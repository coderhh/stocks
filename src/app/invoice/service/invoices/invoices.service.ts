import { Injectable } from '@angular/core';
import { RestService } from '../rest/rest.service';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService extends RestService{
  resource: string = '/invoices';
}