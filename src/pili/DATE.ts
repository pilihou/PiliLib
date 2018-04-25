module pili {
	export class DATE {
		/**nowTime 是否在 beginTime 之前 */
		public static isBefore(nowTime: Date, beginTime: Date): boolean {
			return nowTime.getTime() < beginTime.getTime();
		}

		/**nowTime 是否在 compareDate 之后 */
		public static isAfter(nowTime: Date, endTime: Date): boolean {
			return nowTime.getTime() > endTime.getTime();
		}

		public static isBetween(beginTime: Date, nowTime: Date, endTime: Date): boolean {
			return beginTime.getTime() <= nowTime.getTime() && nowTime.getTime() <= endTime.getTime();
		}

		/**给定的时间上加秒 */
		public static addSeconds(date: Date, second: number) {
			return date.setSeconds(date.getSeconds() + second),
				date
		}
		/**给定的时间上加分 */
		public static addMinutes(date: Date, minute: number) {
			return date.setMinutes(date.getMinutes() + minute),
				date
		}
		/**给定的时间上加小时 */
		public static addHours(date: Date, hour: number) {
			return date.setHours(date.getHours() + hour),
				date
		}
		/**给定的时间上加天 */
		public static addDays(date: Date, day: number) {
			return date.setDate(date.getDate() + day),
				date
		}
		/**给定的时间上加月 */
		public static addMonths(date: Date, month: number) {
			return date.setMonth(date.getMonth() + month),
				date
		}

		/**
		 * 毫秒转换为 00:00:00
		 * time 时间(毫秒)
		 * isShowDay true天数大于零时显示x天xx:xx:xx，否则显示xx:xx:xx，false显示xx:xx:xx
		 */
		public static formatTime(time: number, isShowDay:boolean=true): string {
			if (time < 0) {
				time = 0;
			}
			let timeStr: string;
			let day:number;
			let hour:number;
			if(isShowDay){
				day = time / (24 * 60 * 60 * 1000) << 0;
				hour = (time % (24 * 60 * 60 * 1000))/ (60 * 60 * 1000) <<0;
			}else{
				hour = time / (60 * 60 * 1000) << 0;
			}
			let minute = (time % (60 * 60 * 1000)) / (60 * 1000) << 0;
			let second = (time % (60 * 1000)) / 1000 << 0;
			timeStr = pili.STR.fill(hour, "00") + ":" + pili.STR.fill(minute, "00") + ":" + pili.STR.fill(second, "00");
			if(day>0){
				return day + "天" +timeStr;
			}else{
				return timeStr;
			}
		}
	}
}