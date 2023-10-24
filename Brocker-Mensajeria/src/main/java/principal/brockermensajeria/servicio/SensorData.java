package principal.brockermensajeria.servicio;

public class SensorData {
    private String fechaGeneracion;
    private int IdDispositivo;
    private double temperatura;
    private double humedad;

    public String getFechaGeneracion() {
        return fechaGeneracion;
    }

    public void setFechaGeneracion(String fechaGeneracion) {
        this.fechaGeneracion = fechaGeneracion;
    }

    public int getIdDispositivo() {
        return IdDispositivo;
    }

    public void setIdDispositivo(int idDispositivo) {
        IdDispositivo = idDispositivo;
    }

    public double getTemperatura() {
        return temperatura;
    }

    public void setTemperatura(double temperatura) {
        this.temperatura = temperatura;
    }

    public double getHumedad() {
        return humedad;
    }

    public void setHumedad(double humedad) {
        this.humedad = humedad;
    }


}
