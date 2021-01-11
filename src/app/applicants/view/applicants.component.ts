import { Component, OnInit } from '@angular/core';
import { ApplicantsService } from '../applicants.service';
import { IntApplicants } from '../applicants.interface';
import {  Router} from '@angular/router';

const tPath = `./`;

@Component({
  selector: 'app-applicants',
  templateUrl: `${tPath}/applicants.component.html`,
  styleUrls: [`${tPath}/applicants.component.scss`]
})
export class ApplicantsComponent implements OnInit {

  constructor(
    private service: ApplicantsService,
    private router: Router,
    ) { }

  dataSource: IntApplicants;
  submitted = false;

  ngOnInit(): void {
      this.service.getApplicantsList().subscribe(
        dataSource => this.dataSource = dataSource
        );
  }

  delete(id: number) {
    this.service.deleteApplicant(id).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
        // server respond successfully
        // TODO: remplacer par autre chose
        this.ngOnInit();
      },
      error => {
        console.log(error);
      }
    );

}

addNew() {
  this.router.navigate(['/applicants/add']);
}


}
