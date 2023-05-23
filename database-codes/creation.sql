SELECT pg_terminate_backend(pg_stat_activity.pid) 
FROM pg_stat_activity 
WHERE pg_stat_activity.datname = 'agencia_empleo' 
AND pid <> pg_backend_pid();

\c taller2

DROP DATABASE agencia_empleo;

CREATE DATABASE agencia_empleo;

\c agencia_empleo

CREATE TABLE Ubicacion (
	idUbicacion SERIAL PRIMARY KEY,
	direccion VARCHAR(50),
	pais VARCHAR(50)
);

CREATE TABLE Sede (
	idSede SERIAL PRIMARY KEY,
	nombreSede VARCHAR(50),
	idUbicacion INT,
	FOREIGN KEY (idUbicacion) REFERENCES Ubicacion(idUbicacion)
);

CREATE TABLE HojaVida (
	idHojaVida SERIAL PRIMARY KEY,
	datosPersonales VARCHAR(300),
	perfilProfesional VARCHAR(300),
	formacion VARCHAR(300),
	experiencia VARCHAR(300),
	referencias VARCHAR(300),
	nombreArchivo VARCHAR(100),
	tipo VARCHAR(50),
	link VARCHAR(200)
);

CREATE TABLE Video (
	idVideo SERIAL PRIMARY KEY,
	nombreVideo VARCHAR(100),
	tipo VARCHAR(50),
	link VARCHAR(200)
);

CREATE TABLE Empresa (
	nit BIGINT PRIMARY KEY,
	usuarioEmpresa VARCHAR(50),
	contrasenaEmpresa VARCHAR(50),
	nombreEmpresa VARCHAR(50),
	razonSocial VARCHAR(50),
	representanteLegal VARCHAR(50),
	telefonoEmpresa BIGINT,
	puntuacionEmpresa INT,
	idUbicacion INT,
	idSede INT,
	FOREIGN KEY (idUbicacion) REFERENCES Ubicacion(idUbicacion),
	FOREIGN KEY (idSede) REFERENCES Sede(idSede)
);

CREATE TABLE Vacante (
	idVacante SERIAL PRIMARY KEY,
	fechaInicio DATE,
	fechaCierre DATE,
	cargo VARCHAR(50),
	salario INT,
	pregradoRequerido BOOLEAN,
	rangoEdad VARCHAR(50),
	puntuacionVacante INT,
	nit INT,
	idUbicacion INT,
	FOREIGN KEY (nit) REFERENCES Empresa(nit),
	FOREIGN KEY (idUbicacion) REFERENCES Ubicacion(idUbicacion)
);

CREATE TABLE Desempleado (
	idDesempleado SERIAL PRIMARY KEY,
	usuarioDesempleado VARCHAR(50),
	contrasenaDesempleado VARCHAR(50),
	nombreDesempleado VARCHAR,
	profesion VARCHAR(50),
	telefonoDesempleado BIGINT,
	salario VARCHAR(50),
	puntuacionDesempleado INT,
	idUbicacion INT,
	idHojaVida INT,
	idVideo INT,
	FOREIGN KEY (idUbicacion) REFERENCES Ubicacion(idUbicacion),
	FOREIGN KEY (idHojaVida) REFERENCES HojaVida(idHojaVida),
	FOREIGN KEY (idVideo) REFERENCES Video(idVideo)
);

CREATE TABLE Solicitud (
	idSolicitud SERIAL PRIMARY KEY,
	fechaRealizacion DATE,
	estado BOOLEAN,
	idVacante INT,
	idDesempleado INT,
	nit BIGINT,
	FOREIGN KEY (idVacante) REFERENCES Vacante(idVacante),
	FOREIGN KEY (idDesempleado) REFERENCES Desempleado(idDesempleado),
	FOREIGN KEY (nit) REFERENCES Empresa(nit)
);

CREATE TABLE Agencia (
	idAgencia SERIAL PRIMARY KEY,
	usuarioAdmin VARCHAR(50),
	contrasenaAdmin VARCHAR(50)
);

-- buscar como insertar joins, ubicacion, cv y video
INSERT INTO Desempleado (usuariodesempleado ,contrasenadesempleado , nombredesempleado , profesion , telefonodesempleado)
VALUES
('user@gmail.com', 'user_12345', 'USER', 'Usuario', 1234567);

INSERT INTO Agencia (usuarioAdmin ,contrasenaAdmin)
VALUES
('admin@admin.com', 'admin_12345');

-- INSERT INTO Desempleado (usuariodesempleado ,contrasenadesempleado , nombredesempleado , profesion , telefonodesempleado)
-- VALUES
-- ('admin@gmail.com', 'admin_12345', 'ADMIN', 'Administrador', 1234567);

-- delete from desempleado where idDesempleado = 1;