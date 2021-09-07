# auto-cookie
Herramienta para automatizar clicks y compras en el videojuego Cookie Clicker en su versión de navegador.

INSTRUCCIONES DE USO:

1.- Copia todo el código del archivo AutoCookie.js.
2.- Ve a https://orteil.dashnet.org/cookieclicker/
3.- Haz click derecho y dale a inspeccionar.
4.- Ve a consola y pega todo el código fuente de AutoCookie, dale a enter.
5.- Para iniciar AutoCookie, escribe init(), dentro de esta función deberéis escribir por orden, el tiempo en minutos cada cuanto quieres que
realice una compra, seguidamente de los productos por orden de prioridad.

Ejemplo de uso:
init(7,8,7,6,1);  

En el ejemplo anterior se iniciará AutoCookie, realizando compras cada 7 minutos; Comprando los productos por orden de prioridad
de izquierda a derecha (mas a la izquierda mas prioridad, mas comprará de ese producto si es posible) por lo que comprará más
cantidad del producto numero 7 que del numero 8 y así.

PRODUCTOS Y IDENTIFICADORES:
CURSOR: 0
GRANDMA: 1
FARM: 2
MINE: 3
FACTORY: 4
BANK: 5
TEMPLE:6
WIZARD TOWER: 7
SHIPMENT: 8
Alchemy lab : 9
Portal : 10

FUNCIÓN CLICKERCOOKIE

Si quieres crear tantos cursor como prefieras, simplemente realiza el paso 3, ve a la consola y escribe clickerCookie(numeroCursors)
donde numeroCursors son el número de cursors que quieres que cree. (Si te pasas de cifra crasheará el navegador, ve testeando según tu preferencia).
Ejemplo de uso:
clickerCookie(15000); 
Se crearán 15000 cursors que irán clicando a la galleta.
