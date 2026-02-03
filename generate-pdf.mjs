import puppeteer from 'puppeteer';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const VIEWPORT = { width: 390, height: 844 }; // iPhone 14 Pro dimensions
const SCREENSHOT_DIR = './screenshots';
const OUTPUT_PDF = './smartFK-Screenshots.pdf';

// Page structure with numbering
const structure = {
  mainSections: [
    {
      id: 'smartbanking',
      roman: 'I',
      title: 'Kontenübersicht',
      subSections: [
        { id: 'multibanking', num: 1, title: 'Multi-Banking', features: [
          { id: 'link-accounts', letter: 'a', title: 'Verknüpfung mehrerer Konten & Dienste' }
        ]},
        { id: 'total', num: 2, title: 'Gesamtüberblick', features: [
          { id: 'balances', letter: 'a', title: 'Aktuelle Kontostände über alle Konten' },
          { id: 'upcoming', letter: 'b', title: 'Anzeige anstehender Ausgaben' },
          { id: 'salary', letter: 'c', title: 'Erkennung von Gehaltseingängen' }
        ]},
        { id: 'sync', num: 3, title: 'Echtzeit-Synchronisation', features: [
          { id: 'recurring', letter: 'a', title: 'Erkennung regelmäßiger Buchungen' },
          { id: 'auto-update', letter: 'b', title: 'Automatische Aktualisierung der Umsätze' }
        ]}
      ]
    },
    {
      id: 'analytics',
      roman: 'II',
      title: 'Ausgabenanalyse',
      subSections: [
        { id: 'categorization', num: 1, title: 'Automatische Kategorisierung', features: [
          { id: 'consumption-patterns', letter: 'a', title: 'Erkennung von Konsummustern' },
          { id: 'auto-categorize', letter: 'b', title: 'Automatische Zuordnung zu Kategorien' },
          { id: 'categories', letter: 'c', title: 'Kategorien: Lebensmittel, Mobilität, Freizeit' }
        ]},
        { id: 'reports', num: 2, title: 'Reports & Auswertungen', features: [
          { id: 'monthly-reports', letter: 'a', title: 'Monatliche Auswertungen' },
          { id: 'trends', letter: 'b', title: 'Trendanalysen (steigende/fallende Ausgaben)' }
        ]},
        { id: 'budget', num: 3, title: 'Budget-Steuerung', features: [
          { id: 'category-budgets', letter: 'a', title: 'Individuelle Budgets pro Kategorie' },
          { id: 'budget-adjustments', letter: 'b', title: 'Budget-Anpassungen basierend auf Auswertungen' }
        ]}
      ]
    },
    {
      id: 'contracts',
      roman: 'III',
      title: 'Vertragsmanagement',
      subSections: [
        { id: 'contract-detection', num: 1, title: 'Automatische Vertragserkennung', features: [
          { id: 'detect-contracts', letter: 'a', title: 'Erkennung laufender Verträge aus Kontoumsätzen' },
          { id: 'contract-types', letter: 'b', title: 'Strom, Internet, Handy, Streaming, Versicherungen' }
        ]},
        { id: 'contract-overview', num: 2, title: 'Vertragsübersicht', features: [
          { id: 'monthly-costs', letter: 'a', title: 'Monatliche Kosten pro Vertrag' },
          { id: 'deadlines', letter: 'b', title: 'Kündigungsfristen & Laufzeiten' }
        ]},
        { id: 'contract-actions', num: 3, title: 'Vertragsaktionen', features: [
          { id: 'cancel-contract', letter: 'a', title: 'Kündigung direkt aus der App' },
          { id: 'switch-provider', letter: 'b', title: 'Wechsel zu günstigeren Anbietern' }
        ]}
      ]
    },
    {
      id: 'savings',
      roman: 'IV',
      title: 'Sparen & Planung',
      subSections: [
        { id: 'tips', num: 1, title: 'Personalisierte Spartipps', features: [
          { id: 'unused-subscriptions', letter: 'a', title: 'Hinweise auf überflüssige Abos' },
          { id: 'expensive-contracts', letter: 'b', title: 'Hinweise auf überteuerte Verträge' }
        ]},
        { id: 'goals', num: 2, title: 'Finanzplanung & Ziele', features: [
          { id: 'define-goals', letter: 'a', title: 'Finanzielle Ziele definieren' },
          { id: 'budget-alerts', letter: 'b', title: 'Budget-Alerts bei Überschreitung' }
        ]},
        { id: 'coach', num: 3, title: 'Finanzcoach', features: [
          { id: 'improve-behavior', letter: 'a', title: 'Unterstützung beim besseren Finanzverhalten' },
          { id: 'understand-finance', letter: 'b', title: 'Finanzen verstehen ohne Experte zu sein' }
        ]}
      ]
    },
    {
      id: 'depot',
      roman: 'V',
      title: 'Depot',
      subSections: [
        { id: 'custodians', num: 1, title: 'Lagerstellen', features: [
          { id: 'custodian-overview', letter: 'a', title: 'Übersicht Ihrer Lagerstellen' },
          { id: 'custodian-contact', letter: 'b', title: 'Kontakt zur Lagerstelle' }
        ]},
        { id: 'depots', num: 2, title: 'Depots', features: [
          { id: 'depot-overview', letter: 'a', title: 'Depotübersicht & Performance' },
          { id: 'depot-buy', letter: 'b', title: 'Wertpapiere kaufen' },
          { id: 'depot-sell', letter: 'c', title: 'Wertpapiere verkaufen' },
          { id: 'depot-savings-plan', letter: 'd', title: 'Sparplan anlegen' }
        ]},
        { id: 'portfolios', num: 3, title: 'Portfolios', features: [
          { id: 'portfolio-overview', letter: 'a', title: 'Portfolio-Übersicht' },
          { id: 'portfolio-buy', letter: 'b', title: 'Wertpapiere kaufen' },
          { id: 'portfolio-sell', letter: 'c', title: 'Wertpapiere verkaufen' },
          { id: 'portfolio-savings-plan', letter: 'd', title: 'Sparplan anlegen' }
        ]},
        { id: 'broker-contact', num: 4, title: 'Kontakt zum Makler', features: [
          { id: 'broker-info', letter: 'a', title: 'Ihr Makler' },
          { id: 'broker-message', letter: 'b', title: 'Nachricht senden' },
          { id: 'broker-appointment', letter: 'c', title: 'Termin vereinbaren' }
        ]}
      ]
    }
  ]
};

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function startDevServer() {
  console.log('Starting dev server...');
  const server = spawn('npm', ['run', 'dev'], {
    cwd: process.cwd(),
    shell: true,
    stdio: ['ignore', 'pipe', 'pipe']
  });

  return new Promise((resolve, reject) => {
    let output = '';
    server.stdout.on('data', (data) => {
      output += data.toString();
      if (output.includes('Local:') || output.includes('localhost:')) {
        const match = output.match(/http:\/\/localhost:(\d+)/);
        const port = match ? match[1] : '5173';
        console.log(`Dev server running on port ${port}`);
        resolve({ server, port });
      }
    });
    server.stderr.on('data', (data) => {
      console.error('Server error:', data.toString());
    });
    setTimeout(() => reject(new Error('Server start timeout')), 30000);
  });
}

