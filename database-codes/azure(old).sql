create table Ubicacion(
	idUbicacion int identity(1,1) primary key not null,
	pais varchar(50),
	ciudad varchar(50),
);

create table Sede(
	idSede int identity(1,1) primary key not null,
	nombreSede varchar(50),
	-- Llaves Externas
	idUbicacion int,
	foreign key (idUbicacion) references Ubicacion(idUbicacion)
);

create table HojaVida(
	idHojaVida int identity(1,1) primary key not null,
	datosPersonales varchar(300),
	perfilProfesional varchar(300),
	formacion varchar(300),
	experiencia varchar(300),
	referencias varchar(300),
	nombreArchivo varchar(100), --Almacena el nombre del archivo 
	tipo varchar(50), --Almacena el tipo de archivo, como "video" o "pdf"
	link varchar(200), --Almacena la URL del archivo en Azure Blob Storage.
);

create table Video(
	idVideo int identity(1,1) primary key not null,
	nombreVideo varchar(100), --Almacena el nombre del archivo 
	tipo varchar(50), --Almacena el tipo de archivo, como "video" o "pdf"
	link varchar(200), --Almacena la URL del archivo en Azure Blob Storage.
);

create table Empresa(
	nit int primary key not null,
	usuarioEmpresa varchar(50),
	contraseñaEmpresa varchar(50),
	nombreEmpresa varchar(50),
	razonSocial varchar(50),
	representanteLegal varchar(50),
	telefonoEmpresa int,
	puntuacionEmpresa int,
	-- Llaves externas
	idUbicacion int,
	foreign key (idUbicacion) references Ubicacion(idUbicacion),
	idSede int,
	foreign key (idSede) references Sede(idSede)
);

create table Vacante (
	idVacante int identity(1,1) primary key not null,
	fechaInicio date,
	fechaCierre date,
	cargo varchar(50),
	salario int,
	pregradoRequerido bit,
	rangoEdad varchar(50),
	puntuacionVacante int,
	-- Llaves externas
	nit int,
	foreign key (nit) references Empresa (nit),
	idUbicacion int,
	foreign key (idUbicacion) references Ubicacion(idUbicacion)
);

create table Desempleado(
	idDesempleado int identity(1,1) primary key not null,
	usuarioDesempleado varchar(50),
	contraseñaDesempleado varchar(50),
	nombreDesempleado varchar,
	telefonoDesempleado int,
	profesion varchar(50),
	salario int,
	puntuacionDesempleado int,
	--Llaves externas
	idUbicacion int,
	foreign key (idUbicacion) references Ubicacion(idUbicacion),
	idHojaVida int,
	foreign key (idHojaVida) references HojaVida(idHojaVida),
	idVideo int,
	foreign key (idVideo) references Video(idVideo)
);

create table Solicitud(
	idSolicitud int identity(1,1) primary key not null,
	fechaRealizacion date,
	estado bit,
	-- Llaves externas
	idVacante int,
	foreign key (idVacante) references Vacante(idVacante),
	idDesempleado int,
	foreign key (idDesempleado) references Desempleado(idDesempleado),
	nit int,
	foreign key (nit) references Empresa(nit)
);

create table Agencia(
	idAgencia int identity(1,1) primary key not null,
	usuarioAdmin varchar(50),
	contraseñaAdmin varchar(50)
);