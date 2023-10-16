# Etapa 1: Construir la aplicación
FROM openjdk:17-jdk-slim as build
WORKDIR /app
COPY build.gradle settings.gradle gradlew /app/
COPY gradle /app/gradle
COPY src /app/src
RUN ./gradlew clean build

# Etapa 2: Empaquetar la aplicación en una imagen mínima de Java
FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=build /app/build/libs/practica-2-0.0.1-SNAPSHOT.jar /app/practica-2-0.0.1-SNAPSHOT.jar

# Exponer el puerto de la aplicación
EXPOSE 8080

# Configurar una variable de entorno para el puerto
ENV PORT=8080

# Ejecutar la aplicación
CMD ["java", "-jar", "practica-2-0.0.1-SNAPSHOT.jar", "--server.port=${PORT}"]
