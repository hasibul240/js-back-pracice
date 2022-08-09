const names = ['mahfuz', 'jihad', 'alam', 'sakib', 'rohim', 'mahfuz', 'jihad', 'mahfuz', 'jihad', 'alam', 'sakib', 'jubaer', 'hanif', 'rohman', 'jafor', 'akkas'];
function findUniqueName(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++){
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}
const uniquename = findUniqueName(names);
// console.log(uniquename);
let sum=0; 
for( let i = 0; i<=3;i++){ 
sum = sum + i; 
}
console.log(sum);