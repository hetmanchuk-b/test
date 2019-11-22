const times = [
  '00:00',
  '01:00',
  '02:00',
  '03:00',
  '04:00',
  '05:00',
  '06:00',
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00'
];

export default class TimeService{
  static prepareData(payload, type) {
    let timeKey = type === 'departure' ? 'localDepartureDateTime' : 'localArrivalDateTime';
    let trainTimes = this.getTrainsTimesArray(payload, timeKey);
    let barsData = this.calculateTrainsInEachBar(trainTimes, times);
    let maxTrainsInBar = barsData.reduce((a, b) => Math.max(b.trainsAmount, a), 0);

    return barsData.map(bar => ({
      title: bar.barValue,
      sizeRatio: !bar.trainsAmount ? 0 : 0.3 + (bar.trainsAmount / maxTrainsInBar * 0.7)
    }));
  }

  static calculateTrainsInEachBar(trainTimes, bars) {
    let barsData = [];
    let trainIndex = 0;

    bars.forEach(barValue => {
      let barTrainsCounter = 0;
      let barValueInt = parseInt(barValue.replace(':00', ''));

      for (; trainIndex < trainTimes.length; trainIndex++) {
        if (trainTimes[trainIndex] <= barValueInt) {
          barTrainsCounter++;
        } else {
          break;
        }
      }

      barsData.push({
        barValue: barValue,
        trainsAmount: barTrainsCounter
      });
    });

    return barsData;
  }

  static getTrainsTimesArray(payload, timeKey) {
    if (!payload || !payload.length) {
      return [];
    }

    return payload.map(item => {
      return new Date(item[timeKey]).getHours();
    });
  }
}