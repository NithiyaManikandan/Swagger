import { ComponentFixture, fakeAsync, flush, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TableComponent } from './table.component';
import { UserServiceService } from '../service/user-service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

describe('TableComponent', () => {
  let component: TableComponent;
  let service: UserServiceService;
  let router: any;
  let fixture: ComponentFixture<TableComponent>;
  let userServiceStub: Partial<UserServiceService>;
  let fakeData = [
    {
      "name": "Nithiya",
      "email": "nithiya@gmail.com",
      "phone": 9876543210
    }
  ]
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule
      ],
      providers: [{ provide: userServiceStub, useValue: userServiceStub }],
      declarations: [TableComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(UserServiceService);
    router = TestBed.get(Router)
  });

  it(`should have as title 'table'`, () => {
    const fixture = TestBed.createComponent(TableComponent);
    const app = fixture.componentInstance;
    expect(app.title).equal('table');
  });

  it('should call getuserdata method', () => {
    const getAllUsers = spyOn(service, 'getUserData').and.callThrough();
    component.ngOnInit();
    expect(getAllUsers).called
  })

  // it('should get the user values', fakeAsync(() => {
  //   fixture.detectChanges()
  //   fixture.whenStable().then(() => {
  //     component.ngOnInit();
  //     console.log('userdata', component.userData);
  //     expect(component.userData).toEqual(fakeData);
  //   })

  // }))

});
