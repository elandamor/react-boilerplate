const formatError = (message, path) => {
  if (path) {
    const headerCss = [
      'color: gray; font-weight: lighter', // title
      'color: #333; font-weight: 600', // message
      'color: gray; font-weight: lighter', // on
      'color: #333; font-weight: 600;', // path
      'color: gray; font-weight: lighter', // request.
    ];

    const parts = ['%c message'];

    parts.push(`%c${message}`);
    parts.push('%con');
    parts.push(`%c${path.join('.')}`);
    parts.push('%crequest.');

    return [parts.join(' '), ...headerCss];
  }

  const headerCss = [
    'color: gray; font-weight: lighter', // title
    'color: #333; font-weight: 600', // message
  ];

  const parts = ['%c message'];

  parts.push(`%c${message}`);

  return [parts.join(' '), ...headerCss];
};

export default formatError;
