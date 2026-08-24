import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderHome } from './loader-home';

describe('LoaderHome', () => {
  let component: LoaderHome;
  let fixture: ComponentFixture<LoaderHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderHome],
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
