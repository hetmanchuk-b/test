import { connect } from 'react-redux';
import { valueSet, reset } from './../../actions/SearchFilters';
import Filters from './../../components/Search/Filters';

const serviceClassesData = trains => {
  let rv = {
    '2Р': { minPrice: 0, maxPrice: 0, placeQuantity: 0 },
    '2В': { minPrice: 0, maxPrice: 0, placeQuantity: 0 },
    '2С': { minPrice: 0, maxPrice: 0, placeQuantity: 0 },
    '2Е': { minPrice: 0, maxPrice: 0, placeQuantity: 0 },
    '1С': { minPrice: 0, maxPrice: 0, placeQuantity: 0 },
    '1В': { minPrice: 0, maxPrice: 0, placeQuantity: 0 },
    '1Р': { minPrice: 0, maxPrice: 0, placeQuantity: 0 }
  }

  trains.map(el => {
    for ( let serviceClass in el.serviceClasses ) {

      if ( el.serviceClasses[serviceClass].minPrice < rv[serviceClass].minPrice || rv[serviceClass].minPrice === 0 )
        rv[serviceClass].minPrice = el.serviceClasses[serviceClass].minPrice;

      if ( el.serviceClasses[serviceClass].maxPrice > rv[serviceClass].maxPrice )
        rv[serviceClass].maxPrice = el.serviceClasses[serviceClass].maxPrice;

      rv[serviceClass].placeQuantity += el.serviceClasses[serviceClass].placeQuantity;
    }

    return true;
  });

  return rv;
}

const mapStateToProps = state => ({
  serviceClassesData: serviceClassesData(state.trains),
  filters: state.searchFilters,
  trains: state.trains
});

export default connect(mapStateToProps, { valueSet, reset })(Filters);
