import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../services/api/models/Project";
import {MdDialogRef} from "@angular/material";
import {ApiService} from "app/services/api-service";

@Component({
  selector: 'app-project-detail-editor',
  templateUrl: './project-detail-editor.component.html',
  styleUrls: ['./project-detail-editor.component.css']
})
export class ProjectDetailEditorComponent implements OnInit {

  project: Project = new Project();

  // New project ID
  id: number = 0;

  constructor(public dialogRef: MdDialogRef<ProjectDetailEditorComponent>, private _api: ApiService)
  {

  }

  ngOnInit() {
    setTimeout(() => console.log(this.project), 2000);
  }

  save()
  {

    // If the project_id is 0, we can assume we're adding a new project
    if (this.project.PROJECT_ID == 0) {

      // Make sure we assign the new project id to the project
      this.project.PROJECT_ID = this.id;


      this.project.DATE_CREATED_UTC = new Date().toISOString();
      this.project.DATE_UPDATED_UTC = new Date().toISOString();

      // Add the project, then close the dialog with a dialog result of the project itself --
      // so we can add it to our current list of projects
      this._api.addProject(this.project).subscribe(() => {
        this.dialogRef.close(this.project);
      });
    }
    else {

      // Update the DATE_UPDATED_UTC field
      this.project.DATE_UPDATED_UTC = new Date().toISOString();

      // Update the project then close because Angular is awesome and handles the bindings already :)
      this._api.updateProject(this.project).subscribe(() => {
        this.dialogRef.close();
      });
    }
  }

  cancel()
  {
    // No further work required, just close the dialog
    this.dialogRef.close();
  }

}
