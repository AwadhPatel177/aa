import React, { forwardRef } from 'react'

export const Canvas = forwardRef(function Canvas({ template, form, width, height }, ref){
  return (
    <div
      ref={ref}
      style={{ width, height }}
      className="relative border bg-white rounded-xl shadow overflow-hidden"
    >
      {template.render({ width, height, data: form })}
    </div>
  )
})
