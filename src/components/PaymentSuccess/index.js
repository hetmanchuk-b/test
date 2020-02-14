import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '../../containers/Navigation/Cabinet';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Оплата прошла успешно</title>
            </Helmet>
            <Navigation />
            <div className="main">
                <div className="inner-page conditions-page">
                    <h3 className="conditions__title">
                        Оплата прошла успешно!
                    </h3>
                    <p>
                        После получения подтверждения Ваши билеты будут доступны в <Link to="/cabinet">личном кабинете</Link> и отправлены на E-mail.
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}