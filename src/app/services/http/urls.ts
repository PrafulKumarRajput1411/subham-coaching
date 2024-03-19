export const enviroment = {
    production: true,
    version: "Appversion v-0-3"
};

export class EnviourmentConstants {
    // public static DOMAINPATH = 'https://shubham-coachingbackend.vercel.app'
    public static DOMAINPATH = 'http://localhost:8001'
}
export class ConstantValues {
    public static whatsAppNumber = '6398276273';
    public static email = 'radianttutorials11@gmail.com'
}
export class ServerUrls {
    public static sendContactUsEmail = { url: '/api/sendEmail', method: "POST" };
    public static getData = { url: '/api/getData', method: 'GET' }
}