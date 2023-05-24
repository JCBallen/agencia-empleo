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
	direccion VARCHAR(50),
	pais VARCHAR(50),
	sede VARCHAR(50)
	-- FOREIGN KEY (idUbicacion) REFERENCES Ubicacion(idUbicacion)
	-- FOREIGN KEY (idSede) REFERENCES Sede(idSede)
);

CREATE TABLE Vacante (
	idVacante SERIAL PRIMARY KEY,
	fechaInicio DATE,
	fechaCierre DATE,
	cargo VARCHAR(50),
	salario VARCHAR(50),
	pregradoRequerido BOOLEAN,
	rangoEdad VARCHAR(50),
	puntuacionVacante INT,
	nit INT,
	idUbicacion INT,
	nombreempresa VARCHAR(50),
	direccion VARCHAR(50),
	pais VARCHAR(50),
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
	linkHojaVida VARCHAR(200),
	linkVideo VARCHAR(200),
	direccion VARCHAR(50),
	pais VARCHAR(50)
	-- FOREIGN KEY (idUbicacion) REFERENCES Ubicacion(idUbicacion),
	-- FOREIGN KEY (idHojaVida) REFERENCES HojaVida(idHojaVida),
	-- FOREIGN KEY (idVideo) REFERENCES Video(idVideo)
);

CREATE TABLE Solicitud (
	idSolicitud SERIAL PRIMARY KEY,
	fechaRealizacion DATE,
	-- estado BOOLEAN,
	-- idVacante INT,
	-- idDesempleado INT,
	-- nit BIGINT,
	cargo VARCHAR(50),
	nombreEmpresa VARCHAR(50),
	nombreDesempleado VARCHAR(50),
	-- FOREIGN KEY (idVacante) REFERENCES Vacante(idVacante),
	-- FOREIGN KEY (idDesempleado) REFERENCES Desempleado(idDesempleado),
	-- FOREIGN KEY (nit) REFERENCES Empresa(nit)
);

CREATE TABLE Agencia (
	idAgencia SERIAL PRIMARY KEY,
	usuarioAdmin VARCHAR(50),
	contrasenaAdmin VARCHAR(50)
);

-- buscar como insertar joins, ubicacion, cv y video
INSERT INTO Desempleado (usuariodesempleado ,contrasenadesempleado , nombredesempleado , profesion , telefonodesempleado, salario, puntuacionDesempleado, idUbicacion, idHojaVida, idVideo, linkHojaVida, linkVideo, direccion, pais)
VALUES
('user@gmail.com', 'user_12345', 'Jorge', 'Economista', 1234567, '$4.000.000 - $6.000.000', 5, 1, 1, 1, 'https://drive.google.com/file/d/11FMCZ059yXKpefCLX7IbKICiw-zddwl9/view?usp=share_link','https://youtu.be/jNbOe_UR2a0', 'Cra 38', 'Bogota, CO');

INSERT INTO Ubicacion (direccion, pais) VALUES  ('Cra 38' , 'Bogota, CO');

INSERT INTO HojaVida (link) VALUES ('https://drive.google.com/file/d/11FMCZ059yXKpefCLX7IbKICiw-zddwl9/view?usp=share_link');

INSERT INTO Video (link) VALUES ('https://youtu.be/jNbOe_UR2a0');

INSERT INTO Empresa (nit ,usuarioEmpresa , contrasenaEmpresa , nombreEmpresa , razonSocial, representanteLegal, telefonoEmpresa, puntuacionEmpresa, idUbicacion, idSede, direccion, pais, sede)
VALUES
(1314 , 'empresa@god.com', '123456', 'Adidas', 'Adonai', 'John Beck', 6013777777, 4, 2, 1,'Cra 178a #15-10', 'Bogota, CO','Norte');

INSERT INTO Ubicacion (direccion, pais) VALUES ('Cra 178a #15-10', 'Bogota, CO');

INSERT INTO Sede (nombreSede, idUbicacion) VALUES ('Norte', '1');

INSERT INTO Agencia (usuarioAdmin ,contrasenaAdmin)
VALUES
('admin@admin.com', 'admin_12345');

-- INSERT INTO Desempleado (usuariodesempleado ,contrasenadesempleado , nombredesempleado , profesion , telefonodesempleado)
-- VALUES
-- ('admin@gmail.com', 'admin_12345', 'ADMIN', 'Administrador', 1234567);

-- delete from desempleado where idDesempleado = 1;