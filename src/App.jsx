import React, { useMemo, useRef, useState } from 'react'
import { TemplateCard } from './components/TemplateCard.jsx'
import { EditorPanel } from './components/EditorPanel.jsx'
import { Canvas } from './components/Canvas.jsx'
import { TEMPLATES } from './templates/index.jsx'
import { exportPNG, exportPDF } from './components/exporter.js'

const sizes = {
  Square1080: { label: 'Square 1080×1080', w:1080, h:1080 },
  InstagramPortrait: { label: 'Insta Portrait 1080×1350', w:1080, h:1350 },
  Story: { label: 'Story 1080×1920', w:1080, h:1920 },
  A4: { label: 'A4 2480×3508 (300dpi)', w:2480, h:3508 },
}

export default function App(){
  const [selected, setSelected] = useState(TEMPLATES[0])
  const [form, setForm] = useState(() => Object.fromEntries(selected.fields.map(f => [f.name, f.default || ''])))
  const [sizeKey, setSizeKey] = useState('InstagramPortrait')
  const canvasRef = useRef(null)

  const size = sizes[sizeKey]

  React.useEffect(()=>{
    // when template changes, reset form with defaults
    setForm(Object.fromEntries(selected.fields.map(f => [f.name, f.default || ''])))
  }, [selected])

  const handleFieldChange = (name, value) => {
    setForm(prev => ({...prev, [name]: value}))
  }

  const handleExportPNG = async () => {
    if (!canvasRef.current) return
    await exportPNG(canvasRef.current, `${selected.id}-${Date.now()}.png`)
  }

  const handleExportPDF = async () => {
    if (!canvasRef.current) return
    await exportPDF(canvasRef.current, `${selected.id}-${Date.now()}.pdf`, size.w, size.h)
  }

  return (
    <div className="min-h-screen font-display">
      <header className="sticky top-0 z-10 bg-white/70 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <h1 className="text-2xl font-bold">🎉 Festify — Card & Poster Generator</h1>
          <div className="flex items-center gap-3">
            <select value={sizeKey} onChange={e=>setSizeKey(e.target.value)} className="border rounded-xl px-3 py-2">
              {Object.entries(sizes).map(([k,v]) => <option key={k} value={k}>{v.label}</option>)}
            </select>
            <button onClick={handleExportPNG} className="px-4 py-2 rounded-xl bg-black text-white hover:opacity-90">Download PNG</button>
            <button onClick={handleExportPDF} className="px-4 py-2 rounded-xl border">Download PDF</button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {TEMPLATES.map(t => (
              <TemplateCard
                key={t.id}
                template={t}
                selected={selected.id === t.id}
                onSelect={() => setSelected(t)}
              />
            ))}
          </div>

          <div className="rounded-2xl bg-white shadow-sm border">
            <div className="p-3 border-b flex items-center justify-between">
              <h2 className="font-semibold">Live Preview</h2>
              <span className="text-sm text-slate-500">{sizes[sizeKey].label}</span>
            </div>
            <div className="p-4 flex items-center justify-center overflow-auto">
              <Canvas
                ref={canvasRef}
                template={selected}
                form={form}
                width={size.w}
                height={size.h}
              />
            </div>
          </div>
        </section>

        <aside className="lg:col-span-1">
          <EditorPanel
            template={selected}
            form={form}
            onChange={handleFieldChange}
          />
        </aside>
      </main>

      <footer className="py-6 text-center text-slate-500 text-sm">
        Made with ❤️ using React + Tailwind (Frontend only) by Awadh Patel
      </footer>
    </div>
  )
}
