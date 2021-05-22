export const validationMessages = {
  organizationName: {
    required: 'Organization name is required!',
    minlength: 'Organization name must be minimum of 3 characters!',
    maxlength: 'Organization name should not exceed 100 characters!',
  },
  country: {
    required: 'Country is required!',
  },
  emailAddress: {
    required: 'Email address is required!',
    maxlength: 'Email address should not exceed 100 characters!',
    email: 'Email address is not valid! Eg: abc123@xyz.com',
  },
  certificateCategory: {
    required: 'Certificate category is required!',
  },
  certificate: {
    required: 'Certificate is required!',
  },
};
