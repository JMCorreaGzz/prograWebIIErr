import Perfiles from './Perfiles';

const PerfilesList = ({
	perfiles
}) => {
	return (
		<div>
			{perfiles.map((perfil) => (
				<Perfiles
                    img={perfil.img}
                    nombre={perfil.nombre}
                    tablero={perfil.tablero}
                    id={perfil.id}
				/>
			))}
		</div>
	);
};

export default PerfilesList;