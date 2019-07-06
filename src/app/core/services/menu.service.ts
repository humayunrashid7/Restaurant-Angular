import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MenuItemBaseModel} from '../models/menu-item.model';
import {Observable, of, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  sheeshaMenuUrl = 'http://localhost:4200/assets/data.json';

  constructor(private http: HttpClient) {}

  getAllSheeshaItems(): Observable<MenuItemBaseModel[]> {
      return this.http.get<MenuItemBaseModel[]>(this.sheeshaMenuUrl);
  }

  getSheeshaItemById(itemId: number): MenuItemBaseModel {
    console.log('Find Sheesha Item by Id: ' + itemId);
    return null;
  }

  createSheeshaItem(item: MenuItemBaseModel): Observable<MenuItemBaseModel> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    item.id = null;

    return this.http.post<MenuItemBaseModel>(this.sheeshaMenuUrl, item, {headers: headers})
      .pipe(
        tap(data => console.log('createSheeshaItem: ' + JSON.stringify(data)))
      );
  }

  updateSheeshaItemById(item: MenuItemBaseModel): Observable<MenuItemBaseModel> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `${this.sheeshaMenuUrl}/${item.id}`;

    return this.http.put<MenuItemBaseModel>(url, item, { headers: headers});
  }

  deleteSheeshaItemById(itemId: number): void {
    // const index = this.sheeshaItems.findIndex(x => x.id === itemId);
    // this.sheeshaItems.splice(index, 1);
  }

}
