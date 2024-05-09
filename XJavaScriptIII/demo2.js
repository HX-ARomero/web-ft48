function sistemaAutenticación() {
  const usuarios = [
    { nombre: "Lisa", pass: "1234" },
    { nombre: "Bart", pass: "abcd" },
  ];

  return {
    validarCredenciales: (nombre, pass) => {
      const usuarioActual = usuarios.find(
        (usuario) => usuario.nombre === nombre
      );
      return usuarioActual && usuarioActual.pass === pass;
    },
    cambiarPass: (nombre, passActual, passNuevo) => {
      const usuarioActual = usuarios.find(
        (usuario) => usuario.nombre === nombre
      );
      if (usuarioActual && usuarioActual.pass === passActual) {
        usuarioActual.pass = passNuevo;
        return "Contraseña modificada";
      }
      return "faltan datos";
    },
  };
}

const sistema01 = sistemaAutenticación();
console.log(sistema01.validarCredenciales("Lisa", "1234"));
console.log(sistema01.validarCredenciales("Bart", "otroPass"));
console.log(sistema01.cambiarPass("Bart", "abcd", "otroPass"));
console.log(sistema01.validarCredenciales("Bart", "otroPass"));
