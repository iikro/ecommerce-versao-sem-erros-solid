import { Container } from 'inversify';
import { PrismaClient } from '@prisma/client';
import { TYPES } from './types';
import { IProductRepository } from '../repositories/IProductRepository';
import { PrismaProductRepository } from '../repositories/PrismaProductRepository';
import { IOrderRepository } from '../repositories/IOrderRepository';
import { PrismaOrderRepository } from '../repositories/PrismaOrderRepository';
import { IMailProvider } from '../providers/IMailProvider';
import { EtherealMailProvider } from '../providers/EtherealMailProvider';
import { IPaymentMethod } from '../payments/IPaymentMethod';
import { CreditCardPayment } from '../payments/CreditCardPayment';
import { DebitCardPayment } from '../payments/DebitCardPayment';
import { PixPayment } from '../payments/PixPayment';
import { PaymentMethodRegistry } from '../payments/PaymentMethodRegistry';
import { NotificationService } from '../services/NotificationService';
import { OrderService } from '../services/OrderService';
import { OrderController } from '../controllers/OrderController';

const container = new Container();

container.bind<PrismaClient>(TYPES.PrismaClient).toConstantValue(new PrismaClient());

container.bind<IProductRepository>(TYPES.ProductRepository).to(PrismaProductRepository).inSingletonScope();
container.bind<IOrderRepository>(TYPES.OrderRepository).to(PrismaOrderRepository).inSingletonScope();
container.bind<IMailProvider>(TYPES.MailProvider).to(EtherealMailProvider).inSingletonScope();

container.bind<IPaymentMethod>(TYPES.PaymentMethod).to(CreditCardPayment);
container.bind<IPaymentMethod>(TYPES.PaymentMethod).to(DebitCardPayment);
container.bind<IPaymentMethod>(TYPES.PaymentMethod).to(PixPayment);
container.bind<PaymentMethodRegistry>(TYPES.PaymentMethodRegistry).to(PaymentMethodRegistry);

container.bind<NotificationService>(TYPES.NotificationService).to(NotificationService);
container.bind<OrderService>(TYPES.OrderService).to(OrderService);
container.bind<OrderController>(TYPES.OrderController).to(OrderController);

export { container };
