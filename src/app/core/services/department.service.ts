import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Constant} from '../constant/Constant';
import {Observable} from 'rxjs';
import {DepartmentResponse} from '../ interfaces/department/department-response.interface';
import {DepartmentRequest} from '../ interfaces/department/department-request.interface';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpClient: HttpClient) {
  }

  getDepartments(): Observable<DepartmentResponse> {
    return this.httpClient.get<DepartmentResponse>(environment.API_URL + Constant.API_ENDPOINT.DEPARTMENT.GET_DEPARTMENTS);
  }

  createDepartment(department: DepartmentRequest): Observable<DepartmentResponse> {
    return this.httpClient.post<DepartmentResponse>(environment.API_URL + Constant.API_ENDPOINT.DEPARTMENT.CREATE_DEPARTMENT, department);
  }

  updateDepartment(department: DepartmentRequest): Observable<DepartmentResponse> {
    return this.httpClient.put<DepartmentResponse>(environment.API_URL + Constant.API_ENDPOINT.DEPARTMENT.UPDATE_DEPARTMENT, department);
  }

  deleteDepartment(deptId: number): Observable<DepartmentResponse> {
    return this.httpClient.delete<DepartmentResponse>(environment.API_URL + Constant.API_ENDPOINT.DEPARTMENT.DELETE_DEPARTMENT + `/${deptId}`);
  }
}

