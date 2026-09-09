import { jsPDF } from 'jspdf';
import { Product } from '../types';

export function generateCatalogPdf(products: Product[], language: string = 'es') {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const isEn = language === 'en';
  const isZh = language === 'zh';

  const titleText = isEn
    ? 'OFFICIAL INDUSTRIAL FOOTWEAR CATALOG'
    : isZh
    ? '官方工业安全鞋产品目录'
    : 'CATÁLOGO OFICIAL DE CALZADO INDUSTRIAL DE SEGURIDAD';

  const subtitleText = isEn
    ? 'Manufactured in León, Guanajuato, Mexico — Compliant with NOM-113-STPS-2009'
    : isZh
    ? '墨西哥莱昂制造 — 严格符合 NOM-113-STPS-2009 标准'
    : 'Fabricado en León, Guanajuato, México — Norma Oficial NOM-113-STPS-2009';

  const contactHeader = isEn
    ? 'Factory Direct Sales & B2B Quotes: ventas@magnoboots.com.mx | Tel: +52 (477) 714-2030'
    : isZh
    ? '工厂直营销售与B2B询价: ventas@magnoboots.com.mx | 电话: +52 (477) 714-2030'
    : 'Ventas Directas de Fábrica y Mayoreo B2B: ventas@magnoboots.com.mx | Tel: +52 (477) 714-2030';

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 14;
  let y = 16;

  // Header banner background
  doc.setFillColor(24, 24, 27); // Dark zinc-900
  doc.rect(0, 0, pageWidth, 36, 'F');

  // Orange accent line below header
  doc.setFillColor(243, 108, 33); // #F36C21
  doc.rect(0, 36, pageWidth, 2, 'F');

  // Brand Name
  doc.setTextColor(243, 108, 33);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.text('MAGNO BOOTS', margin, 14);

  // Subtitle
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text(titleText, margin, 21);

  doc.setTextColor(161, 161, 170); // zinc-400
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text(subtitleText, margin, 27);

  doc.setTextColor(212, 212, 216); // zinc-300
  doc.setFontSize(7.5);
  doc.text(contactHeader, margin, 32);

  y = 44;

  // Filter info or metadata badge
  const genDate = new Date().toLocaleDateString();
  const dateStr = isEn ? `Generated: ${genDate}` : isZh ? `生成日期: ${genDate}` : `Fecha: ${genDate}`;
  const countStr = isEn
    ? `Total Items: ${products.length}`
    : isZh
    ? `总计鞋款: ${products.length}`
    : `Total de Modelos: ${products.length}`;

  doc.setTextColor(82, 82, 91); // zinc-600
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.text(`${countStr}  |  ${dateStr}`, margin, y);

  y += 6;

  // Loop through products
  products.forEach((prod, index) => {
    const cardHeight = 38;

    // Check page break
    if (y + cardHeight > pageHeight - 16) {
      doc.addPage();
      y = 16;

      // Top bar for continuation page
      doc.setFillColor(24, 24, 27);
      doc.rect(0, 0, pageWidth, 12, 'F');
      doc.setFillColor(243, 108, 33);
      doc.rect(0, 12, pageWidth, 1, 'F');

      doc.setTextColor(243, 108, 33);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.text('MAGNO BOOTS — ' + titleText, margin, 8);

      y = 18;
    }

    // Product Card background
    doc.setFillColor(250, 250, 250);
    doc.setDrawColor(228, 228, 231); // zinc-200 border
    doc.roundedRect(margin, y, pageWidth - margin * 2, cardHeight, 2, 2, 'FD');

    // Left accent bar
    doc.setFillColor(243, 108, 33);
    doc.rect(margin, y, 3, cardHeight, 'F');

    const px = margin + 6;
    let py = y + 6;

    // Product Title & Model Code
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(24, 24, 27);
    doc.text(prod.name, px, py);

    // Price tag on top right
    const priceText = `$${prod.price.toLocaleString('es-MX')} MXN`;
    doc.setFontSize(10.5);
    doc.setTextColor(217, 83, 16);
    doc.text(priceText, pageWidth - margin - 5, py, { align: 'right' });

    py += 4.5;

    // Category Badge / Code
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(113, 113, 122);
    const codeCatStr = `${prod.modelCode}  |  ${prod.categoryLabel.toUpperCase()}`;
    doc.text(codeCatStr, px, py);

    py += 5;

    // Specs Line 1: Toe & Leather
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(39, 39, 42);

    const toeLabel = isEn ? 'Toe Cap:' : isZh ? '包头:' : 'Casquillo:';
    const leatherLabel = isEn ? 'Leather:' : isZh ? '皮革:' : 'Piel:';
    const soleLabel = isEn ? 'Outsole:' : isZh ? '鞋底:' : 'Suela:';

    const specs1 = `${toeLabel} ${prod.specs.toeCap.slice(0, 45)}...`;
    doc.text(specs1, px, py);

    py += 4;

    const specs2 = `${leatherLabel} ${prod.specs.leather.slice(0, 40)}  |  ${soleLabel} ${prod.specs.sole.slice(0, 40)}`;
    doc.text(specs2, px, py);

    py += 4;

    // Sizes & Certifications
    doc.setFontSize(7.5);
    doc.setTextColor(82, 82, 91);
    const sizesStr = (isEn ? 'Sizes (MX): ' : isZh ? '尺码 (MX): ' : 'Tallas (MX): ') + prod.sizes.join(', ');
    const certsStr = (isEn ? 'Cert: ' : isZh ? '认证: ' : 'Cert: ') + prod.specs.certifications.join(' / ');
    doc.text(`${sizesStr}  |  ${certsStr}`, px, py);

    y += cardHeight + 4;
  });

  // Footer on all pages
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(161, 161, 170);

    const footerText = isEn
      ? 'Magno Boots Official Factory Catalog — All rights reserved | www.magnoboots.com.mx'
      : isZh
      ? 'Magno Boots 官方工厂产品目录 — 版权所有 | www.magnoboots.com.mx'
      : 'Catálogo Oficial de Fábrica Magno Boots — Todos los derechos reservados | www.magnoboots.com.mx';

    doc.text(footerText, margin, pageHeight - 6);
    doc.text(`${i} / ${totalPages}`, pageWidth - margin, pageHeight - 6, { align: 'right' });
  }

  // Save PDF
  const filename = language === 'en'
    ? 'Magno_Boots_Official_Catalog.pdf'
    : language === 'zh'
    ? 'Magno_Boots_Product_Catalog.pdf'
    : 'Magno_Boots_Catalogo_Oficial.pdf';

  doc.save(filename);
}
