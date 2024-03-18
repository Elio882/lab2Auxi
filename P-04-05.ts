function crearSalute(name: string, ci: string, email: string): { name: string, ci: string, email: string } {
    return { name, ci, email };
}

const emailList= [
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
const emailValidos = emailList.filter(email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
console.log("Email validos:", emailValidos);
const persona = crearSalute("Mauricio","12814714","exaple@gmail.com");
console.log(persona); //{ name: 'Maur