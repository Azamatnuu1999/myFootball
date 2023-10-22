import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService, match } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

export interface commandsData {
  id: number,
  name: string,
  logo: string,
  data: {
    goals: number,
    played: number,
    win: number,
    loose: number,
    points: number
  }
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent {
  isEdit: boolean = true;
  clubs!: string[];
  id: number = NaN;
  /**
   * 
   * @param fb 
   */
  constructor(private fb: FormBuilder, private data: DataService, private route: ActivatedRoute, private router: Router) {
    this.clubs = data.commands;
    this.id = this.route.snapshot.params['id']
    if(this.id) {
      this.isEdit = true;
      this.setFormVal(+this.id)
    } else {
      this.isEdit = false;
    }
  }
  /**
   * 
   * @param id 
   */
  setFormVal(id: number) {
    type my = string | Date | number;
    let data = this.data.getMatch(id)[0];
    this.form.controls.clubName1.setValue(data.clubName1);
    this.form.controls.clubName2.setValue(data.clubName2);
    this.form.controls.clubGoals1.setValue(data.clubGoals1);
    this.form.controls.clubGoals2.setValue(data.clubGoals2);
    this.form.controls.date.setValue(data.date);
    this.form.controls.hour.setValue(data.hour);
  }
  /**
   * 
   */
  form = this.fb.nonNullable.group({
    clubName1: ['', Validators.required],
    clubGoals1: [NaN, Validators.required],
    clubName2: ['', Validators.required],
    clubGoals2: [NaN, Validators.required],
    date: [new Date(), Validators.required],
    hour: [new Date(), Validators.required]
  })

  /**
   * 
   * @param club1 
   * @param club2 
   * @param date 
   */
  addMatch() {
    if(this.form.valid) {
      let match = this.form.getRawValue()
      let matchData = {
        id: 5,
        ...match
      }
       this.data.setMatch(matchData);
      this.router.navigate(['./match'])
    } else {
      alert('Please enter all form data!');
    }
  }
}

