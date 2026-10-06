export type Mail = {
    from: string,
    to: string[],
    subject: string,
    body: string,
    urgent: boolean

}

export function sendMail(mail: Mail){
    return mail;
}