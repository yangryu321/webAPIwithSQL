import { InspectionService } from './../../inspection.service';
import { Observable } from 'rxjs/internal/Observable';
import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-edit-inspection',
  templateUrl: './edit-inspection.component.html',
  styleUrls: ['./edit-inspection.component.css']
})
export class EditInspectionComponent implements OnInit {

  inspectionTypes$! : Observable<any[]>;
  statuses$! : Observable<any[]>;
  

  @Input() inspection:any;
  id:number = 0;
  inspectionTypeId!: number;
  statusId!: number;
  comment: string = "";
  
  
  constructor(private service:InspectionService) { }

  ngOnInit(): void {
    this.id = this.inspection.id;
    this.inspectionTypeId = this.inspection.inspectionTypeId;
    this.statusId = this.inspection.statusId;
    this.comment = this.inspection.comment;

    this.inspectionTypes$ = this.service.getAllInspectionTypes();
    this.statuses$ = this.service.getAllStatuses();


  }


  addInspection()
  {
    var inspection = {
      statusId : this.statusId,
      inspectionTypeId : this.inspectionTypeId,
      comment : this.comment
    }
    var item = 
    {
      
      comment: 'FUUUUUUCCKKKK',
      inspectionTypeId: 1,
      statusId: 1
    }
    
    this.service.addInspecstion(inspection).subscribe(
      res =>{
        var closeModalBtn = document.getElementById('edit-modal-close');
        if(closeModalBtn)
        {
          closeModalBtn.click();
        }

        var showAddSuccess = document.getElementById('add-success-alert');
        if(showAddSuccess)
        {
          showAddSuccess.style.display = "block";
        }

        setTimeout(function(){
          if(showAddSuccess){
            showAddSuccess.style.display = "none"
          }
        },4000);
      
      })

  }
  updateInspection()
  {
    var inspection = {
      id: this.id,
      statusId : this.statusId,
      inspectionTypeId : this.inspectionTypeId,
      comment : this.comment
    }
    
    
    var id:number = this.id;

    this.service.updateInspection(id,inspection).subscribe(
      res=>{
        var closeModalBtn = document.getElementById('edit-modal-close');
        if(closeModalBtn)
        {
          closeModalBtn.click();
        }

        
        var showUpdateSuccess = document.getElementById('update-success-alert');
        if(showUpdateSuccess)
        {
          showUpdateSuccess.style.display = "block";
        }

        setTimeout(function(){
          if(showUpdateSuccess){
            showUpdateSuccess.style.display = "none"
          }
        },4000);


      }
    )
  }
  


}
