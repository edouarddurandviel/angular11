import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

import { ApplicantsService } from './../applicants.service';
import { MessageService } from './../message/message.service';
import { IntApplicants } from './../applicants.interface';
import {  Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  dataSource: IntApplicants;

  constructor(
    private service: ApplicantsService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService
    ) { }


    get firstName() {
      return this.profileForm.get('firstName');
    }
    get lastName() {
      return this.profileForm.get('lastName');
    }
    get appTitle() {
      return this.profileForm.get('appTitle');
    }

    currentId: number;
    appliId = '';
    submitted = false;
    // reactive form
    profileForm = this.fb.group({
                  firstName: ['', Validators.required],
                  lastName: ['', Validators.required],
                  appTitle: ['', Validators.required],
                });

  ngOnInit(): void {

  }

  add() {

    const data = {
      firstName: this.profileForm.value.firstName,
      lastName: this.profileForm.value.lastName,
      appTitle: this.profileForm.value.appTitle,
    };

    this.service.addApplicant(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
        // server respond successfully => change page
        this.back();
      },
      error => {
        console.log(error);
      }
    );

}

    back() {
      this.router.navigate(['/applicants']);
    }

}
