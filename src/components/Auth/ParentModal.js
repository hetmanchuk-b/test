import React, {PureComponent} from 'react';
import SignIn from './../../containers/Auth/SignInModal';
import SignUp from './../../containers/Auth/SignUpModal';
import PasswordRestore from './../../containers/Auth/PasswordRestoreModal';
import PasswordRestoreSuccess from './../../containers/Auth/PasswordRestoreSuccessModal';
import SignUpSuccess from './../../containers/Auth/SignUpSuccessModal';
import SearchErrorDate from './../../containers/Auth/SearchErrorDate';
import SearchErrorTown from './../../containers/Auth/SearchErrorTown';

class ParentModal extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            validationError: null
        };
    }
    updateData = (value) => {   this.setState({ email: value })}
    render() {
        return (
            <div>
                <SignIn updateData={this.updateData}/>
                <SignUp/>
                <PasswordRestore email={this.state.email} />
                <PasswordRestoreSuccess/>
                <SignUpSuccess/>
                <SearchErrorTown/>
                <SearchErrorDate/>
            </div>
        );
    }
}

export default ParentModal;
