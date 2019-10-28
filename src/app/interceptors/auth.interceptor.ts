import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, of } from 'rxjs';

/**
 * This class sets the Authorization header of every request that goes through.
 * In case the user is not signed it, this interceptor doesn't do anything.
 */
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('id_token');

    if (token) {
      // const authRequest = req.clone({
      //   headers: req.headers.set('Authorization', 'Bearer ' + token)
      // });
      const authRequest = req.clone({
          setHeaders: {
            Authorization: 'Bearer ' + token
          }
        });
      return next.handle(authRequest);
    } else {
      return next.handle(req);
    }
  }
}
