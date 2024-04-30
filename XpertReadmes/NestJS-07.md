# Nest JS - Nest JS File Upload

[Volver a Inicio](../README.md)

## Ventajas de utilizar Servicios en la Nube

🎯 Evitamos sobrecargar la transferencia de nuestro Servidor
🎯 Delegamos el manejo al servicio en la nube y sólo manejaremos la URL

### Instalaciones requeridas

```bash
npm install cloudinary buffer-to-stream
```

### Archivo de Configuración

```ts
import { v2 as cloudinary } from 'cloudinary';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig({ path: '.development.env' });

export const CloudinaryConfig = {
  provide: 'CLOUDINARY',
  useFactory: () => {
    return cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  },
};
```

### CloudinaryService

- No olvidar declarar "CloudinaryConfig" y "CloudinaryService" al módulo!

```ts
import { Injectable } from '@nestjs/common';
import { UploadApiResponse, v2 } from 'cloudinary';
import toStream = require('buffer-to-stream');

@Injectable()
export class CloudinaryService {
  async uploadImage(file: Express.Multer.File): Promise<UploadApiResponse> {
    return new Promise((resolve, reject) => {
      const upload = v2.uploader.upload_stream(
        { resource_type: 'auto' },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        },
      );
      toStream(file.buffer).pipe(upload);
    });
  }
}
```

### Importante

🎯 Cloudinary nos permite Guardar cualquier tipo de archivos.
🎯 Debemos restringir los formatos aceptados, tamaño máximo, etc.
🎯 Lo haremos mediante un PIPE de validación.
