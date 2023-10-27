package principal.brockermensajeria;

public class SensorData {

    private String fechaGeneración;
    private int IdDispositivo;
    private double temperatura;
    private double humedad;



    public String getFechaGeneración() {
        return fechaGeneración;
    }

    public void setFechaGeneración(String fechaGeneración) {
        this.fechaGeneración = fechaGeneración;
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
