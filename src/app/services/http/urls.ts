export const enviroment = {
    production: true,
    version: "Appversion v-0-3"
};

export class EnviourmentConstants {
    public static DOMAINPATH = 'https://shubham-coachingbackend.vercel.app'
    // public static DOMAINPATH = 'http://localhost:8001'
}
export class ConstantValues {
    public static whatsAppNumber = '6398276273';
    public static email = 'radianttutorials11@gmail.com';
    public static authUser = 'radiaint@tutorial345$%^&';
    public static authPassword = '&6dfhFF67&78D8KJ8998DF'
}
export class ServerUrls {
    public static sendContactUsEmail = { url: '/api/sendEmail', method: "POST" };
    public static getData = { url: '/api/getData', method: 'GET' }
    public static getClassList = { url: '/api/getClassList', method: 'GET' }
    public static getBoardList = { url: '/api/getBoardList', method: 'GET' }
    public static getAvailableDayList = { url: '/api/get-available-days', method: "GET" }
    public static getListOfAvailableTimeSlot = { url: '/api/get-list-of-avaialbe-time-slot', method: "GET" }
    public static bookDemoSession = { url: '/api/book-demo-session', method: 'POST' }
    public static login = { url: '/api/login', method: "POST" }
    public static testing = { url: '/api/testing', method: "GET" }
}