import React from "react";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

const ReceiptDownloadButton = ({ orderData }) => {
  const currencySymbol = "Rs.";

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatAddress = () => {
    if (!orderData?.addressDetails) return 'No address provided';
    const { home_address, street_address, city_address, pincode } = orderData.addressDetails;
    return `${home_address}, ${street_address}, ${city_address}, ${pincode}`;
  };

  const generatePdfReceipt = async () => {
    try {
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([400, 600]);

      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

      page.drawText("DECORATE", {
        x: 50,
        y: 550,
        size: 24,
        font: boldFont,
        color: rgb(0.2, 0.2, 0.2),
      });

      page.drawText("Order Receipt", {
        x: 50,
        y: 520,
        size: 18,
        font: boldFont,
        color: rgb(0.85, 0.47, 0.2),
      });

      page.drawLine({
        start: { x: 50, y: 510 },
        end: { x: 350, y: 510 },
        thickness: 1,
        color: rgb(0.85, 0.47, 0.2),
      });

      // Order information
      page.drawText(`Order ID: ${orderData?.order_id || 'N/A'}`, {
        x: 50,
        y: 490,
        size: 12,
        font,
      });

      page.drawText(`Date: ${formatDate(orderData?.orderDetails?.order_requested_date)}`, {
        x: 50,
        y: 470,
        size: 12,
        font,
      });

      page.drawText(`Status: ${orderData?.orderDetails?.order_status || 'N/A'}`, {
        x: 50,
        y: 450,
        size: 12,
        font,
      });

      // Customer information
      page.drawText("Customer Details", {
        x: 50,
        y: 420,
        size: 14,
        font: boldFont,
        color: rgb(0.85, 0.47, 0.2),
      });

      page.drawText(`Name: ${orderData?.userDetails?.username || 'N/A'}`, {
        x: 50,
        y: 400,
        size: 12,
        font,
      });

      page.drawText(`Email: ${orderData?.userDetails?.email || 'N/A'}`, {
        x: 50,
        y: 380,
        size: 12,
        font,
      });

      page.drawText(`Phone: ${orderData?.userDetails?.contactNumber || 'N/A'}`, {
        x: 50,
        y: 360,
        size: 12,
        font,
      });

      // Shipping address
      page.drawText("Shipping Address", {
        x: 50,
        y: 330,
        size: 14,
        font: boldFont,
        color: rgb(0.85, 0.47, 0.2),
      });

      const addressLines = formatAddress().split(', ');
      addressLines.forEach((line, index) => {
        page.drawText(line, {
          x: 50,
          y: 310 - (index * 20),
          size: 12,
          font,
        });
      });

      // Order items
      page.drawText("Order Items", {
        x: 50,
        y: 250,
        size: 14,
        font: boldFont,
        color: rgb(0.85, 0.47, 0.2),
      });

      let yPos = 230;
      orderData?.productDetails?.forEach((product, index) => {
        page.drawText(`${product?.productName || 'Unknown Product'}`, {
          x: 50,
          y: yPos,
          size: 12,
          font,
        });

        page.drawText(`Qty: ${product?.quantity || 0}`, {
          x: 200,
          y: yPos,
          size: 12,
          font,
        });

        page.drawText(`${currencySymbol}${product?.amount || 0}`, {
          x: 300,
          y: yPos,
          size: 12,
          font: boldFont,
        });

        yPos -= 20;
      });

      // Order summary
      page.drawText("Order Summary", {
        x: 50,
        y: yPos - 30,
        size: 14,
        font: boldFont,
        color: rgb(0.85, 0.47, 0.2),
      });

      page.drawText(`Subtotal: ${currencySymbol}${orderData?.paymentDetails?.totalAmount || 0}`, {
        x: 50,
        y: yPos - 50,
        size: 12,
        font,
      });

      if (orderData?.discountApplied > 0) {
        page.drawText(`Discount: -${currencySymbol}${orderData.discountApplied}`, {
          x: 50,
          y: yPos - 70,
          size: 12,
          font,
          color: rgb(0, 0.5, 0),
        });
      }

      page.drawText("Shipping: Free", {
        x: 50,
        y: yPos - 90,
        size: 12,
        font,
      });

      page.drawText(`Total: ${currencySymbol}${orderData?.paymentDetails?.totalAmount || 0}`, {
        x: 50,
        y: yPos - 120,
        size: 14,
        font: boldFont,
      });

      // Payment information
      page.drawText("Payment Information", {
        x: 50,
        y: yPos - 150,
        size: 14,
        font: boldFont,
        color: rgb(0.85, 0.47, 0.2),
      });

      page.drawText(`Method: ${orderData?.paymentDetails?.paymentMethodType || 'N/A'}`, {
        x: 50,
        y: yPos - 170,
        size: 12,
        font,
      });

      page.drawText(`Status: ${orderData?.paymentDetails?.transactionStatus || 'N/A'}`, {
        x: 50,
        y: yPos - 190,
        size: 12,
        font,
      });

      // Footer
      page.drawText("Thank you for your order!", {
        x: 50,
        y: 50,
        size: 12,
        font: boldFont,
        color: rgb(0.85, 0.47, 0.2),
      });

      page.drawText("For any questions, please contact our customer support.", {
        x: 50,
        y: 30,
        size: 10,
        font,
      });

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `Receipt_${orderData?.order_id || 'order'}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate receipt. Please try again.");
    }
  };

  return (
    <button
      onClick={generatePdfReceipt}
      className="flex items-center px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      Download Receipt
    </button>
  );
};

export default ReceiptDownloadButton;