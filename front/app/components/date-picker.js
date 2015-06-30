import Datepicker from 'ember-cli-datepicker/components/date-picker';

export default Datepicker.extend({
  format: 'DD/MM/YYYY',
  allowBlank: true,
  firstDay: 1,
  showTime:true,
  showSeconds: false,
  use24hour: true,
  i18n: {
    previousMonth: 'Mês Anterior',
    nextMonth: 'Próximo Mês',
    months: window.moment.localeData()._months,
    weekdays: window.moment.localeData()._weekdays,
    weekdaysShort: window.moment.localeData()._weekdaysShort
  },
});