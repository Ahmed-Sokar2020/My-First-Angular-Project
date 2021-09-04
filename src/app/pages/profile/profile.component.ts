import { MyLoaderService } from './../../core/http/my-loader.service';
import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@app/core/http/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {
  profileForm: FormGroup;
  pageId: any;
  profileDetails: any;
  editMode = false;

  constructor(
    private fb: FormBuilder,
    private profileService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public loderService: MyLoaderService) {

    this.profileForm = this.fb.group({
      firstName: ['Ahmed', [Validators.required, Validators.minLength(3)]],
      lastName: ['Sokar', [Validators.required, Validators.minLength(3)]],
      userName: ['Ahmed_Sokar', [Validators.required]],
      email: [
        'sokar72@gmail.com',
        [Validators.required, Validators.email, Validators.pattern('.*com$')],
      ],
      phone: ['+201280157117'],
    });

    this.profileForm.disable();
    this.getPageId();
  }

  get firstName(): AbstractControl | null {
    return this.profileForm.get('firstName');
  }

  get lastName(): AbstractControl | null {
    return this.profileForm.get('lastName');
  }

  get userName(): AbstractControl | null {
    return this.profileForm.get('userName');
  }

  get email(): AbstractControl | null {
    return this.profileForm.get('email');
  }

  getPageId(): any {
    this.activatedRoute.params.subscribe((params) => {
      this.pageId = params.id;
    });
  }

  goToProfileDetails(id: any): any {
    this.router.navigateByUrl(`profile/${id}`);
  }

  edit(): any {
    this.profileForm.enable();
  }

  save(): any {
    this.profileForm.disable();
    this.doMyGetProfile();
  }

  doMyGetProfile(): any {
    this.profileService.doGetToProfile('1').subscribe((profile: any) => {
      console.log('Res', profile);
      this.profileDetails = profile;
    });
  }
}
