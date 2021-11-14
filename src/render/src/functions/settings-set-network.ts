const settingsSetNetwork = ($dom: JQuery, to: string, send = false) => {
  if (to === 'online') {
    $dom.attr({
      'data-sk-to': 'offline',
      title: 'Go offline',
    });
  } else {
    $dom.attr({
      'data-sk-to': 'online',
      title: 'Go online',
    });
  }

  if (send) {
    window.api.send('settings-set-network', to !== 'offline');
  }
};

export default settingsSetNetwork;
