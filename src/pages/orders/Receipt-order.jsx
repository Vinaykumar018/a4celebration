import React from "react";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { Download } from "lucide-react";

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
    const page = pdfDoc.addPage([400, 650]);

    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    let yPos = 600;
    const sectionGap = 30;
    const lineGap = 18;

    // Header
    page.drawText("A4 Celebration", {
      x: 50,
      y: yPos,
      size: 24,
      font: boldFont,
      color: rgb(0.2, 0.2, 0.2),
    });

    yPos -= lineGap;
    page.drawText("Order Receipt", {
      x: 50,
      y: yPos,
      size: 18,
      font: boldFont,
      color: rgb(0.85, 0.47, 0.2),
    });

    yPos -= 10;
    page.drawLine({
      start: { x: 50, y: yPos },
      end: { x: 350, y: yPos },
      thickness: 1,
      color: rgb(0.85, 0.47, 0.2),
    });

    yPos -= sectionGap;

    // Order Info
    page.drawText("Order Information", {
      x: 50,
      y: yPos,
      size: 14,
      font: boldFont,
      color: rgb(0.85, 0.47, 0.2),
    });

    yPos -= lineGap;
    page.drawText(`Order ID: ${orderData?.order_id || 'N/A'}`, { x: 50, y: yPos, size: 12, font });
    yPos -= lineGap;
    page.drawText(`Date: ${formatDate(orderData?.orderDetails?.order_requested_date)}`, { x: 50, y: yPos, size: 12, font });
    yPos -= lineGap;
    page.drawText(`Status: ${orderData?.orderDetails?.order_status || 'N/A'}`, { x: 50, y: yPos, size: 12, font });

    yPos -= sectionGap;

    // Customer Details
    page.drawText("Customer Details", {
      x: 50,
      y: yPos,
      size: 14,
      font: boldFont,
      color: rgb(0.85, 0.47, 0.2),
    });

    yPos -= lineGap;
    page.drawText(`Name: ${orderData?.userDetails?.username || 'N/A'}`, { x: 50, y: yPos, size: 12, font });
    yPos -= lineGap;
    page.drawText(`Email: ${orderData?.userDetails?.email || 'N/A'}`, { x: 50, y: yPos, size: 12, font });
    yPos -= lineGap;
    page.drawText(`Phone: ${orderData?.userDetails?.contactNumber || 'N/A'}`, { x: 50, y: yPos, size: 12, font });

    yPos -= sectionGap;

    // Shipping Address
    page.drawText("Shipping Address", {
      x: 50,
      y: yPos,
      size: 14,
      font: boldFont,
      color: rgb(0.85, 0.47, 0.2),
    });

    yPos -= lineGap;
    const addressLines = formatAddress().split(', ');
    addressLines.forEach(line => {
      page.drawText(line, { x: 50, y: yPos, size: 12, font });
      yPos -= lineGap;
    });

    yPos -= sectionGap;

    // Order Items
    page.drawText("Order Items", {
      x: 50,
      y: yPos,
      size: 14,
      font: boldFont,
      color: rgb(0.85, 0.47, 0.2),
    });

    yPos -= lineGap;
   const wrapText = (text, maxCharsPerLine = 35) => {
  const words = text.split(' ');
  const lines = [];
  let line = '';

  words.forEach(word => {
    if ((line + word).length <= maxCharsPerLine) {
      line += word + ' ';
    } else {
      lines.push(line.trim());
      line = word + ' ';
    }
  });
  if (line) lines.push(line.trim());
  return lines;
};

orderData?.productDetails?.forEach((product, index) => {
  const lines = wrapText(product?.productName || 'Unknown Product');

  lines.forEach((line, i) => {
    page.drawText(line, {
      x: 50,
      y: yPos,
      size: 12,
      font,
    });
    yPos -= 15;
  });

  page.drawText(`Qty: ${product?.quantity || 0}`, {
    x: 50,
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

  yPos -= 25;
});


    yPos -= sectionGap;

    // Order Summary
    page.drawText("Order Summary", {
      x: 50,
      y: yPos,
      size: 14,
      font: boldFont,
      color: rgb(0.85, 0.47, 0.2),
    });

    yPos -= lineGap;
    page.drawText(`Subtotal: ${currencySymbol}${orderData?.paymentDetails?.totalAmount || 0}`, { x: 50, y: yPos, size: 12, font });
    yPos -= lineGap;

    if (orderData?.discountApplied > 0) {
      page.drawText(`Discount: -${currencySymbol}${orderData.discountApplied}`, {
        x: 50,
        y: yPos,
        size: 12,
        font,
        color: rgb(0, 0.5, 0),
      });
      yPos -= lineGap;
    }

    page.drawText("Shipping: Free", { x: 50, y: yPos, size: 12, font });
    yPos -= lineGap;

    page.drawText(`Total: ${currencySymbol}${orderData?.paymentDetails?.totalAmount || 0}`, {
      x: 50,
      y: yPos,
      size: 14,
      font: boldFont,
    });

    yPos -= sectionGap;

  page.drawText("Payment Information", {
  x: 50,
  y: yPos,
  size: 14,
  font: boldFont,
  color: rgb(0.85, 0.47, 0.2),
});
yPos -= lineGap;

page.drawText(`Method: ${orderData?.paymentDetails?.paymentMethodType || 'N/A'}`, {
  x: 50,
  y: yPos,
  size: 12,
  font,
});
yPos -= lineGap;

page.drawText(`Status: ${orderData?.paymentDetails?.transactionStatus || 'N/A'}`, {
  x: 50,
  y: yPos,
  size: 12,
  font,
});
yPos -= sectionGap; // <--- Add this to move footer down safely

// Footer
page.drawText("Thank you for your order!", {
  x: 50,
  y: yPos,
  size: 12,
  font: boldFont,
  color: rgb(0.85, 0.47, 0.2),
});
yPos -= lineGap;

page.drawText("For any questions, please contact our customer support.", {
  x: 50,
  y: yPos,
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
  className="flex items-center justify-center px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors  xs:w-auto"
  
>
  <Download size={15}></Download>
  
  <span className="text-center ml-2">Download Receipt</span>
</button>
  );
};

export default ReceiptDownloadButton;