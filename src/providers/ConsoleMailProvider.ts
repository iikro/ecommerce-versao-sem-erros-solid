import { injectable } from 'inversify';
import { IMailProvider, Mail } from './IMailProvider';

@injectable()
export class ConsoleMailProvider implements IMailProvider {
  async sendMail(mail: Mail): Promise<string | null> {
    console.log(`[ConsoleMailProvider] Para: ${mail.to} | Assunto: ${mail.subject} | Mensagem: ${mail.text}`);
    return null;
  }
}