async function clickButtonWithText(page, text, exact = false) {
  await page.evaluate((searchText, exactMatch) => {
    const buttons = document.querySelectorAll('button');
    for (const btn of buttons) {
      const btnText = btn.textContent || '';
      if (exactMatch ? btnText.includes(searchText) : btnText.toLowerCase().includes(searchText.toLowerCase())) {
        btn.click();
        return true;
      }
    }
    return false;
  }, text, exact);
}

async function clickByRomanNumeral(page, roman) {
  // Click on section card by roman numeral
  await page.evaluate((romanNum) => {
    const buttons = document.querySelectorAll('button');
    for (const btn of buttons) {
      const text = btn.textContent || '';
      // Look for pattern like "I Kontenübersicht" or just the roman numeral in a card
      if (text.includes(romanNum + ' ') || text.includes(romanNum + '\n')) {
        btn.click();
        return true;
      }
    }
    return false;
  }, roman);
}

async function clickSubSection(page, subSectionNum) {
  // Click on subsection by number like "I.1" or "II.2"
  await page.evaluate((num) => {
    const buttons = document.querySelectorAll('button');
    for (const btn of buttons) {
      const text = btn.textContent || '';
      if (text.includes(num)) {
        btn.click();
        return true;
      }
    }
    return false;
  }, subSectionNum);
}

