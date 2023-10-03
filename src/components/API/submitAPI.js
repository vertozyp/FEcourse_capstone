/*
I had to craft my own API mock, because given
"https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"
was 404 not found.
*/

export default function submitAPI () {
    const result = Math.random() * 10;
    if (result > 5) return true;
    else return false;
}