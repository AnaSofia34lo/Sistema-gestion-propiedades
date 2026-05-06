import 'dotenv/config';
import { app } from './infrastructure/server';

const PORT = process.env.PORT || 3001;

// Guardamos la instancia del servidor para evitar que el proceso se cierre
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en: http://localhost:${PORT}`);
});
