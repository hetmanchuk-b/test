import React, {Fragment} from 'react';

export default props => (
    <Fragment>
        <div className="modal show" id="search-modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <button type="button" className="close" onClick={props.modalClose}>
                        <i className="fas fa-times"></i>
                    </button>
                    <div className="modal-header">
                        <h5 className="modal-title">Поиск</h5>
                    </div>
                    <div className="modal-body">
                        <p>Пожалуйста укажите дату отправления.</p>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
        <div className="overlay show"></div>
    </Fragment>
);
