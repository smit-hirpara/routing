import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoderService } from './loder.service';
@Injectable() 
    export class LoaderIntercepotor implements HttpInterceptor {
        constructor(private loaderservice: LoderService) {}
        
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap(event => {
                this.loaderservice.loader.next(true);
                if(event.type == HttpEventType.Response) {
                    if(event.status == 200) {
                        this.loaderservice.loader.next(false);
                    }
                }
            })
        )
    }
    }