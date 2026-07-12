import React from "react";

const termsText = `Returns
We offer a 7-day return policy from the date your order is delivered. To be eligible for a return, the product must be unused, unopened, in its original condition, and in its original packaging, together with proof of purchase.
Due to hygiene and food safety reasons, opened, used, or partially consumed food supplements are not eligible for return or refund, unless the product is defective, damaged upon delivery, or the incorrect item was supplied.
Returns will not be accepted for reasons including, but not limited to:
•	Change of mind 
•	Personal taste or flavour preference 
•	Perceived lack of effectiveness 
•	Products returned without prior approval 
•	Products returned after the eligible return period 
Please do not return products directly to the manufacturer.

Refunds
Once your returned item has been received and inspected, we will notify you by email regarding the approval or rejection of your refund request.
If approved, your refund will be processed to the original payment method within 7–14 business days, depending on your payment provider.
Shipping fees are non-refundable unless the return is due to our error, such as receiving a defective or incorrect product.

Late or Missing Refunds
If you have not received your refund after the stated processing period, please first check with your bank or card issuer, as processing times may vary.
If you still have not received your refund, please contact us at:
stempires9399@gmail.com

Exchanges
We only replace products that are defective, damaged during delivery, expired, or incorrectly supplied.
To request an exchange, please contact us via:
Email: stempires9399@gmail.com
WhatsApp: +60 16-940 4939
before returning the product.

Delivery Issues
Customers are responsible for providing a complete and accurate shipping address when placing an order. ST Empires shall not be responsible for delays, failed deliveries, additional shipping charges, or returned parcels resulting from incorrect, incomplete, or invalid shipping information provided by the customer.
If an order is returned to us due to an incorrect address, failure to collect the parcel, refusal to accept delivery, or any other customer-related reason, the customer will be responsible for any additional shipping or handling charges required for re-delivery. Original shipping charges are non-refundable.
If your parcel arrives damaged, or if you receive an incorrect item, you must notify us within 48 hours of delivery and provide your order number together with clear photographs of the product, packaging, and shipping label. Claims submitted after this period may not be eligible for replacement or refund.
If the courier marks a parcel as delivered but you believe it has not been received, you must contact us within 7 days of the delivery status update. We will assist in initiating an investigation with the courier; however, ST Empires is not liable for delays, loss, or delivery issues caused by third-party courier services once the order has been dispatched, except where required by applicable law.

Return Shipping
To return your product, please send it to:
ST Empires Sdn. Bhd.
176A, Jalan Rotan Batu,
Taman Sri Jaya,
83000 Batu Pahat,
Johor, Malaysia.

Customers are responsible for return shipping costs unless the return is due to our error.
We recommend using a trackable shipping service for all returns. ST Empires cannot guarantee receipt of returned items and is not responsible for products lost or damaged during return transit.

Right to Refuse
ST Empires reserves the right to refuse any return, refund, or exchange request that does not comply with this policy or where fraud, abuse, suspicious activity, or misuse of our return policy is reasonably suspected.
`;
export default function RefundPolicy() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-neutral-200 font-sans py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto border-b border-neutral-800 pb-8 mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-white mb-4">
          CANCELLATION / REFUND POLICY
        </h1>
        <p className="text-sm text-neutral-400">Last updated: July 2026</p>
      </div>

      {/* 🚀 步驟二：使用 whitespace-pre-line，一行代碼直接完美呈現全部段落！ */}
      <div className="max-w-4xl mx-auto text-sm md:text-base leading-relaxed tracking-wide text-neutral-300 whitespace-pre-line">
        {termsText}
      </div>
    </div>
  );
}
