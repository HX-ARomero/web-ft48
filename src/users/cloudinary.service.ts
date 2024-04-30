import { Injectable } from '@nestjs/common';
import { UploadApiResponse, v2 } from 'cloudinary';
import toStream = require('buffer-to-stream');
  
@Injectable()
export class CloudinaryService {
	async uploadImage(
		file: Express.Multer.File
	): Promise<UploadApiResponse> {
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