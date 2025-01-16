import Order from "./order.entity";
//Simplifie l'accés entre le repository et une base de donnée
export default interface OrderRepositoryInterface {
  create(order: Order): Order;
  findById(orderId: number): Order;
  update(order: Order): Order;
  findAll(): Order[];
}
