moment.locale('es', {
    months: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "augosto", "septiembre", "octubre", "noviembre", "diciembre"],
    weekdays: ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"],
    longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY LT",
        LLLL: "dddd D MMMM YYYY LT"
    },
    calendar: {
        sameDay: "[mismo dia] LT",
        nextDay: '[dia siguente] LT',
        nextWeek: 'dddd [proxima semana] LT',
        lastDay: '[dia pasada] LT',
        lastWeek: 'dddd [semana pasada] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: "futuro %s",
        past: "pasado %s",
        s: "segundo",
        m: "un minuto",
        mm: "%d minutos",
        h: "una hora",
        hh: "%d horas",
        d: "un dia",
        dd: "%d dias",
        M: "un mes",
        MM: "%d meses",
        y: "un ano",
        yy: "%d anos"
    },
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4  // The week that contains Jan 4th is the first week of the year.
    }
});