async function clickFeature(page, featureNum) {
  // Click on feature by number like "I.1.a"
  await page.evaluate((num) => {
    const buttons = document.querySelectorAll('button');
    for (const btn of buttons) {
      const text = btn.textContent || '';
      if (text.includes(num)) {
        btn.click();
        return true;
      }
    }
    return false;
  }, featureNum);
}

async function goBack(page) {
  // Click the back button (first button with ArrowLeft icon)
  await page.evaluate(() => {
    const buttons = document.querySelectorAll('button');
    for (const btn of buttons) {
      const svg = btn.querySelector('svg');
      if (svg && btn.closest('header')) {
        btn.click();
        return true;
      }
    }
    return false;
  });
}

async function waitForNavigation(page, ms = 300) {
  await sleep(ms);
}

async function takeScreenshots(page, port) {
  const screenshots = [];
  const baseUrl = `http://localhost:${port}`;

  // Ensure screenshot directory exists
  if (!fs.existsSync(SCREENSHOT_DIR)) {
    fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
  }

  // 1. Main page (Startseite)
  console.log('Taking screenshot: Hauptseite');
  await page.goto(baseUrl, { waitUntil: 'networkidle0' });
  await sleep(800);
  const mainPath = path.join(SCREENSHOT_DIR, '00_Hauptseite.png');
  await page.screenshot({ path: mainPath, fullPage: false });
  screenshots.push({ path: mainPath, name: 'Hauptseite', numbering: '' });

  let screenshotIndex = 1;

  // Navigate through each main section
  for (const section of structure.mainSections) {
    // Go to start page first
    await page.goto(baseUrl, { waitUntil: 'networkidle0' });
    await sleep(500);

    // Click on main section card by looking for the roman numeral and title
    console.log(`Taking screenshot: ${section.roman}. ${section.title}`);

    await page.evaluate((sectionTitle, romanNum) => {
      const buttons = document.querySelectorAll('button');
      for (const btn of buttons) {
        const text = btn.textContent || '';
        if (text.includes(sectionTitle) && text.includes(romanNum)) {
          btn.click();
          return;
        }
      }
    }, section.title, section.roman);

    await waitForNavigation(page, 600);

    const sectionPath = path.join(SCREENSHOT_DIR, `${String(screenshotIndex).padStart(2, '0')}_${section.roman}.png`);
    await page.screenshot({ path: sectionPath, fullPage: false });
    screenshots.push({
      path: sectionPath,
      name: section.title,
      numbering: section.roman
    });
    screenshotIndex++;

    // Navigate through subsections
    for (const subSection of section.subSections) {
      const subNum = `${section.roman}.${subSection.num}`;
      console.log(`Taking screenshot: ${subNum} ${subSection.title}`);

      // Click on subsection
      await page.evaluate((subSectionTitle) => {
        const buttons = document.querySelectorAll('button');
        for (const btn of buttons) {
          const text = btn.textContent || '';
          if (text.includes(subSectionTitle)) {
            btn.click();
            return;
          }
        }
      }, subSection.title);

      await waitForNavigation(page, 500);

      const subPath = path.join(SCREENSHOT_DIR, `${String(screenshotIndex).padStart(2, '0')}_${subNum.replace(/\./g, '_')}.png`);
      await page.screenshot({ path: subPath, fullPage: false });
      screenshots.push({
        path: subPath,
        name: subSection.title,
        numbering: subNum
      });
      screenshotIndex++;

      // Navigate through features
      for (const feature of subSection.features) {
        const featureNum = `${subNum}.${feature.letter}`;
        console.log(`Taking screenshot: ${featureNum} ${feature.title}`);

        // Click on feature by its numbering
        await page.evaluate((fNum) => {
          const buttons = document.querySelectorAll('button');
          for (const btn of buttons) {
            const text = btn.textContent || '';
            if (text.includes(fNum)) {
              btn.click();
              return;
            }
          }
        }, featureNum);

        await waitForNavigation(page, 500);

        const featurePath = path.join(SCREENSHOT_DIR, `${String(screenshotIndex).padStart(2, '0')}_${featureNum.replace(/\./g, '_')}.png`);
        await page.screenshot({ path: featurePath, fullPage: false });
        screenshots.push({
          path: featurePath,
          name: feature.title,
          numbering: featureNum
        });
        screenshotIndex++;

        // Go back to subsection view
        await page.evaluate(() => {
          // Find and click the back button in header
          const header = document.querySelector('header');
          if (header) {
            const backBtn = header.querySelector('button');
            if (backBtn) {
              backBtn.click();
            }
          }
        });
        await waitForNavigation(page, 400);
      }

      // Close subsection (click it again to collapse) - not needed, we stay on section page
    }
  }

  return screenshots;
}

