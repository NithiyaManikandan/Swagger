import { asyncData, asyncError } from '../testing/testing-data'
import { UserServiceService } from './user-service.service';
import { UserDetail } from '../userDetail';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

describe('UserServiceService', () => {
  let httpSpy: jasmine.SpyObj<HttpClient>;
  let service: UserServiceService;

  beforeEach(() => {
    httpSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new UserServiceService(httpSpy);
  });

  it('httpclient Get method', () => {
    const testGet: UserDetail[] = [
      {
        _id:"633bd2ea5ffcbbea501a1466",
        name: 'Nithiya',
        email: 'nithiya@gmail.com',
        phone: 9876543210
      }
    ]
    httpSpy.get.and.returnValue(asyncData(testGet))

    service.getUserData().subscribe({
      next: user => {
        console.log('user',user,"test",testGet)
        expect(user)
        .equal(testGet);
       
      },
    });
    expect(httpSpy.get.calls.count());
  });

  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404
    });
  
    httpSpy.get.and.returnValue(asyncError(errorResponse));
  
    service.getUserData().subscribe({
      // next: user => done.fail,
      error: error  => {
        console.log("error",error.message);
        expect(error.message);
        // done();
      }
    });
  });
})

