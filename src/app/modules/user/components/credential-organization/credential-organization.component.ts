import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validationMessages } from 'src/app/core/constants/validation-messages';
import { masterData } from 'src/app/core/constants/dummy-data';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-credential-organization',
  templateUrl: './credential-organization.component.html',
  styleUrls: ['./credential-organization.component.scss']
})
export class CredentialOrganizationComponent implements OnInit, OnDestroy {
  masterData: any;
  organizationForm: FormGroup;
  subscriptions: Subscription = new Subscription();
  validationMessages = {
    organizationName: validationMessages.organizationName,
    country: validationMessages.country,
    emailAddress: validationMessages.emailAddress,
    certificateCategory: validationMessages.certificateCategory,
    certificate: validationMessages.certificate,
  };
  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.initForms();
    this.getMasterData();
  }

  // Initialize organization form
  initForms() {
    this.organizationForm = this.fb.group({
      organizationName: ["", [Validators.required, Validators.maxLength(100), Validators.minLength(3)]],
      country: ["", [Validators.required]],
      emailAddress: ["", [Validators.required, Validators.maxLength(100), Validators.email]],
      certificateCategory: ["", [Validators.required]],
      certificate: ["", [Validators.required]],
    });
  }

  getMasterData() {
    let subscription: Subscription = this.userService.getMasterData().subscribe((masterData) => {
      this.masterData = masterData;
    });
    this.subscriptions.add(subscription);
  }

  // Submit form
  addOrganization() {
    if (this.organizationForm.valid) {
      console.log(this.organizationForm.value);
      alert("Form Submited! Please check console for the values!")
      this.organizationForm.reset();
    } else {
      this.organizationForm.markAllAsTouched();
    }
  }

  // ------------ Validations ------------ //
  // Organization name
  hasOrganizationNameRequiredError(): boolean {
    return (this.organizationForm.get('organizationName').hasError('required')
      || !this.organizationForm.get('organizationName').value?.trim())
      && (this.organizationForm.get('organizationName').touched || this.organizationForm.get('organizationName').dirty);
  }
  hasOrganizationNameMaxLengthError(): boolean {
    return this.organizationForm.get('organizationName').hasError('maxlength');
  }
  hasOrganizationNameMinLengthError(): boolean {
    return this.organizationForm.get('organizationName').hasError('minlength');
  }
  hasOrganizationNameError(): boolean {
    return this.hasOrganizationNameRequiredError() || this.hasOrganizationNameMaxLengthError() || this.hasOrganizationNameMinLengthError();
  }

  // Country
  hasCountryRequiredError(): boolean {
    return (this.organizationForm.get('country').hasError('required') &&
      (this.organizationForm.get('country').touched || this.organizationForm.get('country').dirty));
  }

  // Email address
  hasEmailAddressRequiredError(): boolean {
    return (this.organizationForm.get('emailAddress').hasError('required')
      || !this.organizationForm.get('emailAddress').value?.trim()) &&
      (this.organizationForm.get('emailAddress').touched || this.organizationForm.get('emailAddress').dirty);
  }
  hasEmailAddressMaxLengthError(): boolean {
    return this.organizationForm.get('emailAddress').hasError('maxlength');
  }
  hasErrorEmailAddressValid(): boolean {
    return this.organizationForm.get('emailAddress').hasError('email');
  }
  hasEmailAddressError(): boolean {
    return this.hasEmailAddressRequiredError() || this.hasEmailAddressMaxLengthError() || this.hasErrorEmailAddressValid();
  }

  // Certificate category
  hasCertificateCategoryRequiredError(): boolean {
    return (this.organizationForm.get('certificateCategory').hasError('required') &&
      (this.organizationForm.get('certificateCategory').touched || this.organizationForm.get('certificateCategory').dirty));
  }

  // Certificate
  hasCertificateRequiredError(): boolean {
    return (this.organizationForm.get('certificate').hasError('required') &&
      (this.organizationForm.get('certificate').touched || this.organizationForm.get('certificate').dirty));
  }

  hasError(): boolean {
    return this.hasOrganizationNameError()
      || this.hasCountryRequiredError()
      || this.hasEmailAddressError()
      || this.hasCertificateCategoryRequiredError()
      || this.hasCertificateRequiredError();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
