# Development
Pasos para levantar la aplicación en desarrollo

* Levantar la base de datos
```
docker compose up -d
```

# Prisma Commands
```
npx prisma init
npx prisma migrate dev
npx prisma generate 
```

* Renombrar .env.template a .env y llenar las variables de entorno

* Ejecutar SEED
```
http://localhost:3000/api/seed
```