import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialOrganizationComponent } from './credential-organization.component';

describe('CredentialOrganizationComponent', () => {
  let component: CredentialOrganizationComponent;
  let fixture: ComponentFixture<CredentialOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredentialOrganizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CredentialOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
