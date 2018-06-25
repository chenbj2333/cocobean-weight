import { Injectable } from '@angular/core';

/**
 * 工具服务
 */
@Injectable()
export class UtilsService {

  constructor() {}

  /**
   * 日期补零
   */
  private paddNum(num: any): string {
    num += '';
    return num.replace(/^(\d)$/, '0$1');
  }

  /**
   * 日期格式化
   */
  formatDate(date: Date, format: string): string {
    let cfg = {
      YYYY : date.getFullYear(),
      YY : date.getFullYear().toString().substring(2),
      M  : date.getMonth() + 1,
      MM : this.paddNum(date.getMonth() + 1),
      D  : date.getDate(),
      DD : this.paddNum(date.getDate()),
      HH : date.getHours(),
      mm : date.getMinutes(),
      ss : date.getSeconds()
    };
    return format.replace(/([a-z])(\1)*/ig, function(m){return cfg[m]; });
  }
}
