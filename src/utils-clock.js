
const ejecutarDespues = (milis,accion) =>
{
	setTimeout (accion, milis )
}

const ejecutarRepetido = (milis,accion) =>
{
	return setInterval( accion, milis )
}

export default {ejecutarDespues, ejecutarRepetido }
