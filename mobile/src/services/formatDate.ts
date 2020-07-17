import pt, { format, parseISO } from 'date-fns';

const formatDate = date => {
  if (!date) {
    return '--/--/--';
  }

  const newDate = parseISO(date);

  const formatted = format(newDate, "d'/'MM'/'yyyy", {
    locale: pt,
  });
  return formatted;
};

export default formatDate;
