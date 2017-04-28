import {Component, ViewChild} from '@angular/core';
import {ApiService} from "./services/api-service";
import {Project} from "./services/api/models/Project";
import {MdDialog} from "@angular/material";
import {ProjectDetailEditorComponent} from "./components/project-detail-editor/project-detail-editor.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projects: Project[] = [];

  @ViewChild('table') table: any;


  constructor(private _api: ApiService, public dialog: MdDialog)
  {

  }

  ngOnInit()
  {
    // Retrieve list of projects
    this._api.getProjects().subscribe((projects: Project[]) => {
      this.projects = projects;
    });
  }

  addProject()
  {
    let dialogRef = this.dialog.open(ProjectDetailEditorComponent);

    // This api service requires that we generate our own Id
    dialogRef.componentInstance.id = this.getNextProjectId();

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.projects.push(result);
    });
  }

  editProject()
  {
    let dialogRef = this.dialog.open(ProjectDetailEditorComponent);

    // Set the editor component's project field to the currently selected project for editing
    dialogRef.componentInstance.project = this.table.selected[0];
  }

  deleteProject()
  {

    // Get the selected project
    var project = this.table.selected[0];


    // Call the api to delete the project
    this._api.deleteProject(project).subscribe(() => {

      // There's no sanity checking here as this is just a quick demonstration
      // But assume everything was fine, and remove the project from our current list
      this.projects = this.projects.filter(x=>x.PROJECT_ID != project.PROJECT_ID);
    });
  }

  getNextProjectId()
  {

    var id = 0;

    // Get the max project id
    this.projects.forEach(x=>id = Math.max(x.PROJECT_ID, id))


    // Return the max project id + 1 to generate a new id
    return id + 1;
  }

  get isActionable()
  {
    // Make sure we have a project selected
    return this.table.selected.length > 0;
  }

  getTags(project: Project)
  {
    // Pseudo-aggregate the tags into a single array, then join them with a comma
    return project.TAGS.map(x=>x.TAG_NAME).join(',');
  }

}
