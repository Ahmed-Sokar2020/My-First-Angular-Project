import { ApiService } from '@app/core/http/api.service';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {
  contactUsForm: FormGroup;
  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.contactUsForm = this.fb.group({
      userName: ['', [Validators.required]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.pattern('.*com$')],
      ],
      phone: [''],
      message: ['', [Validators.required, Validators.minLength(300)]],
    });
  }

  get userName(): AbstractControl | null {
    return this.contactUsForm.get('userName');
  }

  get email(): AbstractControl | null {
    return this.contactUsForm.get('email');
  }

  doMyPost(): any {
    this.apiService.doPostToContact('1').subscribe((res: any) => {
      console.log('Res', res);
    });
  }
}
