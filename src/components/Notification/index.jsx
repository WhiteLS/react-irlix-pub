import React from 'react';

import './notification.scss';

function Notification({ ntf }) {
  return (
    <div className={'notification ' + (ntf ? 'notification_active' : '')}>
      Добавлено в избранное
    </div>
  );
}

export default Notification;
