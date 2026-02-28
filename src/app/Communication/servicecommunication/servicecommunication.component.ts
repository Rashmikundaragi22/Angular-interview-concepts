import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../service/userdata.service';

@Component({
  selector: 'app-servicecommunication',
  templateUrl: './servicecommunication.component.html',
  styleUrls: ['./servicecommunication.component.css']
})
export class ServicecommunicationComponent implements OnInit {

  data: any

  constructor(private UserDataService: UserDataService) { }

  ngOnInit(): void {
  }
    displayUserData(){
    this.UserDataService.userData().subscribe((response)=>{
      this.data = response;
    })
  }

}
