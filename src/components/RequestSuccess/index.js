import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '../../containers/Navigation/Cabinet';

export default () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Ваша заявка принята</title>
            </Helmet>
            <Navigation />
            <div className="main">
                <div className="inner-page conditions-page">
                    <h3 className="conditions__title">
                        Ваша заявка принята!
                    </h3>
                    <p>
                        Как только билет появится в продаже, мы выкупим его для Вас. <br />
                        Билет будет автоматически отправлен на E-mail.
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}