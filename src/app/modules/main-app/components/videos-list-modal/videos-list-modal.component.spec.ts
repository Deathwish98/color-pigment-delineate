import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosListModalComponent } from './videos-list-modal.component';

describe('VideosListModalComponent', () => {
  let component: VideosListModalComponent;
  let fixture: ComponentFixture<VideosListModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosListModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
