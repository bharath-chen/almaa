import axios from "axios";
import { environment } from "../environments/environment.prod";

class PaymentGatewayService {
  onlinePayment(customer_id: string, order_id: string) {
    const payload = {
      customer_id,
      order_id,
    };

    const request = axios.post<typeof payload>(
      `${environment.apiUrl}/razorpay.php`,
      payload
    );

    return { request };
  }

  verifyPayment({
    razorpay_payment_id,
    razorpay_order_id,
    razorpay_signature,
  }: {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
  }) {
    const payload = {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
    };

    const request = axios.post(`${environment.apiUrl}/verify.php`, payload);

    return { request };
  }
}

export default new PaymentGatewayService();
