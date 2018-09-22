const formatError = (message: string, path?: any) => {
  let headerCss = [
    'color: gray; font-weight: lighter', // title
    'color: #333; font-weight: 600', // message
  ];

  let parts = ['%c message'];

  if (path) {
    headerCss = [
      'color: gray; font-weight: lighter', // title
      'color: #333; font-weight: 600', // message
      'color: gray; font-weight: lighter', // on
      'color: #333; font-weight: 600;', // path
      'color: gray; font-weight: lighter', // request.
    ];

    parts = ['%c message'];

    parts.push(`%c${message}`);
    parts.push('%con');
    parts.push(`%c${path.join('.')}`);
    parts.push('%crequest.');

    return [parts.join(' '), ...headerCss];
  }

  parts.push(`%c${message}`);

  return [parts.join(' '), ...headerCss];
};

export default formatError;
