# Etapa de compilación
FROM openjdk:17-alpine as builder
WORKDIR /crud-simple
COPY . /crud-simple
RUN ./gradlew build

# Etapa de producción
FROM openjdk:17-alpine
WORKDIR /app
COPY --from=builder /crud-simple/build/libs/crud-simple-0.0.1-SNAPSHOT.jar /app/crud-simple.jar
ARG PORT=8030
ENV PORT_ENV=$PORT
EXPOSE $PORT
VOLUME /app/log/crud-simple
CMD ["sh", "-c", "java -jar -Dserver.port=${PORT_ENV} /app/crud-simple.jar"]
#CMD ["java", "-jar", "-Dserver.port=${PORT_ENV}", "app.jar"]