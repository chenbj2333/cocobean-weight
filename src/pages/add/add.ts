import { Component } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';
import { UtilsService } from '../../app/services/utils.service';
import { ToastService } from '../../app/services/toast.service';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {
  private myDate: string;
  private weight: number;
  private fat: number;
  private muscle: number;
  private gullet: number;

  constructor(public navCtrl: NavController,
              public utils: UtilsService,
              public toastService: ToastService) {
  }

  ionViewDidEnter() {
    let date = new Date();
    this.myDate = this.utils.formatDate(date, 'YYYY-MM-DD');
    this.weight = null;
    this.fat = null;
    this.muscle = null;
    this.gullet = null;
  }

  add() {
    if (this.weight != null && this.fat != null && this.muscle != null && this.gullet != null) {
      let xAxis = localStorage.xAxis || '';
      localStorage.setItem('xAxis', `${xAxis},${this.myDate}`);
      let weightY = localStorage.weightY || '';
      localStorage.setItem('weightY', `${weightY},${this.weight}`);
      let fatY = localStorage.fatY || '';
      localStorage.setItem('fatY', `${fatY},${this.fat}`);
      let muscleY = localStorage.muscleY || '';
      localStorage.setItem('muscleY', `${muscleY},${this.muscle}`);
      let gulletY = localStorage.gulletY || '';
      localStorage.setItem('gulletY', `${gulletY},${this.gullet}`);
      let t: Tabs = this.navCtrl.parent;
      t.select(0);
    } else {
      this.toastService.show('有未填写的数据');
    }
  }

}
