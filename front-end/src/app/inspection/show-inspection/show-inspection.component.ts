import { InspectionService } from './../../inspection.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { localizedString } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-show-inspection',
  templateUrl: './show-inspection.component.html',
  styleUrls: ['./show-inspection.component.css'],
  
})
export class ShowInspectionComponent implements OnInit {

  inspections$!:Observable<any[]>;
  inspectionTypes$!:Observable<any[]>;
  statuses$!:Observable<any[]>;
  
  //for map
  inspectionTypes:any = [];
  inspectionTypesMap:Map<number, string> = new Map()

  statuses:any = [];
  statusesMap:Map<number, string> = new Map()

  //Variables
  modalTitle:string = '';
  activeAddEditInspectionComponent: boolean = false;
  inspection:any;

  constructor(private service: InspectionService) { }

  ngOnInit(): void {
    this.inspections$ = this.service.getAllInspections();
    this.inspectionTypes$ = this.service.getAllInspectionTypes();
    this.statuses$ = this.service.getAllStatuses();
    this.allMapping();
    
  }

  allMapping()
  {
    this.service.getAllInspectionTypes().subscribe(
      data => {
        this.inspectionTypes = data;

        for(let i = 0; i < data.length; i++)
        {
          this.inspectionTypesMap.set(this.inspectionTypes[i].id, this.inspectionTypes[i].name);
        }

      }

    )

    this.service.getAllStatuses().subscribe(
      data=>{
        this.statuses = data;

        for (let i = 0; i < data.length; i++) {
          this.statusesMap.set(this.statuses[i].id, this.statuses[i].description);
          
        }
      }
    )
  }

  addModal()
  {
    this.modalTitle = "Add inspection";
    this.activeAddEditInspectionComponent = true;

    this.inspection = {
      id:0,
      inspectionTypeId:null,
      statusId:null,
      coment:null,
      
    }

  }


  editModal(item:any)
  {
    this.inspection = item;
    this.modalTitle = "Edit inspection";
    this.activeAddEditInspectionComponent = true;


  }

  closeModal()
  {
    this.activeAddEditInspectionComponent = false;
    this.inspections$ = this.service.getAllInspections();

  }

  deleteItem(item:any)
  {
    console.log(item.id);
    if(confirm(`Are you sure you want to delete inspection ${item.id}?`))
    {
      this.service.deleteInspection(item.id).subscribe(res=>{

        var closeModalBtn = document.getElementById('add-edit-modal-close');
        if(closeModalBtn) {
          closeModalBtn.click();
        }
        
      
        var showdeleteSuccess = document.getElementById('delete-success-alert');
        if(showdeleteSuccess)
        {
          showdeleteSuccess.style.display = "block";
        }

        setTimeout(function(){
          if(showdeleteSuccess){
            showdeleteSuccess.style.display = "none"
          }
        },4000);
        this.inspections$ = this.service.getAllInspections();

      }
      )
      
    }
    
  }

}
