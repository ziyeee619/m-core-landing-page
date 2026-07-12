import React from "react";

const termsText = `At ST Empires Sdn. Bhd., we are committed to delivering your order safely and efficiently. Please review our shipping policy before placing your order.

1. Shipping Coverage
We currently ship within Malaysia only.
If international shipping becomes available in the future, this policy will be updated accordingly.

2. Order Processing
Orders are processed within 1–2 business days after payment has been successfully confirmed.
Orders placed on weekends or public holidays will be processed on the next business day.
During peak periods, promotional campaigns, or unforeseen circumstances, processing times may be slightly longer.

3. Shipping Method
All orders are shipped via GDEX.
Once your order has been dispatched, you will receive a shipping confirmation email or message containing your tracking number, allowing you to monitor your shipment directly through GDEX.
Estimated delivery times are:
•	West Malaysia: 1–3 business days 
•	East Malaysia: 3–7 business days 
Delivery times are estimates only and may vary depending on the courier, weather conditions, public holidays, or other circumstances beyond our control.

4. Shipping Fees
Shipping charges will be calculated and displayed during checkout before payment is completed.
Any applicable promotional shipping offers will be subject to their respective terms and conditions.

5. Delivery Responsibility
Customers are responsible for providing complete and accurate shipping information when placing an order.
ST Empires is not responsible for delays, failed deliveries, additional shipping charges, or returned parcels resulting from incorrect, incomplete, or inaccurate shipping information provided by the customer.
If a parcel is returned due to an incorrect address, failure to collect the parcel, refusal of delivery, or any customer-related reason, additional shipping charges may apply before the order can be re-shipped.

6. Damaged, Missing or Incorrect Deliveries
If your order arrives damaged or you receive an incorrect item, please contact us within 48 hours of delivery and provide your order number together with clear photographs of the product, packaging, and shipping label.
If your parcel is marked as Delivered but has not been received, please notify us within 7 days of the delivery status update. We will assist in coordinating an investigation with GDEX where applicable.
ST Empires reserves the right to request additional information before approving any replacement or compensation claim.

7. Delivery Delays
While we strive to ensure timely delivery, ST Empires is not liable for delays caused by circumstances beyond our reasonable control, including but not limited to:
•	Courier operational delays 
•	Severe weather conditions 
•	Public holidays 
•	Customs or government inspections (where applicable) 
•	Natural disasters or other force majeure events 

8. Contact Us
If you have any questions regarding shipping or delivery, please contact us:
ST Empires Sdn. Bhd.
Email: stempires9399@gmail.com
WhatsApp: +60 16-940 4939

`;
export default function ShippingPolicy() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-neutral-200 font-sans py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto border-b border-neutral-800 pb-8 mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-white mb-4">
          SHIPPING POLICY
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
