import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  studentCollection: Array<object> = [];
  studObject: {studnum: number, studfirstname: string, studlastname: string, studprog: string, studyear:number};

  constructor() { }

  addNewStudent(shNumber: number, shFirstName: string, shLastName: string, shProg: string, shYear:number){
    this.studObject = {
      studnum: shNumber,
      studfirstname: shFirstName,
      studlastname: shLastName,
      studprog: shProg,
      studyear: shYear
    }
    this.studentCollection.push(this.studObject);
  }

  getStud(){
    return this.studentCollection;
  }

}
