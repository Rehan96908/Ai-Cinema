import 'module-alias/register';
import app from '@/app';

const port: number = Number(process.env.PORT) || 8080;

app.listen(port, () => {
  console.log(`[${port}] server running`);
});
