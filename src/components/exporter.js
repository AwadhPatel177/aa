import * as htmlToImage from 'html-to-image'
import jsPDF from 'jspdf'

export async function exportPNG(node, filename='poster.png'){
  const dataUrl = await htmlToImage.toPng(node, { pixelRatio: 2 })
  const a = document.createElement('a')
  a.href = dataUrl
  a.download = filename
  a.click()
}

export async function exportPDF(node, filename='poster.pdf', w=1080, h=1350){
  const dataUrl = await htmlToImage.toPng(node, { pixelRatio: 2 })
  // Convert px to mm based on 96 DPI -> 25.4 mm/inch
  const pxToMm = px => px * 25.4 / 96
  const pdf = new jsPDF({
    orientation: w>h ? 'l' : 'p',
    unit: 'mm',
    format: [pxToMm(w), pxToMm(h)]
  })
  pdf.addImage(dataUrl, 'PNG', 0, 0, pxToMm(w), pxToMm(h))
  pdf.save(filename)
}
