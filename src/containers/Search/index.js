import { connect } from 'react-redux';
import { paramSet } from './../../actions/Booking';
import { getItem } from './../../actions/Trains';
import Search from './../../components/Search';

const trainsFilter = (trains, filters) => {
  const { price, serviceClasses, departureTime, arrivalTime } = filters;
  let serviceClassesActive = [];
  let rv = [ ...trains ];

  // Filter by price
  if ( price.from !== null )
    rv = rv.filter(el => (
      ( el.minPrice >= price.from && el.minPrice <= price.to ) ||
      ( el.maxPrice >= price.from && el.maxPrice <= price.to ) ||
      ( el.minPrice <= price.from && el.maxPrice >= price.to )
    ));

  // Filter by departure time
  if ( departureTime.from !== null )
    rv = rv.filter(el => ( el.localDepartureHours >= departureTime.from && el.localDepartureHours <= departureTime.to ));

  // Filter by arrival time
  if ( arrivalTime.from !== null )
    rv = rv.filter(el => ( el.localArrivalHours >= arrivalTime.from && el.localArrivalHours <= arrivalTime.to ));

  // Filter by service classes
  for ( let serviceClassGroup in serviceClasses )
    for ( let serviceClass in serviceClasses[serviceClassGroup] )
      if ( serviceClasses[serviceClassGroup][serviceClass] )
        serviceClassesActive.push(serviceClass);

  if ( serviceClassesActive.length ) {
    rv = rv.filter(el => {
      // If one of active service classes in filter has more then 0 free places in train
      for ( let i in serviceClassesActive )
        if ( el.serviceClasses[serviceClassesActive[i]].placeQuantity !== 0 ) return true;

      return false;
    });
  }

  return rv;
}

const mapStateToProps = state => ({
  trains: trainsFilter(state.trains, state.searchFilters),
  loader: state.app.loader
});

export default connect(mapStateToProps, { paramSet, getItem })(Search);
