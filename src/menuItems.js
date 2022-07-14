import todo from './images/icon-todo.svg'
import reminder from './images/icon-reminders.svg'
import planning from './images/icon-planning.svg'
import calendar from './images/icon-calendar.svg'

export const menuItems = [
    {
        title: "Features",
        submenu: [
            {
                icon: todo,
                title: "Todo List"
            }, {
                icon: calendar,
                title: "Calendar"
            }, {
                icon: reminder,
                title: "Reminders"
            }, {
                icon: planning,
                title: "Planning"
            }],
    },
    {
        title: "Company",
        submenu: [{
            title: "History"
        }, {
            title: "Our Team"
        }, {
            title: "Blog"
        }],
    },
    {
        title: "Carrers",
    },
    {
        title: "About",
    }
];