import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

import { ApplicantsService } from './../applicants.service';
import { MessageService } from './../message/message.service';
import { IntApplicants } from './../applicants.interface';
import {  Router, ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit{

  dataSource: IntApplicants;


  constructor(
    private service: ApplicantsService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService
    ) { }

    get theId() {
      return Number(this.profileForm.get('theId'));
    }
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
                  theId: [''],
                  firstName: ['', Validators.required],
                  lastName: ['', Validators.required],
                  appTitle: ['', Validators.required],
                });

  ngOnInit(): void {

    // init defaut value
    this.service.getApplicant(Number(this.route.snapshot.paramMap.get('id')))
    .subscribe(dataSource => {
      this.profileForm.patchValue({
          theId: dataSource.id,
          firstName: dataSource.firstName,
          lastName: dataSource.lastName,
          appTitle: dataSource.appTitle,
      });
    });

  }

  update() {

    const inputValues = {
      firstName: this.profileForm.value.firstName,
      lastName: this.profileForm.value.lastName,
      appTitle: this.profileForm.value.appTitle,
    };

    this.service.updateApplicant(this.profileForm.value.theId, inputValues).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
        // server respond successfully => change page
        this.goTo();
      },
      error => {
        console.log(error);
      }
    );

}

    goTo() {
      this.router.navigate(['/applicants']);
    }
}
