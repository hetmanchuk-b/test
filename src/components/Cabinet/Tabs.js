import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

class Tabs extends PureComponent {
  handleClick = tab => () => {
    this.props.history.push('/cabinet/'+ tab);
  }

  render() {
    const tab = this.props.tab;

    return (
      <div className="cabinet-page__head d-flex j-content-between align-items-center">
        <div className={(tab === 'account' ? 'active' : '') +' tabs-parent'} onClick={this.handleClick('account')}>
          Обо мне
        </div>
        <div className={(tab === 'tickets' ? 'active' : '') +' tabs-parent'} onClick={this.handleClick('tickets')}>
          Мои платежи
        </div>
        <div className={(tab === 'archive' ? 'active' : '') +' tabs-parent'} onClick={this.handleClick('archive')}>
          Архив поездок
        </div>
        <div className={(tab === 'passengers' ? 'active' : '') +' tabs-parent'} onClick={this.handleClick('passengers')}>
          Мои пассажиры
        </div>
        <div className={(tab === 'tasks' ? 'active' : '') +' tabs-parent'} onClick={this.handleClick('tasks')}>
          Мои заявки
        </div>
      </div>
    );
  }
}

export default withRouter(Tabs);
