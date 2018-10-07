import { connect } from 'react-redux';

import PromoCode from '../../components/PromoCode/PromoCode';
import { handleChange } from '../../actions/promoCodeActions';
  

// event handling should be done here
export const PromoCodeContainer = props => (
    <PromoCode
    />
    );
  handleChange = event => {
    this.props.onHandleChange(event);
  }
  
  export const mapDispatchToProps = dispatch => ({
    onHandleChange: () => dispatch(handleChange(event))
  });
  
  export const mapStateToProps = state => ({
    promoCode: state.promoCode.value
  });
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(PromoCodeContainer);
  