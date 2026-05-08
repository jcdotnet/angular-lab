import {Injectable}               from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Contacto } from './../app/contacto/contacto';

 
@Injectable()
export class ContactService {
    
    static subjects: string[];
  
    private url = 'email.php'; // URL to WEB API
    
    constructor (private http: Http) {

    }
    
    sendEmail (contacto: Contacto): Observable<string> {
        let body = JSON.stringify(contacto);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.url, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
    }
    
    getSubjects(): string[]
    {
        return ContactService.subjects;
    }
    
    initializeSubjects(subjects: string[])
    {
        ContactService.subjects = subjects;
    }
    
    private extractData(res: Response) {
        // let body = res.json();
        // return body.data || { };
        return res; // devolvemos tal cual recibimos
    }
 
 
    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
    
}
