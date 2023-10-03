/*
I had to craft my own API mock, because given
"https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"
was 404 not found.
*/

export default function fetchAPI (date) {

        const times = [];
        const count = Math.ceil(parseInt(date.slice(5, 7))/2);

        for (let i=0; i<count; i++){
            times.push((Math.ceil(parseInt(date.slice(8))/8)+12+i) + ":00");
        }

        return times;
}