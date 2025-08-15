import React from 'react'

export function TemplateCard({ template, selected, onSelect }) {
  return (
    <button
      onClick={onSelect}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
        selected ? 'ring-2 ring-indigo-500' : 'border-slate-200'
      }`}
    >
      {/* Preview Area */}
      <div className="h-48 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="scale-[0.4] origin-center pointer-events-none">
          {template.preview()}
        </div>
      </div>

      {/* Info Area */}
      <div className="flex-1 flex flex-col justify-center items-center px-4 py-3 text-center">
        <div className="font-semibold text-slate-800">{template.title}</div>
        <div className="mt-1 text-xs text-slate-500">
          {template.tags.join(' • ')}
        </div>
      </div>
    </button>
  )
}
