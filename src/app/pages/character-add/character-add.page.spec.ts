import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterAddPage } from './character-add.page';

describe('CharacterAddPage', () => {
  let component: CharacterAddPage;
  let fixture: ComponentFixture<CharacterAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CharacterAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
