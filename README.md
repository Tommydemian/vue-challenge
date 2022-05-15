### Challenge

## Instrucciones para correr este repositorio:
---

- Clonar el repositorio en su computadora.

- Ingresar al directorio/ carpeta challenge desde la consola y ejectuar el comando **npm i**.

- Ingrese el comando **npm run serve**.

- Dirigirse a [http://localhost:8080]() que es donde se iniciará la aplicación.

## Descripción:
---
- Se trata de una breve página web que cuenta con 3 vistas principales, en la home (`landing page`) se pueden observar 3 inputs con *real-time validations* hechos sin plugins, utilizando la OPTIONS API y el v-model para generar el doble bind. La razón por la cual se uso la OPTIONS API y no la COMPOSITION API es debido a la velocidad de respuesta frente al evento blur.
 
- En la ruta /countries se despliega un dropdown (`select element`) con todos los paises, anteponiendo su codigo => data consunmida de un endPoint.
 
- La ultima ruta disponible /faq contiene un componente titulado Accordion que maneja Props y togglea bloques de respuestas. 

Dev: Tomas Gil Amoedo 
