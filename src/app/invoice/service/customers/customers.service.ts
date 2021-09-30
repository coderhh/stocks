import { Injectable } from '@angular/core';
import { RestService } from 'src/app/invoice/service/rest/rest.service';

@Injectable({
  providedIn: 'root'
})
export class CustomersService extends RestService {
  resource: string = '/customers';
}
