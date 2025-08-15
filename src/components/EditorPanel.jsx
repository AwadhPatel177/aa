import React from 'react'

export function EditorPanel({ template, form, onChange }){
  return (
    <div className="rounded-2xl bg-white shadow-sm border">
      <div className="p-3 border-b">
        <h2 className="font-semibold">Edit Details</h2>
      </div>
      <div className="p-4 space-y-3">
        {template.fields.map(f => (
          <div key={f.name} className="space-y-2">
            <label className="text-sm font-medium">{f.label}</label>
            {f.type === 'textarea' ? (
              <textarea
                className="w-full border rounded-xl px-3 py-2"
                rows={3}
                value={form[f.name] ?? ''}
                onChange={e=>onChange(f.name, e.target.value)}
                placeholder={f.placeholder}
              />
            ) : (
              <input
                className="w-full border rounded-xl px-3 py-2"
                type={f.type || 'text'}
                value={form[f.name] ?? ''}
                onChange={e=>onChange(f.name, e.target.value)}
                placeholder={f.placeholder}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
