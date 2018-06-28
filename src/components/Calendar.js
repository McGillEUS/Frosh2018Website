import React from 'react'
// import {jQuery as $} from './fullcalendar/lib/jquery.min.js'
// import jQuery from './fullcalendar/lib/jquery.min.js'
// import moment from './fullcalendar/lib/moment.min.js'
// import fullcalendar from './fullcalendar/fullcalendar.js'

import jQuery from 'jquery'
import fullcalendar from 'fullcalendar'

const Calendar = (props) => (
  <div>
  <link rel='stylesheet' href='fullcalendar/fullcalendar.css' />
  {/* <script src='fullcalendar/lib/jquery.min.js'></script> */}
  {/* <script src='fullcalendar/lib/moment.min.js'></script> */}
  {/* <script src='fullcalendar/fullcalendar.js'></script> */}
  <script type="text/javascript">
  jQuery(document).ready(function() {
    // page is now ready, initialize the calendar...
    jQuery('#calendar').fullCalendar({
            googleCalendarApiKey: 'AIzaSyDVWIu3txLG737VZuWruieFsrmZmORARTU',

            /*events : {
              googleCalendarId: 'mcgilleus.ca_pa4lbns0ipejjrvi0cn6tlknck@group.calendar.google.com',
                className: 'frosh-day-cal-events',
            },*/
            eventSources: [
            {
                googleCalendarId: 'mcgilleus.ca_pa4lbns0ipejjrvi0cn6tlknck@group.calendar.google.com',
                className: 'frosh-day-cal-events',
                backgroundColor: '#333333',
                borderColor: '#000',
            }, {
                googleCalendarId: 'mcgilleus.ca_1l0cjektggkcgjo1gnnsv152sc@group.calendar.google.com',
                className: ' frosh-night-cal-events',
                backgroundColor: '#000000',
                borderColor: '#000',
            }, {
                googleCalendarId: 'mcgilleus.ca_a5egmm3sf25gip6ma3h1s32644@group.calendar.google.com',
                className: 'frosh-non-cal-events',
                backgroundColor: '#555555',
                borderColor: '#000',
            }
            ],
            
            slotEventOverlap: false,

            header: {
                left: '',
                center: '',
                right: '',
            },

      firstDay: 2,
      defaultView: 'agendaWeek',
      defaultDate: '2017-08-29',
      slotDuration: '01:00:00',
      minTime: '09:00:00',
      maxTime: '26:30:00',
      allDaySlot: false,
      height: "auto",
      header: false,
      hiddenDays: [1],
      theme: true,
      displayEventTime: true,
    })
  });
  </script>
  <div id="calendar"></div>
  </div>
)
export default Calendar