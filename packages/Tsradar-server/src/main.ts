import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';

const PORT = 3030;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('v1');

    const config = new DocumentBuilder()
        .addTag('Tsr')
        .setTitle('Tsradar')
        .setDescription('Tsradar API description')
        .setVersion('1.0')
        .addApiKey(
            {in: 'header', type: 'http', scheme: 'bearer', bearerFormat: 'JWT'},
            'access_token')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/', app, document);

    app.useGlobalFilters(); // TODO add globalfilter
    app.enableCors();
    console.log(`start server at http://localhost:${PORT}`);
    await app.listen(PORT);
}

bootstrap();
