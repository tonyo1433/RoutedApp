import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private dataStore: SharedService) { }

  ngOnInit() {
  }

  onSubmit(nameForm){
    this.dataStore.addNewStudent(
      nameForm.value.Studnum, 
      nameForm.value.Studfname,
      nameForm.value.Studlname, 
      nameForm.value.Studprog,
      nameForm.value.Studyr)
    nameForm.reset();
  }

}
