export interface CreditModule {
  coin: string;
  interest_rate: string;
  periodo_de_capitalizacion: string;
  capitalizacion_especial: number;
  plazo_tasa_interes: string;
  plazo_interes_especial: number;
  interest_rate_percentage: number;
  cuota_inicial_percentage: number;
  cost_vehicle: number;
  fecha_prestamo: string; // Cambié el tipo de fecha a string, ajusta según tus necesidades
  term_of_loan: number;
  seguro_desgravamen: number;
  vfmg_percentage: number;
  credit_percentage: number;
  type_grace_period: string;
  grace_period: number;
  cok: number;
  costos_notariales: number;
  costos_notariales_bool: boolean;
  costos_registrales: number;
  costos_registrales_bool: boolean;
  tasacion: number;
  tasacion_bool: boolean;
  estudio_de_titulos: number;
  estudio_de_titulos_bool: boolean;
  otros_costes: number;
  otros_costes_bool: boolean;
  portes: number;
  gastos_administrativos: number;
  comision: number;
  penalidad: number;
  comunicacion: number;
  seguridad: number;
  otros: number;
  cliendId: number; // ¿Hay un error tipográfico aquí? Debería ser "clientId"
  van: number;
}