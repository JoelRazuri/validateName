/*
    Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") 
    devolverá verdadero.
*/

const validateName = (name = "") => {
    if (!name) return console.warn("No ingresaste un nombre");
    if (typeof name !== "string") return console.error(`El valor '${name}' ingreasdo, NO es una cadena de texto`);

    let expReg = /^[A-Za-zÑñÁÉÍÓÚáéíóúÜü\s]+$/g.test(name);

    return (expReg)
        ? console.info(`'${name}', es un nombre válido`)
        : console.warn(`'${name}', NO es un nombre válido`);
}

console.info("EJERCICIO 19");
validateName();
validateName(true);
validateName("Joel Rázuri");
validateName("J03l Rázur!");





