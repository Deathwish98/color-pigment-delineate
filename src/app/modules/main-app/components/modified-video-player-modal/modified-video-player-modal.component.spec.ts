import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiedVideoPlayerModalComponent } from './modified-video-player-modal.component';

describe('ModifiedVideoPlayerModalComponent', () => {
  let component: ModifiedVideoPlayerModalComponent;
  let fixture: ComponentFixture<ModifiedVideoPlayerModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifiedVideoPlayerModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiedVideoPlayerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
