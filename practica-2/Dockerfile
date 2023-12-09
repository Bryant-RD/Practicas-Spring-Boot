# Etapa 1: Construir la aplicación
FROM gradle:7.3.3-jdk17 as build
WORKDIR /app
COPY build.gradle settings.gradle /app/
COPY gradle /app/gradle
COPY src /app/src
RUN gradle clean build

# Etapa 2: Empaquetar la aplicación en una imagen mínima de Java
FROM openjdk:17-alpine
WORKDIR /app
COPY --from=build /app/build/libs/practica-2-0.0.1-SNAPSHOT.jar /app/practica-2-0.0.1-SNAPSHOT.jar

# Exponer el puerto de la aplicación
EXPOSE 8080

# Configurar una variable de entorno para el puerto
ENV PORT=8080

# Ejecutar la aplicación
CMD ["java", "-jar", "practica-2-0.0.1-SNAPSHOT.jar", "--server.port=${PORT}"]

