const getLang = () => {
  if (navigator.languages) {
    return navigator.languages[0];
  }
  return navigator.language;
};

const getTimeZone = () => Intl.DateTimeFormat().resolvedOptions().timeZone;

const formatDate = (date) => {
  const regex = /,/g;

  return new Date(date)
    .toLocaleString(getLang(), {
      timeZone: getTimeZone(),
    })
    .replace(regex, ' ');
};

export const postsFormatter = (data) => {
  const formatedArray = data.map(
    ({ id, created_at: date, text, user: { name: author } }) => ({
      id,
      date: formatDate(date),
      author,
      text,
    })
  );

  return formatedArray;
};
