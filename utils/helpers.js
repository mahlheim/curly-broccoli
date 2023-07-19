module.exports = {
  format_time: (time) => {
    return time.toString();
  },
  format_date: (date) => {
    return date.toLocaleDateString('en-US');
  }
};