function home() {
   
    option = prompt("Bienvenido al juego de tu vida.\n- Si tienes una cuenta escribe 'Entrar'.\n- Si quieres crear una cuenta escribe 'Crear'.\n- Para salir escribe 'Salir'.")

    switch (option) {
        case "Entrar":
            login()
            break;
        case "ENTRAR":
            login()
            break;
        case "Crear":
            createAccount()
            break;
        case "CREAR":
            createAccount()
            break;
        case "Salir":
            break;
        case "SALIR":
            break;
        default:
          alert("Elija una opción válida.")
          home()
    }
}

let user;
let password;

function createAccount() {
    user = prompt("Cree su nombre de usuario: ")
    password = prompt("Cree su contraseña: ")
    alert("Su cuenta fue creada correctamente")
    return home()
}

function login() {
    entryUser = prompt("Ingrese su usuario: ")
    entryPassword = prompt("Ingrese su password: ")

    if (entryUser === user && entryPassword === password && entryUser != "" && entryPassword != "") {
        alert("Bienvenido/a " + user)
        return chapter1()
    }

    alert("Usuario Invalido")
    return home()

}

function chapter1 (){
    pickCap1 = prompt(
        "Spawneas en un lugar peligroso. Y te das cuenta que estas confinado.\nEl jefe final logra encontrarte.\nLogras ver que el Jefe se duerme y tiene el libro sagrado para poder lanzar hechizos.\n\n¿Qué intentarás hacer?\nA - Intento quitarle el libro.\nB - Utilizo mi super grito!.\n\n(Escribe sólo la letra de la opción que quieres elegir)"
        )

    switch (pickCap1) {
        case "A":
            gameOver()
            break;
        case "a":
            gameOver()
            break;
        case "B":
            chapter2()
            break;
        case "b":
            chapter2()
            break;
        default:
          alert("Elija una opción válida.")
          chapter1()
    }
}

function chapter2 (){

    alert("Al gritar el Jefe final se asusta y sale volando, lo que proboca que el libro de conjuro caiga y ahora podras usarlarlo para salir de la zona! \nAhoras estas fuera de la zona y te encuentas en un mundo con una barrera que te impide salir. Al intentar abrir un portal se te hace imposible. Deberas saber cuantas veces repetir el conjuro para poder salir!...")

    pickCap2 = parseInt(prompt("Te pones a recordar y recuerdas que el jefe final en algun moneto le dijo a un compañero las veces que deberia repetir el conjuro!..."))
    
    let code = 5
    let codeTry = 1;

    while (codeTry < 3) {
        if (pickCap2 != code) {
            pickCap2 = parseInt(prompt("Te equivocaste. Te quedan " + (3 - codeTry) + " intentos."))
            codeTry = (codeTry + 1)
        }
        else {
            alert("Correcto!. Hechizo Realizado")
            return chapter3()
        }
    }

    alert("Has agotado las posibilidades. De repente el jefe vuelve con refuerzos y te vuelve a encerrar!")
    return gameOver()
}

function chapter3(){
    alert("Has logrado escapar ¡Eres libre!\n\nGracias por jugar. Vuelve pronto.")
    return home()
}

function gameOver() {
    alert("Has sido descubierto y no lograste escapar ¡Sigue intentándolo!")
    return home()
}

home()