async function createPDF(screenshots) {
  console.log('Creating PDF...');
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  // Add screenshot pages
  for (const screenshot of screenshots) {
    const imageBytes = fs.readFileSync(screenshot.path);
    const image = await pdfDoc.embedPng(imageBytes);

    // Create page with aspect ratio of screenshot
    const pageWidth = 595.28; // A4 width in points
    const pageHeight = 841.89; // A4 height in points
    const page = pdfDoc.addPage([pageWidth, pageHeight]);

    // Calculate image dimensions to fit on page with margins
    const margin = 40;
    const maxWidth = pageWidth - (margin * 2);
    const maxHeight = pageHeight - (margin * 2) - 60; // Leave space for title

    const imgAspect = image.width / image.height;
    let imgWidth = maxWidth;
    let imgHeight = imgWidth / imgAspect;

    if (imgHeight > maxHeight) {
      imgHeight = maxHeight;
      imgWidth = imgHeight * imgAspect;
    }

    // Center image
    const x = (pageWidth - imgWidth) / 2;
    const y = margin;

    page.drawImage(image, {
      x,
      y,
      width: imgWidth,
      height: imgHeight,
    });

    // Add title at top
    const title = screenshot.numbering
      ? `${screenshot.numbering} ${screenshot.name}`
      : screenshot.name;

    page.drawText(title, {
      x: margin,
      y: pageHeight - margin,
      size: 14,
      font: fontBold,
      color: rgb(0, 0, 0),
    });
  }

  // Add table of contents page at the end
  const tocPage = pdfDoc.addPage([595.28, 841.89]);
  const margin = 40;
  let yPos = 841.89 - margin;

  tocPage.drawText('Inhaltsverzeichnis', {
    x: margin,
    y: yPos,
    size: 20,
    font: fontBold,
    color: rgb(0, 0, 0),
  });

  yPos -= 40;

  // Group by main section
  let currentSection = '';
  for (const screenshot of screenshots) {
    const numbering = screenshot.numbering;
    const name = screenshot.name;

    // Determine indentation level
    let indent = 0;
    let fontSize = 10;
    let useFont = font;

    if (!numbering) {
      // Main page
      fontSize = 12;
      useFont = fontBold;
    } else if (!numbering.includes('.')) {
      // Main section (I, II, III, etc.)
      fontSize = 12;
      useFont = fontBold;
      if (currentSection) yPos -= 8;
      currentSection = numbering;
    } else {
      const parts = numbering.split('.');
      if (parts.length === 2) {
        // Subsection (I.1, I.2, etc.)
        indent = 20;
        fontSize = 10;
      } else {
        // Feature (I.1.a, I.1.b, etc.)
        indent = 40;
        fontSize = 9;
      }
    }

    const text = numbering ? `${numbering} ${name}` : name;

    tocPage.drawText(text, {
      x: margin + indent,
      y: yPos,
      size: fontSize,
      font: useFont,
      color: rgb(0, 0, 0),
    });

    yPos -= 16;

    // Start new page if needed
    if (yPos < margin + 50) {
      // TODO: Add multi-page TOC support if needed
      break;
    }
  }

  // Save PDF
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(OUTPUT_PDF, pdfBytes);
  console.log(`PDF saved to ${OUTPUT_PDF}`);
}

async function main() {
  let server = null;
  let browser = null;

  try {
    // Start dev server
    const serverInfo = await startDevServer();
    server = serverInfo.server;
    const port = serverInfo.port;

    // Wait a bit for server to be fully ready
    await sleep(2000);

    // Launch browser
    console.log('Launching browser...');
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setViewport(VIEWPORT);

    // Take screenshots
    const screenshots = await takeScreenshots(page, port);

    // Create PDF
    await createPDF(screenshots);

    console.log('Done!');

  } catch (error) {
    console.error('Error:', error);
  } finally {
    if (browser) await browser.close();
    if (server) server.kill();
  }
}

main();
