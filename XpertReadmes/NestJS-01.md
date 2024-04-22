# Nest JS - Backend Architecture

[Volver a Inicio](../README.md)

## ESCALABILIDAD

#### ESCALABILIDAD VERTICAL

- El escalado vertical tiene mucho que ver con el **hardware del servidor** de la aplicación. Se consigue de una manera muy sencilla: **aumentando los recursos del servidor**. Principalmente, en lo que respecta a la capacidad de procesamiento, memoria y almacenamiento.
- Este tipo de escalado es bastante **sencillo de alcanzar**, ya que únicamente requiere una intervención en el hardware del equipo, aumentando los recursos o incluso cambiando completamente de servidor. Sin embargo, el beneficio que se puede llegar a obtener también es limitado.
- Ventajas de la escalabilidad vertical:
  - **Facilidad de implementación y configuración**. Gestionar un único servidor suele ser menos complejo que administrar una red de servidores interconectados, lo que puede facilitar la tarea para equipos más pequeños.
  - **No requiere un diseño específico en la aplicación y su arquitectura para funcionar**. Puede adaptarse a sistemas existentes sin modificaciones extensas.
  - **Puede ser más económico**. En algunos casos, la escalabilidad vertical puede ser más económica, especialmente en entornos donde agregar recursos a un servidor existente resulta más rentable que implementar una infraestructura horizontal más amplia.
  - **Mejora en el rendimiento**. Al proporcionar más recursos a un servidor existente, la escalabilidad vertical puede resultar en un aumento inmediato de rendimiento, ideal para aplicaciones que requieren una gran capacidad de procesamiento.
- Desventajas de la escalabilidad vertical
  - **Está limitado a la capacidad de un único servidor**. A medida que se escalan verticalmente, hay límites físicos para mejorar un solo servidor. Eventualmente, se alcanzará un punto en el que no se puedan agregar más recursos.
  - **No aporta beneficios en relación a la alta disponibilidad**. Añadir recursos a un servidor en funcionamiento puede requerir tiempos de inactividad o interrupciones temporales, lo que puede afectar la disponibilidad del servicio.

### ESCALABILIDAD HORIZONTAL

- Por su parte, la escalabilidad horizontal se consigue **aumentando el número de servidores que atienden una aplicación**. Para ello, un grupo de distintos servidores se configura para atender las peticiones de manera conjunta (es lo que se denomina **cluster**) y la carga de trabajo se distribuye entre ellos a través de un **balanceador**. Cada uno de esos servidores se conoce como **nodo** y el escalado se realiza simplemente agregando un nuevo nodo al cluster.
- Este escalado es bastante más potente, pero sin embargo **requiere una mayor configuración** para poder realizarse, no solamente para crear la red de servidores de un cluster, sino también realizando una arquitectura de aplicación, a nivel de software, capaz de adaptarse a este tipo de funcionamiento.
- Ventajas de la escalabilidad horizontal
  - **El escalado es prácticamente infinito**. La principal ventaja de la escalabilidad horizontal radica en su flexibilidad. Al agregar nuevos servidores según sea necesario, el sistema puede adaptarse a las demandas cambiantes sin interrupciones significativas.
  - **Permite alta disponibilidad**. Distribuir la carga entre varios servidores evita cuellos de botella y garantiza un rendimiento sostenible incluso en momentos de alta demanda.
  - **Permite un correcto balanceo de carga entre los servidores**. Al permitir un correcto balance de carga entre los servidores, se asegura una distribución equitativa de la carga y se evita la sobrecarga de un servidor específico.
  - **Costos controlados**. Aunque puede haber costos iniciales asociados con la adición de servidores, la escalabilidad horizontal tiende a ser más rentable a largo plazo, ya que solo se utilizan recursos cuando son necesarios.
- Desventajas de la escalabilidad horizontal
  - **Requiere mayor configuración, que puede llegar a ser difícil de realizar**. La implementación de la escalabilidad horizontal a menudo requiere una arquitectura específica y una configuración cuidadosa para garantizar un rendimiento óptimo.
  - **Necesidad de un diseño específico**. Necesita que la aplicación esté construida de modo que soporte escalabilidad vertical, lo que puede requerir modificaciones en el diseño original.
  - **Opción menos económica**. Aunque más potente y de mejor rendimiento, suele ser una opción menos económica, ya que requiere de varios servidores.
