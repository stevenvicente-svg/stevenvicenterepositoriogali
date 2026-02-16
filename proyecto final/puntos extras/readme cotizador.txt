* Cotizador automático TK-U

Este proyecto automatiza la cotización de seguros para la empresa TK-U.  
El programa calcula una cotización a partir de un precio base y aplica recargos según condiciones del asegurado.

**¿Cómo funciona?
- El programa solicita los datos del asegurado mediante `prompt()`.
- Genera cotizaciones repetidamente hasta que el usuario escriba **"Salir"** en el nombre.
- Muestra un desglose de recargos y el precio final con `alert()`.

***Reglas importantes a considerar
1. **Mayor de edad:** solo se cotiza si el asegurado tiene **18 años o más**.
2. **Recargos por edad (asegurado y cónyuge):**
   - 18 a 24 años: 10% del precio base
   - 25 a 49 años: 20% del precio base
   - 50 o más: 30% del precio base
3. **Recargo por hijos:** 20% del precio base por cada hijo/hija.
4. **Recargo por propiedades:** 35% de la cotización por cada propiedad.
5. **Recargo por salario:** 5% sobre el salario del asegurado.

****Archivos incluidos
- `proyecto.js`: solución completa del cotizador.
- `1_descripcion_problema.txt`: descripción del problema en mis palabras.
- `2_algoritmo.txt`: algoritmo del procedimiento.
- `README.md`: documentación del proyecto.

*****¿Qué se podría mejorar?
- Validaciones más estrictas (por ejemplo, obligar a responder solo "si/no").
- Interfaz más amigable (HTML con formulario en lugar de `prompt()` y `alert()`).
- Separar el cálculo en funciones para mantener el código más ordenado y reutilizable.
- Guardar historial de cotizaciones en pantalla o en un archivo.
