function crearSalute(name, ci, email) {
    return { name: name, ci: ci, email: email };
}
var emailList = [
    "javascript@gmail.com",
    "abc.com",
    "mydomain.com",
    "Python@hotmail.com",
    "test",
    "anotherEmail@Kenkoo.com",
    "typescript@gmail.com",
    "mailOfPikachu@@@@@",
    "elta@kkk.co",
    "user123.......",
    "wrongEmail@gamil.com",
    "kattis.go",
    "java@gamil.com"
];
var emailValidos = emailList.filter(function (email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); });
console.log("Email validos:", emailValidos);
var persona = crearSalute("Mauricio", "12814714", "exaple@gmail.com");
console.log(persona); //{ name: 'Maur
