//12a20d97-9c6d-4265-8dd3-2e98cef0fe34
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {b64Encode} from "../utilities/utilities";
import {Project} from "./api/models/Project";

@Injectable()
export class ApiService
{

  baseUrl: string;
  apiKey: string = "12a20d97-9c6d-4265-8dd3-2e98cef0fe34";
  static _headers: Headers = new Headers();

  constructor(private http: Http) {
    this.baseUrl = "https://api.insight.ly/v2.2/";
    ApiService._headers.append("Content-Type", "application/json");
    ApiService._headers.append("Authorization", "Basic " + b64Encode(this.apiKey));
  }

  getProjects()
  {
    return this.get("Projects");
  }

  addProject(project: Project)
  {
    return this.post("Projects", project);
  }

  updateProject(project: Project)
  {
    return this.put("Projects", project);
  }

  deleteProject(project: Project)
  {
    return this.delete("Projects/" + project.PROJECT_ID);
  }

  get(endPoint: string, headers: Headers = ApiService._headers): Observable<any>
  {
    return this.http.get(this.baseUrl + endPoint, {headers: headers}).map((res: Response) => res.json()).catch(this.handleError);
  }

  post(endPoint: string, object: any, headers: Headers = ApiService._headers): Observable<any>
  {
    return this.http.post(this.baseUrl + endPoint, JSON.stringify(object), {headers: headers}).map((res: Response) => res.json()).catch(this.handleError);
  }

  put (endPoint: string, object: any, headers: Headers = ApiService._headers): Observable<any>
  {
    return this.http.put(this.baseUrl + endPoint, JSON.stringify(object), {headers: headers}).map((res: Response) => res.json()).catch(this.handleError);
  }

  delete(endPoint: string, headers: Headers = ApiService._headers): Observable<any>
  {
    return this.http.delete(this.baseUrl + endPoint, {headers: headers}).map((res: Response) => res.json()).catch(this.handleError);
  }

  private handleError (error: Response | any) {

    return Observable.create((observer) => {
      observer.next(error);
    });
  }
}
