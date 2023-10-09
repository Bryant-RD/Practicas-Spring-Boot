package com.example.practica2.servicios;

import com.example.practica2.entidades.Endpoint;
import com.example.practica2.repo.EndpointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class EndpointService {

    private final EndpointRepository endpointRepository;

    @Autowired
    public EndpointService(EndpointRepository endpointRepository) {
        this.endpointRepository = endpointRepository;
    }

    public Endpoint crearEndpoint(Endpoint endpoint) {
        // Implementa la lógica para crear un nuevo endpoint
        return endpointRepository.save(endpoint);
    }

    public Endpoint obtenerEndpointPorId(String id) {
        // Implementa la lógica para obtener un endpoint por su ID
        return endpointRepository.findById(Long.valueOf(id))
                .orElseThrow(() -> new IllegalArgumentException("Endpoint no encontrado"));
    }

    public List<Endpoint> obtenerTodosLosEndpoints() {
        // Implementa la lógica para obtener todos los endpoints
        return endpointRepository.findAll();
    }

    public Endpoint actualizarEndpoint(String id, Endpoint endpoint) {
        // Implementa la lógica para actualizar un endpoint por su ID
        if (!endpointRepository.existsById(Long.valueOf(id))) {
            throw new IllegalArgumentException("Endpoint no encontrado");
        }
        endpoint.setId(Integer.parseInt(id));
        return endpointRepository.save(endpoint);
    }

    public void eliminarEndpoint(String id) {
        // Implementa la lógica para eliminar un endpoint por su ID
        if (!endpointRepository.existsById(Long.valueOf(id))) {
            throw new IllegalArgumentException("Endpoint no encontrado");
        }
        endpointRepository.deleteById(Long.valueOf(id));
    }
}


//import com.example.practica2.entidades.Endpoint;
//import com.example.practica2.repo.EndpointRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//@Service
//public class EndpointService {
//
//    private final EndpointRepository endpointRepository;
//
//    @Autowired
//    public EndpointService(EndpointRepository endpointRepository) {
//        this.endpointRepository = endpointRepository;
//    }
//
//    public Endpoint crearEndpoint(Endpoint endpoint) {
//        return endpointRepository.save(endpoint);
//    }
//
//    public Endpoint obtenerEndpointPorId(Long id) {
//        return endpointRepository.findById(id).orElse(null);
//    }
//
//    public void eliminarEndpointPorId(Long id) {
//        if (endpointRepository.existsById(id)) {
//            endpointRepository.deleteById(id);
//        } else {
//            throw new IllegalArgumentException("El endpoint con ID " + id + " no existe.");
//        }
//    }
//}