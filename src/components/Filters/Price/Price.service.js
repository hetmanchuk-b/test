const prices = [
  1000,
  2000,
  3000,
  4000,
  5000,
  6000,
  7000,
  8000,
  9000,
  10000,
  11000,
  12000,
  14000,
  16000,
  18000,
  20000,
  22000,
  24000,
  25000,
  25000,
  35000,
  50000,
  65000,
  85000,
  100000
];

class PriceService {
  static prepareData(payload) {
    if (!payload || !payload.length) 
      return [];
    
    let tickets = this.getTicketsFromPayload(payload);
    let barsData = this.calculateTicketsInEachBar(tickets, prices);
    let maxTicketsInBar = barsData.reduce((a, b) => Math.max(b.ticketsAmount, a), 0);
    
    return barsData.map(bar => ({
      title: bar.barValue,
      sizeRatio: !bar.ticketsAmount ? 0 : 0.3 + (bar.ticketsAmount / maxTicketsInBar * 0.7)
    }));
  }

  static getTicketsFromPayload(payload) {
    let tickets = [];

    payload.forEach(item => {
      for (let key in item.serviceClasses) {
        let ticket = item.serviceClasses[key];

        if (!ticket || !ticket.maxPrice || !ticket.minPrice) {
          continue;
        }

        ticket.price = (ticket.minPrice + ticket.maxPrice) / 2;
        tickets.push(ticket);
      }
    });

    tickets.sort((a, b) => {
      if (a.price < b.price) {
        return -1;
      }
      if (a.price > b.price) {
        return 1;
      }
      // a должно быть равным b
      return 0;
    });

    return tickets;
  }

  static calculateTicketsInEachBar(tickets, bars) {
    let barsData = [];
    let ticketIndex = 0;

    bars.forEach(barValue => {
      let barTicketsCounter = 0;

      for (;ticketIndex < tickets.length; ticketIndex++) {
        if (tickets[ticketIndex].price <= barValue) {
          barTicketsCounter++;
        } else {
          break;
        }
      }

      barsData.push({
        barValue: barValue,
        ticketsAmount: barTicketsCounter
      });
    });

    return barsData;
  }
}

export default PriceService;