# Alimentare
Sitio de recetas y dietética. Con conexión a base de datos para subir recetas mediante formulario.
Control de acceso mediante log de usuarios, tambien conectado a base de datos.
Permite login con Google.
## [Tablero Kanban](https://trello.com/b/fReIANos/alimentare)
## Tecnologías
- React
- Bootstrap
- Firebase
- Consumo de API [Nutritionix](https://www.nutritionix.com/database)
  
Por ahora las variables de entorno permiten usar firebase. Pueden desencriptarse como se indica, o bien usar otras extraidas de cuentas propias de firebase y Nutritionix.

## Para desencriptar las variables de entorno
### Git-crypt
Puedes instalarlo ejecutando el siguiente comando en Linux o en Windows (utilizando WSL): ``sudo apt-get install git-crypt``.

### GPG
GPG es un sistema de encriptación utilizado para crear, importar, exportar claves públicas y privadas. Puedes descargarlo desde aquí: https://gnupg.org/download/index.html. Solo funciona en una terminal de comandos.

### Agregar variables
- Usa GPG para crear tu clave ejecutando este comando en tu terminal de comandos preferida: ``gpg --generate-key``.
- Exporta tu clave pública a un archivo con este comando: ``gpg --export -a TU_NOMBRE_REAL > public.key``.
- Comparte el archivo de clave generada con el usuario de github mmaquina.

Una vez que mmaquina agregue tu clave a la lista de usuarios, ejecuta este comando: ``git-crypt unlock`` para descifrar tus variables de entorno.

berserl

netlifly
