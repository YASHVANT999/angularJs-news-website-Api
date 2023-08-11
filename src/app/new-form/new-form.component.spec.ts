import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { NewFormComponent } from './new-form.component';

describe('NewFormComponent', () => {
  let component: NewFormComponent;
  let fixture: ComponentFixture<NewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewFormComponent, FormsModule, NgForm],
    }).compileComponents();

    fixture = TestBed.createComponent(NewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
