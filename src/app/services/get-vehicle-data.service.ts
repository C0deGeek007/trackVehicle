import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class GetVehicleDataService {

  constructor(private db:AngularFirestore) { }

  getVehicleInfo() {
    return this.db.collection('vehicle').valueChanges();
  }

}
