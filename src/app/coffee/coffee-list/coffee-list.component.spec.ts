/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CoffeeListComponent } from './coffee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { cafeMockData } from './cafe-mocks';

describe('CoffeeListComponent', () => {
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;
  let debug: DebugElement;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CoffeeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;
    component.cafeList = cafeMockData;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('table is created', () => {
    const tableElement = debug.query(By.css('table'));
    const h = debug.queryAll(By.css('thead'));
    const rowHtmlElements = debug.nativeElement.querySelectorAll('tbody tr');
    expect(tableElement).toBeDefined();
    expect(h.length).toBe(1);
    expect(rowHtmlElements.length).toBe(cafeMockData.length);
  })
});
