import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaRecomendacaoCulturaPage } from './tela-recomendacao-cultura.page';

describe('TelaRecomendacaoCulturaPage', () => {
  let component: TelaRecomendacaoCulturaPage;
  let fixture: ComponentFixture<TelaRecomendacaoCulturaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaRecomendacaoCulturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
