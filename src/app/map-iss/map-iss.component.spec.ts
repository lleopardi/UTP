import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapIssComponent } from './map-iss.component';

describe('MapIssComponent', () => {
  let component: MapIssComponent;
  let fixture: ComponentFixture<MapIssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapIssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapIssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
