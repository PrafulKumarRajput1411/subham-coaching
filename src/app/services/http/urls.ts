export const enviroment = {
    production: true,
    version: "Appversion v-0-3"
};

export class EnviourmentConstants {
    public static DOMAINPATH = 'https://shubham-coaching-backend.vercel.app'
}
export class ConstantValues {
    public static whatsAppNumber = '6398276273';
}
export class ServerUrls {
    public static sendContactUsEmail = { url: '/api/sendEmail', method: "POST" };
    public static getData = { url: '/api/getData', method: 'GET' }
}