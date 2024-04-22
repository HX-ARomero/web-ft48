# Configuración de Nest JS

[Volver a Inicio](../README.md)

## ❌ Error lf/crlf

- Pueden generarse conflictos con Eslint/Prettier al finalizar cada línea.

### Causa

- LF (Line Feed) y CRLF (Carriage Return + Line Feed) son secuencias de control utilizadas en sistemas informáticos para representar el final de una línea de texto.
- LF (Line Feed): Es un carácter de control que se utiliza para indicar el final de una línea de texto en sistemas Unix y Unix-like (como Linux y macOS). En ASCII, el código de LF es 10 (0x0A en hexadecimal). Cuando se encuentra un LF, el cursor de escritura se mueve a la siguiente línea.
- CRLF (Carriage Return + Line Feed): Es una combinación de dos caracteres de control que se utiliza para indicar el final de una línea de texto en sistemas Windows y DOS. El Carriage Return (retorno de carro) es un carácter que mueve el cursor al principio de la línea, y el Line Feed es el carácter que indica el final de la línea. En ASCII, el código de Carriage Return es 13 (0x0D) y el código de Line Feed es 10 (0x0A).
- En resumen, LF se utiliza en sistemas Unix para indicar el final de una línea de texto, mientras que CRLF se utiliza en sistemas Windows y DOS para el mismo propósito. Estas diferencias en el manejo de los saltos de línea a veces pueden causar problemas de compatibilidad al trabajar con archivos de texto en diferentes sistemas operativos.

### Soluciones posibles

1. **Configuración de Prettier**: En el ARCHIVO de configuración ".prettierrc" o en la sección de configuración de Prettier en "package.json":

```js
{
	"singleQuote": true,
	"trailingComma": "all",
	"endOfLine": "crlf"
}
```

2. **Configuración de ESLint**: En el ARCHIVO de configuración de ESLint (por lo general, ".eslintrc.json o eslint.config.js" ), puedes agregar reglas específicas para el estilo de fin de línea. Por ejemplo, puedes utilizar la regla "linebreak-style" para especificar el estilo de fin de línea que deseas utilizar en tus archivos.

```json
module.exports = {
	// ----- ----- ----- -----
	"rules": {
		// ----- ----- ----- -----
		"linebreak-style": ["error", "unix"],
	}
}
```

- Al configurar Prettier y ESLint de esta manera, estarás estableciendo reglas claras para el estilo de fin de línea en tu proyecto de NestJS. Esto ayudará a mantener la consistencia en el formato de tus archivos y a prevenir problemas relacionados con LF/CRLF. Recuerda ejecutar Prettier y ESLint regularmente en tu proyecto para aplicar las reglas de formato y estilo definidas en la configuración. ¡Espero que esta información te sea útil! Si tienes alguna otra pregunta o necesitas más ayuda, no dudes en decírmelo.

3. Modificando el "ARCHIVO" "eslintrc.js"

```js
	rules: {
		// ----- ----- ----- -----
		'prettier/prettier': 'off',
	},
};
```

4. En "Cada ARCHIVO" seleccionar "CRLF (Select End of Line Sequence)" => LF
